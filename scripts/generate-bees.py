
import json
import re
from pathlib import Path

NAMESPACE = "minh"

INPUT_FILE = Path("./bees.json")

SPECIES_DIR = Path("minh-data/data") / NAMESPACE / "bee_species"
MUTATION_DIR = Path("minh-data/data") / NAMESPACE / "recipe" / "bee_mutation"
LANG_FILE = Path("minh-resources/assets") / NAMESPACE / "lang" / "en_us.json"

SPECIES_FIELDS = {
    "genus",
    "species",
    "dominant",
    "glint",
    "secret",
    "complexity",
    "authority",
    "escritoire_color",
    "temperature",
    "humidity",
    "body",
    "stripes",
    "outline",
    "products",
    "specialties",
    "jubilance",
    "genome",
}


def hex_to_int(value):
    if isinstance(value, str) and value.startswith("#"):
        return int(value[1:], 16)
    return value


def valid_identifier(value):
    if not re.fullmatch(r"[a-z0-9_.-]+", value):
        raise ValueError(f"Invalid identifier: {value}")


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)

    with path.open("w", encoding="utf-8") as file:
        json.dump(data, file, indent=2, ensure_ascii=False)
        file.write("\n")


def clean_species(data):
    result = {
        key: value
        for key, value in data.items()
        if key in SPECIES_FIELDS
    }

    for key in (
        "body",
        "stripes",
        "outline",
        "escritoire_color",
    ):
        if key in result:
            result[key] = hex_to_int(result[key])

    for key in ("genus", "species"):
        if key not in result:
            raise ValueError(
                f"Missing required species field: {key}"
            )

    return result


def generate_species(bee_id, bee):
    species = clean_species(bee["species"])

    path = SPECIES_DIR / f"{bee_id}.json"
    write_json(path, species)

    print(f"Species:  {NAMESPACE}:{bee_id}")


def generate_mutations(bee_id, bee):
    for index, mutation in enumerate(
        bee.get("mutations", []),
        start=1
    ):
        mutation_name = mutation.get(
            "name",
            f"{bee_id}_{index}"
        )

        valid_identifier(mutation_name)

        data = {
            "type": "forestry:bee_mutation",
            "id": f"{NAMESPACE}:bee_mutation/{mutation_name}",
            "first": mutation["first"],
            "second": mutation["second"],
            "result": f"{NAMESPACE}:{bee_id}",
            "chance": mutation["chance"],
        }

        if "conditions" in mutation:
            data["conditions"] = mutation["conditions"]

        if "result_alleles" in mutation:
            data["result_alleles"] = mutation["result_alleles"]

        path = MUTATION_DIR / f"{mutation_name}.json"
        write_json(path, data)

        print(f"Mutation: {mutation_name}")


def generate_translations(bees):
    if LANG_FILE.exists():
        with LANG_FILE.open("r", encoding="utf-8") as file:
            translations = json.load(file)
    else:
        translations = {}

    for bee_id, bee in bees.items():
        key = f"allele.{NAMESPACE}.bee_species.{bee_id}"

        translations[key] = bee.get(
            "name",
            bee_id.replace("_", " ").title()
        )

        if "description" in bee:
            translations[f"{key}.desc"] = bee["description"]

    write_json(LANG_FILE, translations)

    print(f"Language: {LANG_FILE}")


def main():
    with INPUT_FILE.open("r", encoding="utf-8") as file:
        bees = json.load(file)

    if not isinstance(bees, dict):
        raise ValueError("Input must contain a dictionary of bees.")

    if not bees:
        raise ValueError("No bees defined in input file.")

    valid_identifier(NAMESPACE)

    print(f"Generating {len(bees)} bee species...\n")

    for bee_id, bee in bees.items():
        valid_identifier(bee_id)

        if "species" not in bee:
            raise ValueError(
                f"{bee_id}: Missing species definition."
            )

        generate_species(bee_id, bee)
        generate_mutations(bee_id, bee)

    generate_translations(bees)

    print("\nGeneration complete!")


if __name__ == "__main__":
    main()
