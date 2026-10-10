
import json
from pathlib import Path

from PIL import Image, ImageOps, ImageEnhance

MATERIALS_FILE = Path("materials.json")
SOURCE_DIR = Path("materialsets")
OUTPUT_DIR = Path("minh-resources/assets/modern_industrialization/textures")

SHADOW_FACTOR = 0.30
HIGHLIGHT_FACTOR = 1.30

ITEM_TEXTURES = {
    "plate": "plate",
    "ingot": "ingot",
    "dust": "dust",
    "tiny_dust": "tiny_dust",
    "nugget": "nugget",
    "ring": "ring",
    "gear": "gear",
    "curved_plate": "curved_plate",
    "large_plate": "large_plate",
    "bolt": "bolt",
    "rod": "rod",
    "rotor": "rotor",
    "blade": "blade",
    "wire": "wire",
    "crushed_dust": "crushed_dust",
    "double_ingot": "double_ingot"
}

LAYERED_ITEMS = {

}

BLOCK_TEXTURES = {
    "ingot_block": "blocks",
    "dust_block": "blocks",
    "casing": "machine_casing",
    "casing_special": "machine_casing_special",
    "pipe_casing": "machine_casing_pipe",
}

def texture_filename(name):
    return "_".join(name.lower().split())

def enabled(config, key):
    value = config.get(key, False)
    return value is True or (
        isinstance(value, (int, float))
        and not isinstance(value, bool)
        and value > 0
    )


def load_texture(path):
    if not path.is_file():
        return None

    with Image.open(path) as image:
        return image.convert("RGBA").copy()


def scaled_color(hex_color, factor):
    color = hex_color.lstrip("#")

    if len(color) != 6:
        raise ValueError(f"Invalid color: {hex_color}")

    rgb = tuple(
        int(color[i:i + 2], 16)
        for i in (0, 2, 4)
    )

    return tuple(
        max(0, min(255, round(channel * factor)))
        for channel in rgb
    )


def recolor(image, hex_color):
    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A")
    grayscale = rgba.convert("L")

    tinted = ImageOps.colorize(
        grayscale,
        black=scaled_color(hex_color, SHADOW_FACTOR),
        white=scaled_color(hex_color, HIGHLIGHT_FACTOR),
    ).convert("RGBA")

    tinted.putalpha(alpha)
    return tinted


def save_texture(image, folder, filename):
    output = OUTPUT_DIR / folder / f"{filename}.png"
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output)
    print(f"{folder.upper()}: {output}")
    return True


def make_item_texture(material, color, form, source_name=None):
    source_name = source_name or form
    source_path = SOURCE_DIR / "common" / f"{source_name}.png"
    image = load_texture(source_path)

    if image is None:
        print(f"MISSING {source_path}")
        return False

    image = recolor(image, color)
    return save_texture(image, "item", f"{material}_{form}")


def make_layered_texture(material, color, base_name, output_name, overlay_name=None, folder="item", overlay_on_top=True):
    common = SOURCE_DIR / "common"
    base_path = common / f"{base_name}.png"
    base = load_texture(base_path)

    if base is None:
        print(f"MISSING {base_path}")
        return False

    base = recolor(base, color)

    if overlay_name is not None:
        overlay_path = common / f"{overlay_name}.png"
        overlay = load_texture(overlay_path)

        if overlay is None:
            print(f"MISSING {overlay_path}")
        else:
            if overlay.size != base.size:
                overlay = overlay.resize(
                    base.size, Image.Resampling.NEAREST
                )

            if overlay_on_top:
                base.alpha_composite(overlay)
            else:
                overlay.alpha_composite(base)
                base = overlay

    return save_texture(base, folder, output_name)


def make_drill_textures(material, color):
    generated = 0

    if make_item_texture(
        material, color, "drill_head", "drill_head"
    ):
        generated += 1

    if make_layered_texture(material, color, base_name="drill", overlay_name="drill_underlay", output_name=f"{material}_drill", overlay_on_top=False):
        generated += 1

    return generated


def make_fine_wire_texture(material, color):
    return int(make_layered_texture(
        material,
        color,
        base_name="fine_wire",
        overlay_name="fine_wire_overlay",
        output_name=f"{material}_fine_wire",
    ))


def make_battery_texture(material, color):
    return int(make_layered_texture(
        material,
        color,
        base_name="battery",
        overlay_name="battery_underlay",
        output_name=f"{material}_battery",
        overlay_on_top=False,
    ))


def make_fuel_rod_textures(material, color):
    generated = 0

    if make_item_texture(material, color, "fuel_rod", "fuel_rod"):
        generated += 1

    for variant in ("double", "quad"):
        if make_layered_texture(
            material,
            color,
            base_name=f"fuel_rod_{variant}",
            overlay_name=f"fuel_rod_{variant}_overlay",
            output_name=f"{material}_fuel_rod_{variant}",
        ):
            generated += 1

    return generated


def make_coil_textures(material, color):
    generated = 0

    for part in ("side", "top"):
        if make_item_texture(
            material,
            color,
            f"coil_{part}",
            f"coil_{part}",
        ):
            generated += 1

    return generated


def make_coil_blocks(material, color):
    generated = 0

    for part in ("side", "top"):
        source_path = SOURCE_DIR / "common" / f"coil_{part}.png"
        image = load_texture(source_path)

        if image is None:
            print(f"MISSING {source_path}")
            continue

        if save_texture(
            recolor(image, color),
            "block",
            f"{material}_coil_{part}",
        ):
            generated += 1

    return generated


def make_barrel_textures(material, color):
    generated = 0

    if make_layered_texture(
        material,
        color,
        base_name="barrel_side",
        overlay_name="barrel_side_overlay",
        output_name=f"{material}_barrel_side",
        folder="block",
    ):
        generated += 1

    if make_layered_texture(
        material,
        color,
        base_name="barrel_top",
        output_name=f"{material}_barrel_top",
        folder="block",
    ):
        generated += 1

    return generated


def make_tank_texture(material, color):
    return int(make_layered_texture(
        material,
        color,
        base_name="tank",
        overlay_name="tank_overlay",
        output_name=f"{material}_tank",
        folder="block",
    ))


def make_material_block(material, color, form, source_name, custom_name=False):
    source_path = SOURCE_DIR / "common" / f"{source_name}.png"
    image = load_texture(source_path)

    if image is None:
        print(f"MISSING {source_path}")
        return False

    output_name = form if custom_name else f"{material}_{form}"

    return save_texture(
        recolor(image, color),
        "block",
        output_name,
    )

def make_material_set_block(material, material_set, form):
    source_path = SOURCE_DIR / "blocks" / f"{material_set}.png"
    image = load_texture(source_path)

    if image is None:
        print(f"MISSING {source_path}")
        return False

    return save_texture(image, "block", f"{material}_{form}")


def make_raw_textures(material, material_set):
    generated = 0

    raw_item_path = SOURCE_DIR / "raw" / f"{material_set}.png"
    raw_item = load_texture(raw_item_path)

    if raw_item is None:
        print(f"MISSING {raw_item_path}")
    else:
        if save_texture(raw_item, "item", f"raw_{material}"):
            generated += 1

    raw_block_path = (
        SOURCE_DIR / "raw" / f"{material_set}_block.png"
    )
    raw_block = load_texture(raw_block_path)

    if raw_block is None:
        print(f"MISSING {raw_block_path}")
    else:
        if save_texture(
            raw_block, "block", f"raw_{material}_block"
        ):
            generated += 1

    return generated


def make_ore_blocks(material, material_set, color):
    generated = 0
    ore_path = SOURCE_DIR / "ores" / f"{material_set}.png"
    ore_overlay = load_texture(ore_path)

    if ore_overlay is None:
        print(f"MISSING {ore_path}")
        return generated

    tinted_overlay = recolor(ore_overlay, color)

    for prefix, base_name in (
        ("", "stone"),
        ("deepslate_", "deepslate"),
    ):
        base_path = SOURCE_DIR / f"{base_name}.png"
        base = load_texture(base_path)

        if base is None:
            print(f"MISSING {base_path}")
            continue

        overlay = tinted_overlay.copy()

        if overlay.size != base.size:
            overlay = overlay.resize(
                base.size, Image.Resampling.NEAREST
            )

        base.alpha_composite(overlay)

        if save_texture(
            base, "block", f"{prefix}{material}_ore"
        ):
            generated += 1

    return generated


def make_shiny_item(material, color, form, base_name, overlay_name):
    return int(make_layered_texture(
        material,
        color,
        base_name=base_name,
        overlay_name=overlay_name,
        output_name=f"{material}_{form}",
    ))

def generate_material(material, config):
    color = config["color"]
    material_set = config.get("material_set", "iron")
    generated = 0

    print(f"\n{material} ({color}, {material_set})")

    for form, source_name in ITEM_TEXTURES.items():
        if not enabled(config, form):
            continue

        if make_item_texture(material, color, form, source_name):
            generated += 1

    if enabled(config, "hot_ingot"):
        source_path = SOURCE_DIR / "common" / "ingot.png"
        image = load_texture(source_path)

        if image is None:
            print(f"MISSING {source_path}")
        else:
            image = recolor(image, color)

            alpha = image.getchannel("A")
            image = ImageEnhance.Brightness(image).enhance(1.6)
            image.putalpha(alpha)

            if save_texture(
                image, "item", f"{material}_hot_ingot"
            ):
                generated += 1

    if enabled(config, "drill"):
        generated += make_drill_textures(material, color)

    if enabled(config, "fine_wire"):
        generated += make_fine_wire_texture(material, color)

    if enabled(config, "battery"):
        generated += make_battery_texture(material, color)

    if enabled(config, "fuel_rods"):
        generated += make_fuel_rod_textures(material, color)

    for form, source_name in BLOCK_TEXTURES.items():
        value = config.get(form, False)

        if value is False or value is None:
            continue

        if form in ("ingot_block", "dust_block"):
            if isinstance(value, str):
                selected_material_set = value.lower().replace(" ", "_")
            else:
                selected_material_set = material_set

            if make_material_set_block(
                material, selected_material_set, form
            ):
                generated += 1

        elif form in ("casing", "casing_special"):
            if isinstance(value, str):
                output_name = texture_filename(value)
                custom_name = True
            else:
                output_name = form
                custom_name = False

            if make_material_block(
                material,
                color,
                output_name,
                source_name,
                custom_name=custom_name,
            ):
                generated += 1

        else:
            if make_material_block(
                material, color, form, source_name
            ):
                generated += 1

    if enabled(config, "coil"):
        generated += make_coil_blocks(material, color)

    if enabled(config, "barrel"):
        generated += make_barrel_textures(material, color)

    if enabled(config, "tank"):
        generated += make_tank_texture(material, color)

    if enabled(config, "raw_ore"):
        generated += make_raw_textures(material, material_set)

    if enabled(config, "ore_block"):
        generated += make_ore_blocks(
            material, material_set, color
        )

    print(f"{material}: generated {generated} textures")
    return generated


def main():
    if not MATERIALS_FILE.is_file():
        raise FileNotFoundError(
            f"Materials file not found: {MATERIALS_FILE.resolve()}"
        )

    if not SOURCE_DIR.is_dir():
        raise FileNotFoundError(
            f"Material-set directory not found: {SOURCE_DIR.resolve()}"
        )

    with MATERIALS_FILE.open("r", encoding="utf-8") as file:
        materials = json.load(file)

    total_generated = 0

    for material, config in materials.items():
        if not isinstance(config, dict):
            print(f"Invalid material entry: {material}")
            continue

        if "color" not in config:
            print(f"{material}: missing color")
            continue

        try:
            total_generated += generate_material(material, config)
        except (ValueError, OSError) as error:
            print(f"ERROR {material}: {error}")

    print(f"\nGenerated {total_generated} textures.")


if __name__ == "__main__":
    main()
