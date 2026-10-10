import json
import re
from pathlib import Path

INPUT_FILE = Path("./materials.json")
OUTPUT_DIR = Path("./minh-data/data")

NAMESPACE = "minh"
LANG_FILE = Path(
    f"{OUTPUT_DIR}/../../{NAMESPACE}-resources/assets/{NAMESPACE}/lang/en_us.json"
)


def title_case(identifier):
    return " ".join(word.capitalize() for word in identifier.split("_"))


def snake_case(identifier):
    identifier = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", identifier)
    return re.sub(r"[^a-zA-Z0-9]+", "_", identifier).strip("_").lower()


def enabled(value):
    return (
        value is True
        or (
            isinstance(value, (int, float))
            and not isinstance(value, bool)
            and value > 0
        )
        or (isinstance(value, str) and bool(value.strip()))
    )


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def add_tag(tags, tag_name, item_id):
    tags.setdefault(tag_name, set()).add(item_id)


def generate_material_data(material, flags, tags, translations):
    # suffix/prefix, name, kind
    parts = {
        "ingot": ("ingot", "Ingot", "item"),
        "dust": ("dust", "Dust", "item"),
        "tiny_dust": ("tiny_dust", "Tiny Dust", "item"),
        "nugget": ("nugget", "Nugget", "item"),
        "plate": ("plate", "Plate", "item"),
        "double_ingot": ("double_ingot", "Double Ingot", "item"),
        "large_plate": ("large_plate", "Large Plate", "item"),
        "curved_plate": ("curved_plate", "Curved Plate", "item"),
        "ring": ("ring", "Ring", "item"),
        "gear": ("gear", "Gear", "item"),
        "rod": ("rod", "Rod", "item"),
        "bolt": ("bolt", "Bolt", "item"),
        "wire": ("wire", "Wire", "item"),
        "fine_wire": ("fine_wire", "Fine Wire", "item"),
        "cable": ("cable", "Cable", "item"),
        "drill": ("drill", "Drill", "item"),
        "drill_head": ("drill_head", "Drill Head", "item"),
        "rotor": ("rotor", "Rotor", "item"),
        "blade": ("blade", "Blade", "item"),
        "battery": ("battery", "Battery", "item"),
        "hot_ingot": ("hot_ingot", "Hot Ingot", "item"),
        "fuel_rods": ("fuel_rod", "Fuel Rod", "item"),
        "crushed_dust": ("crushed_dust", "Crushed", "item"),
        "raw_ore": ("raw", "Raw", "item"),
        "coil": ("coil", "Coil", "block"),
        "barrel": ("barrel", "Barrel", "block"),
        "tank": ("tank", "Tank", "block"),
        "casing": ("machine_casing", "Machine Casing", "block"),
        "casing_special": (
            "special_casing",
            "Special Casing",
            "block",
        ),
        "pipe_casing": ("pipe_casing", "Pipe Casing", "block"),
        "ingot_block": ("block", "Block", "block"),
        "dust_block": ("dust_block", "Dust Block", "block"),
        "ore_block": ("ore", "Ore", "block"),
    }

    common_tag_suffixes = {
        "ingot": ["ingots"],
        "dust": ["dusts"],
        "tiny_dust": ["tiny_dusts"],
        "nugget": ["nuggets"],
        "plate": ["plates"],
        "double_ingot": ["double_ingots"],
        "large_plate": [],
        "curved_plate": [],
        "ring": ["rings"],
        "gear": ["gears"],
        "rod": ["rods"],
        "bolt": ["bolts"],
        "wire": ["wires"],
        "fine_wire": ["wires"],
        "cable": ["cables"],
        "rotor": ["rotors"],
        "blade": ["blades"],
        "battery": ["batteries"],
        "fuel_rods": ["fuel_rods"],
        "raw_ore": ["raw_materials"],
        "crushed_dust": [],
    }

    for flag, (suffix, display_name, kind) in parts.items():
        value = flags.get(flag, False)

        if not enabled(value):
            continue

        if enabled(flags.get("drill", False)):
            flags = {**flags, "drill_head": True}

        if flag == "raw_ore":
            registry_id = f"{NAMESPACE}:raw_{material}"
            translation_name = f"Raw {title_case(material)}"

        elif flag == "crushed_dust":
            registry_id = f"{NAMESPACE}:{material}_crushed_dust"
            translation_name = f"Crushed {title_case(material)}"

        elif flag in ("casing", "casing_special") and isinstance(value, str):
            registry_id = f"{NAMESPACE}:{snake_case(value)}"
            translation_name = value.strip()

        else:
            registry_id = f"{NAMESPACE}:{material}_{suffix}"
            translation_name = f"{title_case(material)} {display_name}"

        translation_key = f"{kind}.{registry_id.replace(':', '.', 1)}"
        translations[translation_key] = translation_name

        if kind == "item":
            for tag_suffix in common_tag_suffixes.get(flag, []):
                add_tag(
                    tags,
                    f"{tag_suffix}/{material}",
                    registry_id,
                )

        if flag == "ore_block":
            deepslate_id = f"{NAMESPACE}:deepslate_{material}_ore"

            translations[
                f"block.{NAMESPACE}.deepslate_{material}_ore"
            ] = f"Deepslate {title_case(material)} Ore"

            add_tag(tags, f"ores/{material}", registry_id)
            add_tag(tags, f"ores/{material}", deepslate_id)

        if flag == "raw_ore":
            raw_block_id = f"{NAMESPACE}:raw_{material}_block"

            translations[
                f"block.{NAMESPACE}.raw_{material}_block"
            ] = f"Block of Raw {title_case(material)}"


def main():
    materials = json.loads(INPUT_FILE.read_text(encoding="utf-8"))

    tags = {}
    translations = {}

    for material, flags in materials.items():
        generate_material_data(material, flags, tags, translations)

    parent_tags = {}

    for tag_name in tags:
        parent, separator, _material = tag_name.partition("/")

        if separator:
            parent_tags.setdefault(parent, set()).add(f"#{tag_name}")

    for tag_name, entries in tags.items():
        path = OUTPUT_DIR / "c" / "tags" / "items" / f"{tag_name}.json"

        write_json(path, {
            "replace": False,
            "values": sorted(entries),
        })

    for tag_name, entries in parent_tags.items():
        path = OUTPUT_DIR / "c" / "tags" / "items" / f"{tag_name}.json"

        write_json(path, {
            "replace": False,
            "values": sorted(entries),
        })

    if LANG_FILE.exists():
        existing = json.loads(LANG_FILE.read_text(encoding="utf-8"))
        existing.update(translations)
        translations = existing

    write_json(LANG_FILE, translations)

    print(f"Processed {len(materials)} materials.")
    print(f"Generated {len(tags)} material-specific c: item tags.")
    print(f"Generated {len(parent_tags)} parent c: item tags.")
    print(f"Generated {len(translations)} translation entries.")
    print(f"Output directory: {OUTPUT_DIR.resolve()}")


if __name__ == "__main__":
    main()