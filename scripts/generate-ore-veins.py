import json
import re
from pathlib import Path

INPUT_FILE = Path("./veins.json")
OUTPUT_DIR = Path("./minh-data/data/minh/gtceu/ore_vein")

DEFAULTS = {
    "cluster_size": {
        "type": "minecraft:uniform",
        "min_inclusive": 40,
        "max_inclusive": 50
    },
    "dimension_filter": ["minecraft:overworld"],
    "height_range": {
        "type": "minecraft:uniform",
        "min_inclusive": {"absolute": -48},
        "max_inclusive": {"absolute": 64}
    },
    "discard_chance_on_air_exposure": 0.0,
    "generator": {
        "type": "gtceu:veined",
        "edge_roundoff_begin": 3,
        "filler_block": {"Name": "minecraft:air"},
        "max_edge_roundoff": 0.1,
        "max_richness": 1.0,
        "max_richness_threshold": 0.3,
        "min_richness": 0.4,
        "veininess_threshold": 0.1
    },
    "indicators": []
}


def safe_filename(name):
    return re.sub(r"[^a-zA-Z0-9_-]", "_", name)


def validate_entries(entries, field, vein_name):
    if not isinstance(entries, list):
        raise ValueError(f"{vein_name}: '{field}' must be a list")

    for entry in entries:
        if not isinstance(entry, dict):
            raise ValueError(f"{vein_name}: invalid entry in '{field}'")

        if not isinstance(entry.get("block"), str):
            raise ValueError(f"{vein_name}: every '{field}' entry needs a block")

        if not isinstance(entry.get("weight"), (int, float)):
            raise ValueError(f"{vein_name}: every '{field}' entry needs a weight")

        if entry["weight"] <= 0:
            raise ValueError(f"{vein_name}: block weights must be positive")


def build_vein(name, config):
    required = [
        "weight",
        "density",
        "layer",
        "biomes",
        "ore_blocks",
        "rare_blocks",
        "rare_block_chance"
    ]

    missing = [key for key in required if key not in config]
    if missing:
        raise ValueError(f"{name}: missing fields: {', '.join(missing)}")

    validate_entries(config["ore_blocks"], "ore_blocks", name)
    validate_entries(config["rare_blocks"], "rare_blocks", name)

    generator = DEFAULTS["generator"].copy()
    generator["max_y"] = 64
    generator["min_y"] = -48
    generator["ore_blocks"] = config["ore_blocks"]
    generator["rare_blocks"] = config["rare_blocks"]
    generator["rare_block_chance"] = config["rare_block_chance"]

    return {
        "weight": config["weight"],
        "cluster_size": DEFAULTS["cluster_size"],
        "density": config["density"],
        "discard_chance_on_air_exposure":
            DEFAULTS["discard_chance_on_air_exposure"],
        "layer": config["layer"],
        "dimension_filter": DEFAULTS["dimension_filter"],
        "biomes": config["biomes"],
        "height_range": DEFAULTS["height_range"],
        "generator": generator,
        "indicators": DEFAULTS["indicators"]
    }


def main():
    if not INPUT_FILE.exists():
        raise FileNotFoundError(f"Input file not found: {INPUT_FILE}")

    with INPUT_FILE.open("r", encoding="utf-8") as file:
        veins = json.load(file)

    if not isinstance(veins, dict):
        raise ValueError("The input JSON must contain an object of veins.")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for name, config in veins.items():
        if not isinstance(config, dict):
            raise ValueError(f"{name}: vein configuration must be an object")

        output = build_vein(name, config)
        output_file = OUTPUT_DIR / f"{safe_filename(name)}.json"

        with output_file.open("w", encoding="utf-8") as file:
            json.dump(output, file, indent=2)
            file.write("\n")

        print(f"Generated: {output_file}")

    print(f"\nGenerated {len(veins)} vein files in {OUTPUT_DIR}/")


if __name__ == "__main__":
    main()
