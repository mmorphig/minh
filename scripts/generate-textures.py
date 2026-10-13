import numpy as np
import json
from pathlib import Path

from PIL import Image, ImageOps, ImageEnhance

MATERIALS_FILE = Path("materials.json")
SOURCE_DIR = Path("materialsets")
OUTPUT_DIR = Path("minh-resources/assets/modern_industrialization/textures")
GRADIENT_MAPS_DIR = Path(OUTPUT_DIR / "gradient_maps")

BRIGHTNESS = 0.90

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
        isinstance(value, (int, float, str))
        and not isinstance(value, bool)
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


def make_gradient_map(hex_color, output_path, is_dark):
    dark = 1
    if is_dark:
        dark = 0.25

    hex_color = hex_color.lstrip("#")
    target = tuple(int(hex_color[i:i + 2], 16) for i in (0, 2, 4))

    pixels = []

    for i in range(256):
        if i <= 128:
            factor = i / 128
            rgb = tuple(int(channel * factor) for channel in target)
        else:
            factor = (i - 128) / 127
            rgb = tuple(
                int(channel + (255 - channel) * factor)
                for channel in target
            )

        pixels.append((*tuple(int(c * BRIGHTNESS * dark) for c in rgb), 255))

    image = Image.new("RGBA", (256, 1))
    image.putdata(pixels)

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(output_path)


def generate_gradient_maps(materials):
    for material, config in materials.items():
        color = config.get("color")
        if not color:
            continue
        
        dark = config.get("dark")

        make_gradient_map(
            color,
            GRADIENT_MAPS_DIR / f"{material}.png",
            dark
        )


def recolor(image, hex_color, gradient_map=None):
    image = image.convert("RGBA")
    alpha = image.getchannel("A")

    mean_rgb = tuple(
        int(hex_color.lstrip("#")[i:i + 2], 16)
        for i in (0, 2, 4)
    )

    if gradient_map is not None:
        with Image.open(gradient_map) as source:
            ramp_image = source.convert("RGBA")
            if ramp_image.size != (256, 1):
                raise ValueError(
                    f"MI gradient map must be 256x1, got {ramp_image.size}"
                )
            ramp = [
                ramp_image.getpixel((i, 0))[:3]
                for i in range(256)
            ]
    else:
        ramp = [
            tuple(channel * i // 255 for channel in mean_rgb)
            for i in range(256)
        ]

    pixels = []
    for r, g, b, _a in image.getdata():
        luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255

        index = int(luminance * 255)
        pixels.append((*ramp[index], 255))

    result = Image.new("RGBA", image.size)
    result.putdata(pixels)
    result.putalpha(alpha)
    return result


def save_texture(image, folder, filename):
    output = OUTPUT_DIR / folder / f"{filename}.png"
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output)
    print(f"{folder.upper()}: {output}")
    return True


def make_item_texture(material, color, form, source_name=None, shiny=False):
    source_name = source_name or form
    source_path = SOURCE_DIR / "common" / f"{source_name}.png"
    image = load_texture(source_path)

    if image is None:
        print(f"MISSING {source_path}")
        return False

    image = recolor(image, color, Path(GRADIENT_MAPS_DIR / f"{material}.png"))

    if shiny:
        overlay_path = SOURCE_DIR / "shiny" / f"{form}_overlay.png"
        overlay = load_texture(overlay_path)

        if overlay is None:
            print(f"[MISSING] {overlay_path}")
        else:
            if overlay.size != image.size:
                overlay = overlay.resize(
                    image.size, Image.Resampling.NEAREST
                )

            image.alpha_composite(overlay)

    return save_texture(image, "item", f"{material}_{form}")


def make_layered_texture(material, color, base_name, output_name, overlay_name=None, folder="item", overlay_on_top=True):
    common = SOURCE_DIR / "common"
    base_path = common / f"{base_name}.png"
    base = load_texture(base_path)

    if base is None:
        print(f"MISSING {base_path}")
        return False

    base = recolor(base, color, Path(GRADIENT_MAPS_DIR / f"{material}.png"))

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
            recolor(image, color, Path(GRADIENT_MAPS_DIR / f"{material}.png")),
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
        recolor(image, color, Path(GRADIENT_MAPS_DIR / f"{material}.png")),
        "block",
        output_name,
    )

def make_material_set_block(material, color, material_set, form):
    if material_set == "gem":
        material_set = "emerald"
    if material_set == "crystal":
        material_set = "crystal_block"

    source_path = SOURCE_DIR / "blocks" / f"{material_set}.png"
    image = load_texture(source_path)

    if image is None:
        print(f"MISSING {source_path}")
        return False

    return save_texture(
        recolor(image, color, Path(GRADIENT_MAPS_DIR / f"{material}.png")),
        "block",
        f"{material}_{form}",
    )


def make_raw_textures(material, material_set, color):
    generated = 0

    if material_set == "iridium":
        material_set = "iron"

    raw_item_path = SOURCE_DIR / "raw" / f"{material_set}.png"
    raw_item = load_texture(raw_item_path)

    if raw_item is None:
        print(f"MISSING {raw_item_path}")
    else:
        if save_texture(recolor(raw_item, color, Path(GRADIENT_MAPS_DIR / f"{material}.png")), "item", f"raw_{material}"):
            generated += 1

    raw_block_path = (
        SOURCE_DIR / "raw" / f"{material_set}_block.png"
    )
    raw_block = load_texture(raw_block_path)

    if raw_block is None:
        print(f"MISSING {raw_block_path}")
    else:
        if save_texture(
            recolor(raw_block, color, Path(GRADIENT_MAPS_DIR / f"{material}.png")), "block", f"raw_{material}_block"
        ):
            generated += 1

    return generated


def make_ore_blocks(material, material_set, color):
    generated = 0

    if material_set == "iridium":
        material_set = "iron"
    elif material_set == "gem":
        material_set = "emerald"
    
    ore_path = SOURCE_DIR / "ores" / f"{material_set}.png"
    ore_overlay = load_texture(ore_path)

    if ore_overlay is None:
        print(f"MISSING {ore_path}")
        return generated

    tinted_overlay = recolor(ore_overlay, color, Path(GRADIENT_MAPS_DIR / f"{material}.png"))

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
        value = config.get(form, False)

        if value is False or value is None:
            continue

        if form == "ingot" and material_set == "gem":
            source_name = "gem"
            form = "gem"
        elif form == "ingot" and material_set == "crystal":
            source_name = "crystal"
            form = "crystal"

        if make_item_texture(material, color, form, source_name, shiny=(value == "shiny")):
            generated += 1

    if enabled(config, "hot_ingot"):
        source_path = SOURCE_DIR / "common" / "ingot.png"
        image = load_texture(source_path)

        if image is None:
            print(f"MISSING {source_path}")
        else:
            image = recolor(image, color, Path(GRADIENT_MAPS_DIR / f"{material}.png"))

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
                material, color, selected_material_set, "block"
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
        generated += make_raw_textures(material, material_set, color)

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

    generate_gradient_maps(materials)

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
