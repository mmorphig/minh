import json
import re
from pathlib import Path

INPUT_FILE = Path("./veins.json")
OUTPUT_DIR = Path("./minh-data/data/minh/gtmogs/ore_vein")

MIN_Y = -48
MAX_Y = 64

DEFAULTS = {
    "cluster_size": 32,
    "density": 0.2,
    "weight": 30,
    "layer": "stone",
    "dimension_filter": ["minecraft:overworld"],
    "discard_chance_on_air_exposure": 0.0,
    "y_radius": 4,

    "layers": {
        "primary": 3,
        "secondary": 3,
        "between": 2,
        "sporadic": 1
    }
}


def safe_filename(name):
    return re.sub(r"[^a-zA-Z0-9_-]", "_", name)


def validate_entries(group, field, vein_name):
    if not isinstance(group, dict):
        raise ValueError(f"{vein_name}: '{field}' must be an object")

    if "layers" not in group:
        raise ValueError(f"{vein_name}: '{field}' is missing 'layers'")

    if not isinstance(group["layers"], int) or group["layers"] < 1:
        raise ValueError(f"{vein_name}: '{field}.layers' must be a positive integer")

    if "blocks" not in group or not isinstance(group["blocks"], list):
        raise ValueError(f"{vein_name}: '{field}.blocks' must be a list")

    if not group["blocks"]:
        raise ValueError(f"{vein_name}: '{field}.blocks' cannot be empty")

    for block in group["blocks"]:
        if not isinstance(block, str):
            raise ValueError(
                f"{vein_name}: entries in '{field}.blocks' must be block ID strings"
            )


def get_block(entry):
    if isinstance(entry, str):
        return entry, None

    return entry["block"], entry.get("deepslate_block")


def make_targets(blocks):
    targets = []

    for block in blocks:
        targets.extend([
            {
                "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "minecraft:stone_ore_replaceables"
                },
                "state": {"Name": block}
            },
            {
                "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "minecraft:deepslate_ore_replaceables"
                },
                "state": {"Name": block}
            }
        ])

    return targets


def make_group(group):
    return {
        "targets": make_targets(group["blocks"]),
        "layers": group["layers"]
    }


def build_vein(name, config):
    groups = {}

    for group in (
        "primary",
        "secondary",
        "between",
        "sporadic"
    ):
        groups[group] = config.get(group)

        if groups[group] is None:
            raise ValueError(f"{name}: missing '{group}' group")

        validate_entries(groups[group], group, name)

    required = ["weight", "density", "layer", "biomes"]
    missing = [key for key in required if key not in config]

    if missing:
        raise ValueError(
            f"{name}: missing fields: {', '.join(missing)}"
        )

    generator = {
        "type": "gtmogs:classic",
        "primary": make_group(groups["primary"]),
        "secondary": make_group(groups["secondary"]),
        "between": make_group(groups["between"]),
        "sporadic": make_group(groups["sporadic"]),
        "y_radius": config.get("y_radius", DEFAULTS["y_radius"])
    }

    return {
        "cluster_size": config.get("cluster_size", DEFAULTS["cluster_size"]),
        "density": config["density"],
        "weight": config["weight"],
        "layer": config["layer"],
        "dimension_filter": config.get(
            "dimension_filter",
            DEFAULTS["dimension_filter"]
        ),
        "height_range": {
            "height": {
                "type": "minecraft:uniform",
                "min_inclusive": {
                    "absolute": config.get("min_y", MIN_Y)
                },
                "max_inclusive": {
                    "absolute": config.get("max_y", MAX_Y)
                }
            }
        },
        "discard_chance_on_air_exposure": config.get(
            "discard_chance_on_air_exposure",
            DEFAULTS["discard_chance_on_air_exposure"]
        ),
        "biomes": config["biomes"],
        "generator": generator
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
