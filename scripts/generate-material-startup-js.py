import json
from pathlib import Path

INPUT_FILE = Path("./materials.json")
OUTPUT_FILE = Path("../build/materials-generated.js")

DEFAULT_HARDNESS = "average"
DEFAULT_MATERIAL_SET = "metallic"
PARTS = [
    "rotor",
    "blade",
    "battery",
    "ingot_block",
    "dust_block",
    "barrel",
    "tank",
    "fuel_rods",
    "drill",
    "bolt",
    "rod",
    "plate",
    "ingot",
    "dust",
    "tiny_dust",
    "nugget",
    "ring",
    "gear",
    "curved_plate",
    "double_ingot",
    "large_plate",
    "hot_ingot",
    "coil",
    "wire",
    "fine_wire",
    "ore_block",
    "raw_ore",
    "crushed_dust",
]

SPECIAL_PROPERTIES = {
    "material_set",
    "color",
    "dark",
    "hardness",
    "casing",
    "casing_special",
    "pipe_casing",
    "cable",
    "ore_block",
    "raw_ore",
    "crushed_dust",
    "raw_metal",
    "ore_set",
    "ore_generate",
    "biome_tag",
    "vein_size",
    "veins_per_chunk",
    "min_y",
    "max_y",
}

METHODS = {
    "material_set": "materialSet",
    "casing_special": "casing",
    "pipe_casing": "pipeCasing",
    "fuel_rods": "fuelRod",
    "ingot_block": "ingotBlock",
    "dust_block": "dustBlock",
    "raw_metal": "rawMetal",
}

BOOLEAN_PARTS = {
    "rotor",
    "blade",
    "battery",
    "ingot_block",
    "dust_block",
    "barrel",
    "tank",
    "fuel_rods",
    "drill",
    "bolt",
    "rod",
    "plate",
    "ingot",
    "dust",
    "tiny_dust",
    "nugget",
    "ring",
    "gear",
    "curved_plate",
    "double_ingot",
    "large_plate",
    "coil",
    "wire",
    "fine_wire",
    "ore_block",
    "raw_ore",
    "crushed_dust",
}


def title_case(identifier):
    return " ".join(word.capitalize() for word in identifier.split("_"))


def js_string(value):
    return json.dumps(str(value))


def js_value(value):
    if isinstance(value, bool):
        return str(value).lower()
    if isinstance(value, (int, float)):
        return str(value)
    if value is None:
        return "null"
    return js_string(value)


def generate_material(name, config):
    display_name = title_case(name)
    color = config.get("color", "#FFFFFF")
    hardness = config.get("hardness", DEFAULT_HARDNESS)
    material_set = config.get("material_set", DEFAULT_MATERIAL_SET)

    lines = [
        f"  event.createMaterial({js_string(display_name)}, {js_string(name)}, {color.replace("#", "0x")},",
        "    builder => { builder",
        f"      .hardness({hardness})",
        f"      .materialSet({js_string(material_set)})",
    ]

    parts = []

    for part in PARTS:
        value = config.get(part, False)

        if value is False or value is None:
            continue

        if part in BOOLEAN_PARTS and value is True:
            parts.append(js_string(part))
        elif part not in BOOLEAN_PARTS and value is not False:
            parts.append(js_string(part))

    if parts:
        lines.append("      .addParts(")
        for index, part in enumerate(parts):
            comma = "," if index < len(parts) - 1 else ""
            lines.append(f"        {part}{comma}")
        lines.append("      )")

    if config.get("ore_block", False) or config.get("raw_ore", False):
        ore_set = config.get("ore_set", material_set)
        generate = config.get("ore_generate", False)
        biome_tag = config.get(
            "biome_tag", "minecraft:is_overworld"
        )
        vein_size = config.get("vein_size", 8)
        veins_per_chunk = config.get("veins_per_chunk", 4)
        min_y = config.get("min_y")
        max_y = config.get("max_y", 32)

        lines.extend([
            "      .ore({",
            f"        ore_set: {js_string(ore_set)},",
            f"        generate: {str(generate).lower()},",
            f"        biome_tag: {js_string(biome_tag)},",
            f"        vein_size: {vein_size},",
            f"        veins_per_chunk: {veins_per_chunk},",
        ])

        if min_y is not None:
            lines.append(f"        min_y: {min_y},")

        lines.extend([
            f"        max_y: {max_y}",
            "      })",
        ])

    if config.get("raw_ore", False):
        lines.append(
            f"      .rawMetal({js_string(config.get('raw_metal', material_set))})"
        )

    cable = config.get("cable", False)
    if cable:
        tier = cable if isinstance(cable, str) else "lv"
        lines.append(f"      .cable({js_string(tier)})")

    casing_special = config.get("casing_special", False)
    if casing_special:
        casing_name = (
            casing_special
            if isinstance(casing_special, str)
            else title_case(name) + " Machine Casing"
        )
        lines.append(f"        .casing({js_string(casing_name)})")

    lines.extend([
        "    }",
        "  );",
    ])

    return "\n".join(lines)


def main():
    with INPUT_FILE.open("r", encoding="utf-8") as file:
        materials = json.load(file)

    output = [
        "// Auto-generated",
        "MIMaterialEvents.addMaterials(event => {",
    ]

    for name, config in materials.items():
        output.append(generate_material(name, config))

    output.append("});")

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text("\n".join(output) + "\n", encoding="utf-8")

    print(f"Generated {OUTPUT_FILE} for {len(materials)} materials.")


if __name__ == "__main__":
    main()