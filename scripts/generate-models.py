from pathlib import Path
import json
import re

MATERIALS_FILE = Path("./materials.json")

BASE = Path("./minh-resources/assets/modern_industrialization")
ITEM_MODEL_DIR = BASE / "models/item"
BLOCK_MODEL_DIR = BASE / "models/block"


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(data, indent=2) + "\n",
        encoding="utf-8"
    )
    print(path)


def enabled(value):
    return value is True or (
        isinstance(value, (int, float))
        and not isinstance(value, bool)
        and value > 0
    )


def snake_case(name):
    name = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", name)
    return re.sub(r"[^a-zA-Z0-9]+", "_", name).strip("_").lower()


def create_item_model(material, part):
    write_json(
        ITEM_MODEL_DIR / f"{material}_{part}.json",
        {
            "parent": "minecraft:item/generated",
            "textures": {
                "layer0": f"modern_industrialization:item/{material}_{part}"
            }
        }
    )


def create_cube_model(block):
    write_json(
        BLOCK_MODEL_DIR / f"{block}.json",
        {
            "parent": "minecraft:block/cube_all",
            "textures": {
                "all": f"modern_industrialization:block/{block}"
            }
        }
    )

    write_json(
        ITEM_MODEL_DIR / f"{block}.json",
        {
            "parent": f"modern_industrialization:block/{block}"
        }
    )


def create_column_model(name, suffix=""):
    texture_name = f"{name}{suffix}"

    write_json(
        BLOCK_MODEL_DIR / f"{texture_name}.json",
        {
            "parent": "minecraft:block/cube_column",
            "textures": {
                "end": f"modern_industrialization:block/{texture_name}_top",
                "side": f"modern_industrialization:block/{texture_name}_side"
            }
        }
    )

    write_json(
        ITEM_MODEL_DIR / f"{texture_name}.json",
        {
            "parent": f"modern_industrialization:block/{texture_name}"
        }
    )


def create_tank_model(name):
    write_json(
        BLOCK_MODEL_DIR / f"{name}_tank.json",
        {
            "parent": "modern_industrialization:base/tank",
            "textures": {
                "0": f"modern_industrialization:block/{name}_tank"
            }
        }
    )

    write_json(
        ITEM_MODEL_DIR / f"{name}_tank.json",
        {
            "parent": "modern_industrialization:block/{name}_tank"
        }
    )


with MATERIALS_FILE.open("r", encoding="utf-8") as f:
    materials = json.load(f)

item_count = 0
block_count = 0

for material, config in materials.items():
    parts = [
        "plate", "ingot", "dust", "tiny_dust", "nugget",
        "ring", "gear", "curved_plate", "double_ingot",
        "large_plate", "hot_ingot", "crushed_dust", "raw_ore",
        "rod", "bolt", "rotor", "blade", "drill",
        "battery", "fine_wire"
    ]

    for part in parts:
        if enabled(config.get(part, False)):
            create_item_model(material, part)
            item_count += 1

            if part == "drill":
                create_item_model(material, "drill_head")
                item_count += 1

    if enabled(config.get("ore_block", False)):
        create_cube_model(f"{material}_ore")
        create_cube_model(f"deepslate_{material}_ore")
        block_count += 2
        item_count += 2

    if enabled(config.get("raw_ore", False)):
        create_cube_model(f"raw_{material}_block")
        block_count += 1
        item_count += 1

    if enabled(config.get("coil", False)):
        create_column_model(material, "_coil")
        block_count += 1
        item_count += 1

    if enabled(config.get("barrel", False)):
        create_column_model(material, "_barrel")
        block_count += 1
        item_count += 1

    if enabled(config.get("tank", False)):
        create_tank_model(material)
        block_count += 1
        item_count += 1

    casing_types = [
        ("casing", ""),
        ("casing_special", "_special_casing"),
        ("pipe_casing", "_pipe_casing"),
    ]

    for flag, suffix in casing_types:
        value = config.get(flag, False)

        if enabled(value):
            if isinstance(value, str):
                casing_name = snake_case(value)
            else:
                casing_name = f"{material}{suffix}"

            create_cube_model(casing_name)
            block_count += 1
            item_count += 1

print()
print(f"Generated {item_count} item models.")
print(f"Generated {block_count} block models.")
