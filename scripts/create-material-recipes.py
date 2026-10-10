import json
import math
from pathlib import Path

INPUT_FILE = Path("./materials.json")
OUTPUT_DIR = Path("./minh-data/data/minh/recipe/materials")

MI = "modern_industrialization"

def item(material, part):
    special_names = {
        "raw_metal": f"raw_{material}",
    }
    return f"{MI}:{special_names.get(part, f'{material}_{part}')}"

def item_input(item_id, amount=1):
    return {"item": item_id, "amount": amount}

def item_output(item_id, amount=1, chance=None):
    result = {"item": item_id, "amount": amount}
    if chance is not None:
        result["probability"] = chance
    return result

def fluid_input(fluid, amount):
    return {"fluid": f"{MI}:{fluid}", "amount": amount}


def recipe(machine, eu, duration, inputs, outputs,
           fluids_in=None, fluids_out=None):
    result = {
        "type": f"{MI}:{machine}",
        "eu": eu,
        "duration": duration,
        "item_inputs": inputs,
        "item_outputs": outputs,
    }

    if fluids_in:
        result["fluid_inputs"] = fluids_in

    if fluids_out:
        result["fluid_outputs"] = fluids_out

    return result

def add(recipes, filename, data):
    recipes[filename] = data


def hot_ingot_recipes(material, flags):
    recipes = {}
    eu = flags.get("hot_ingot")

    if not isinstance(eu, (int, float)) or isinstance(eu, bool):
        return recipes

    dust = item(material, "dust")
    hot_ingot = item(material, "hot_ingot")
    ingot = item(material, "ingot")

    if not flags.get("dust") or not flags.get("ingot"):
        return recipes

    add(recipes, "ebf.json", recipe(
        "blast_furnace", eu, eu / 8,
        [item_input(dust)],
        [item_output(hot_ingot)],
    ))

    add(recipes, "ebf_argon.json", recipe(
        "blast_furnace", eu, eu / 8 - eu / 16,
        [item_input(dust)],
        [item_output(hot_ingot)],
        [fluid_input("argon", 800)],
    ))

    add(recipes, "ebf_helium.json", recipe(
        "blast_furnace", eu, math.floor(eu / 8 - eu / 24),
        [item_input(dust)],
        [item_output(hot_ingot)],
        [fluid_input("helium", 1000)],
    ))

    add(recipes, "ebf_nitrogen.json", recipe(
        "blast_furnace", eu, math.ceil(eu / 8 - eu / 42),
        [item_input(dust)],
        [item_output(hot_ingot)],
        [fluid_input("nitrogen", 1000)],
    ))

    add(recipes, "ingot_freezing.json", recipe(
        "vacuum_freezer", eu, eu / 16,
        [item_input(hot_ingot)],
        [item_output(ingot)],
    ))

    add(recipes, "hot_ingot_heat_exchanger.json", recipe(
        "heat_exchanger", 8, 10,
        [item_input(hot_ingot)],
        [item_output(ingot)],
        [fluid_input("cryofluid", 20)],
        [
            {"fluid": f"{MI}:argon", "amount": 13},
            {"fluid": f"{MI}:helium", "amount": 5},
        ],
    ))

    return recipes

def macerator_recipes(material, flags):
    recipes = {}

    def recycle(part, tiny_dust_amount):
        if not flags.get(part):
            return

        outputs = []

        dust_amount, remainder = divmod(tiny_dust_amount, 9)

        if dust_amount:
            outputs.append(item_output(item(material, "dust"), dust_amount))

        if remainder:
            outputs.append(
                item_output(item(material, "tiny_dust"), remainder)
            )

        add(recipes, f"macerator_{part}.json", recipe(
            "macerator", 2, 100,
            [item_input(item(material, part))],
            outputs,
        ))

    #ratios from MI
    for part, amount in {
        "ingot": 9,
        "double_ingot": 18,
        "plate": 9,
        "curved_plate": 9,
        "nugget": 1,
        "large_plate": 36,
        "gear": 18,
        "ring": 4,
        "bolt": 2,
        "rod": 4,
        "wire": 4,
    }.items():
        recycle(part, amount)

    if flags.get("ore_block"):
        add(recipes, "ore_to_raw.json", recipe(
            "macerator", 2, 100,
            [item_input(item(material, "ore"))],
            [item_output(item(material, "raw_metal"), 3)],
        ))

        add(recipes, "raw_to_crushed_dust.json", recipe(
            "macerator", 2, 100,
            [item_input(item(material, "raw_metal"))],
            [item_output(item(material, "crushed_dust"), 3)],
        ))

    if flags.get("raw_ore") and flags.get("dust"):
        add(recipes, "crushed_to_dust.json", recipe(
            "macerator", 2, 100,
            [item_input(item(material, "crushed_dust"))],
            [
                item_output(item(material, "dust")),
                item_output(item(material, "dust"), chance=0.5),
            ],
        ))

    if flags.get("dust") and flags.get("ore_block"):
        add(recipes, "dust_to_dust.json", recipe(
            "macerator", 2, 100,
            [item_input(item(material, "dust"))],
            [
                item_output(item(material, "dust")),
                item_output(item(material, "dust"), chance=0.5),
            ],
        ))

    return recipes

def compressor_recipes(material, flags):
    recipes = {}

    if flags.get("ingot") and flags.get("plate"):
        add(recipes, "compressor_plate.json", recipe(
            "compressor", 2, 100,
            [item_input(item(material, "ingot"))],
            [item_output(item(material, "plate"))],
        ))

    if flags.get("plate") and flags.get("curved_plate"):
        add(recipes, "compressor_curved_plate.json", recipe(
            "compressor", 2, 100,
            [item_input(item(material, "plate"))],
            [item_output(item(material, "curved_plate"))],
        ))

    if flags.get("double_ingot") and flags.get("plate"):
        add(recipes, "compressor_double_ingot.json", recipe(
            "compressor", 2, 100,
            [item_input(item(material, "double_ingot"))],
            [item_output(item(material, "plate"), 2)],
        ))

    if flags.get("rod") and flags.get("ring"):
        add(recipes, "compressor_ring.json", recipe(
            "compressor", 2, 100,
            [item_input(item(material, "rod"))],
            [item_output(item(material, "ring"))],
        ))

    return recipes

def bending_plate_recipes(material, flags):
    recipes = {}

    if flags.get("plate") and flags.get("curved_plate"):
        recipes["curved_plate.json"] = {
            "type": "extended_industrialization:bending_machine",
            "duration": 50,
            "eu": 2,
            "item_inputs": [
                {
                    "amount": 1,
                    "tag": f"c:plates/{material}",
                }
            ],
            "item_outputs": [
                {
                    "amount": 1,
                    "item": f"modern_industrialization:{material}_curved_plate",
                }
            ],
        }

    return recipes

def cutting_machine_recipes(material, flags):
    recipes = {}

    if flags.get("ingot") and flags.get("rod"):
        add(recipes, "cutting_ingot_to_rods.json", recipe(
            "cutting_machine", 2, 100,
            [item_input(item(material, "ingot"))],
            [item_output(item(material, "rod"), 2)],
            [fluid_input("lubricant", 1)],
        ))

    if flags.get("double_ingot") and flags.get("rod"):
        add(recipes, "cutting_double_ingot_to_rods.json", recipe(
            "cutting_machine", 2, 100,
            [item_input(item(material, "double_ingot"))],
            [item_output(item(material, "rod"), 4)],
            [fluid_input("lubricant", 1)],
        ))

    if flags.get("rod") and flags.get("bolt"):
        add(recipes, "cutting_rods_to_bolts.json", recipe(
            "cutting_machine", 2, 100,
            [item_input(item(material, "rod"))],
            [item_output(item(material, "bolt"), 2)],
            [fluid_input("lubricant", 1)],
        ))

    return recipes

def wiremill_recipes(material, flags):
    recipes = {}

    if flags.get("plate") and flags.get("wire"):
        add(recipes, "wiremill_wire.json", recipe(
            "wiremill", 2, 100,
            [item_input(item(material, "plate"))],
            [item_output(item(material, "wire"), 2)],
        ))

    if flags.get("wire") and flags.get("fine_wire"):
        add(recipes, "wiremill_fine_wire.json", recipe(
            "wiremill", 2, 100,
            [item_input(item(material, "wire"))],
            [item_output(item(material, "fine_wire"), 4)],
        ))

    return recipes

def packer_unpacker_recipes(material, flags):
    recipes = {}

    if flags.get("ingot") and flags.get("double_ingot"):
        add(recipes, "packer_double_ingot.json", recipe(
            "packer", 2, 100,
            [
                item_input(item(material, "ingot"), 2),
                item_input(f"{MI}:packer_double_ingot_template"),
            ],
            [item_output(item(material, "double_ingot"))],
        ))

    if flags.get("double_ingot") and flags.get("ingot"):
        add(recipes, "unpacker_double_ingot.json", recipe(
            "unpacker", 2, 100,
            [item_input(item(material, "double_ingot"))],
            [item_output(item(material, "ingot"), 2)],
        ))

    if flags.get("ingot_block") and flags.get("ingot"):
        add(recipes, "unpacker_ingot_block.json", recipe(
            "unpacker", 2, 100,
            [item_input(item(material, "block"))],
            [item_output(item(material, "ingot"), 9)],
        ))

    if flags.get("dust_block") and flags.get("dust"):
        add(recipes, "unpacker_dust_block.json", recipe(
            "unpacker", 2, 100,
            [item_input(item(material, "dust_block"))],
            [item_output(item(material, "dust"), 9)],
        ))

    return recipes

def alloy_smelter_recipes(material, flags):
    recipes = {}

    def alloy_recipe(amount, mold, output):
        return {
            "type": "extended_industrialization:alloy_smelter",
            "duration": 200,
            "eu": 4,
            "item_inputs": [
                {
                    "amount": amount,
                    "tag": f"c:ingots/{material}",
                },
                {
                    "amount": 1,
                    "item": f"kubejs:{mold}_casting_mold",
                    "probability": 0,
                },
            ],
            "item_outputs": [
                {
                    "amount": 1,
                    "item": f"{MI}:{output}",
                }
            ],
        }

    if flags.get("ingot") and flags.get("rotor"):
        recipes["rotor.json"] = alloy_recipe(
            4, "rotor", f"{material}_rotor"
        )

    if flags.get("ingot") and flags.get("gear"):
        recipes["gear_casting.json"] = alloy_recipe(
            3, "gear", f"{material}_gear"
        )

    if flags.get("ingot") and flags.get("plate"):
        recipes["plate_casting.json"] = alloy_recipe(
            1, "plate", f"{material}_plate"
        )

    if flags.get("ingot") and flags.get("ingot_block"):
        recipes["block_casting.json"] = alloy_recipe(
            9, "block", f"{material}_block"
        )

    if flags.get("ingot") and flags.get("pipe_casing"):
        recipes["pipe_casing.json"] = alloy_recipe(
            11, "pipe_casing", f"{material}_pipe_casing"
        )

    return recipes

def cable_recipes(material, flags):
    recipes = {}

    if not flags.get("wire") or not flags.get("cable"):
        return recipes

    wire_tag = f"c:wires/{material}"
    cable_id = f"modern_industrialization:{material}_cable"

    recipes["cable_crafting.json"] = {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "pattern": [
            "RRR",
            "WWW",
            "RRR",
        ],
        "key": {
            "R": {
                "item": "modern_industrialization:rubber_sheet"
            },
            "W": {
                "tag": wire_tag
            },
        },
        "result": {
            "id": cable_id,
            "count": 3,
        },
    }

    recipes["cable_assembler_synthetic_rubber.json"] = {
        "type": "modern_industrialization:assembler",
        "eu": 8,
        "duration": 100,
        "item_inputs": [
            {"tag": wire_tag, "amount": 3},
        ],
        "fluid_inputs": [
            {
                "fluid": "modern_industrialization:synthetic_rubber",
                "amount": 30,
            },
        ],
        "item_outputs": [
            {"item": cable_id, "amount": 3},
        ],
    }

    recipes["cable_assembler_styrene_butadiene_rubber.json"] = {
        "type": "modern_industrialization:assembler",
        "eu": 8,
        "duration": 100,
        "item_inputs": [
            {"tag": wire_tag, "amount": 3},
        ],
        "fluid_inputs": [
            {
                "fluid": "modern_industrialization:styrene_butadiene_rubber",
                "amount": 6,
            },
        ],
        "item_outputs": [
            {"item": cable_id, "amount": 3},
        ],
    }

    return recipes

def assembler_recipes(material, flags):
    recipes = {}

    plate_tag = f"c:plates/{material}"
    gear_tag = f"c:gears/{material}"
    rod_tag = f"c:rods/{material}"
    cable_tag = f"c:cables/{material}"

    def assembler(inputs, outputs, eu=2, soldering_alloy=None):
        result = recipe(
            "assembler",
            eu,
            200,
            inputs,
            outputs,
            fluids_in=(
                [fluid_input("soldering_alloy", soldering_alloy)]
                if soldering_alloy is not None
                else None
            ),
        )
        return result

    if flags.get("plate") and flags.get("ring") and flags.get("gear"):
        recipes["gear_assembler.json"] = assembler(
            [
                {"tag": plate_tag, "amount": 4},
                item_input(item(material, "ring")),
            ],
            [item_output(item(material, "gear"), 2)],
            eu=2,
            soldering_alloy=100,
        )

    if flags.get("blade") and flags.get("ring") and flags.get("rotor"):
        recipes["rotor_assembler.json"] = assembler(
            [
                item_input(item(material, "blade"), 4),
                item_input(item(material, "ring")),
            ],
            [item_output(item(material, "rotor"))],
            eu=2,
            soldering_alloy=100,
        )

    if (
        flags.get("plate")
        and flags.get("curved_plate")
        and flags.get("rod")
        and flags.get("gear")
        and flags.get("drill")
    ):
        recipes["drill_head_assembler.json"] = assembler(
            [
                {"tag": plate_tag, "amount": 1},
                item_input(item(material, "curved_plate"), 2),
                {"tag": rod_tag, "amount": 1},
                {"tag": gear_tag, "amount": 2},
            ],
            [item_output(item(material, "drill_head"))],
            eu=2,
            soldering_alloy=75,
        )

    if flags.get("plate") and flags.get("barrel"):
        recipes["barrel_assembler.json"] = assembler(
            [
                {"tag": "c:barrels/wooden", "amount": 1},
                {"tag": plate_tag, "amount": 8},
            ],
            [item_output(item(material, "barrel"))],
            eu=8,
        )

    if flags.get("plate") and flags.get("tank"):
        recipes["tank_assembler.json"] = assembler(
            [
                {"tag": plate_tag, "amount": 8},
                {"tag": "c:glass_blocks", "amount": 1},
            ],
            [item_output(item(material, "tank"))],
            eu=8,
        )

    return recipes

def assembler_component_recipes(material, flags):
    recipes = {}

    def assembler(filename, eu, inputs, output, amount=1, fluids=None):
        data = {
            "type": f"{MI}:assembler",
            "duration": 200,
            "eu": eu,
            "item_inputs": inputs,
            "item_outputs": [
                item_output(item(material, output), amount),
            ],
        }

        if fluids:
            data["fluid_inputs"] = fluids

        recipes[filename] = data

    soldering_alloy = [
        fluid_input("soldering_alloy", 100),
    ]

    if flags.get("plate") and flags.get("ring") and flags.get("gear"):
        assembler(
            "assembler_gear.json",
            2,
            [
                {"tag": f"c:plates/{material}", "amount": 4},
                item_input(item(material, "ring")),
            ],
            "gear",
            amount=2,
            fluids=soldering_alloy,
        )

    if flags.get("blade") and flags.get("ring") and flags.get("rotor"):
        assembler(
            "assembler_rotor.json",
            2,
            [
                item_input(item(material, "blade"), 4),
                item_input(item(material, "ring")),
            ],
            "rotor",
            fluids=soldering_alloy,
        )

    if (
        flags.get("plate")
        and flags.get("curved_plate")
        and flags.get("rod")
        and flags.get("gear")
        and flags.get("drill")
    ):
        assembler(
            "assembler_drill_head.json",
            2,
            [
                {"tag": f"c:plates/{material}", "amount": 1},
                item_input(item(material, "curved_plate"), 2),
                {"tag": f"c:rods/{material}", "amount": 1},
                {"tag": f"c:gears/{material}", "amount": 2},
            ],
            "drill_head",
            fluids=[fluid_input("soldering_alloy", 75)],
        )

    if flags.get("drill"):
        recipes["assembler_drill.json"] = recipe(
            "assembler",
            8,
            200,
            [
                item_input(item(material, "drill_head")),
                {"tag": "c:gears/iron", "amount": 2},
                {"tag": f"{MI}:fluid_pipes", "amount": 2},
                item_input(f"{MI}:pump", 2),
                item_input(f"{MI}:electrum_cable"),
                item_input(f"{MI}:electronic_circuit"),
            ],
            [item_output(item(material, "drill"), 4)],
        )

    if flags.get("barrel") and flags.get("plate"):
        assembler(
            "assembler_barrel.json",
            8,
            [
                {"tag": "c:barrels/wooden", "amount": 1},
                {"tag": f"c:plates/{material}", "amount": 8},
            ],
            "barrel",
        )

    if flags.get("tank") and flags.get("plate"):
        assembler(
            "assembler_tank.json",
            8,
            [
                {"tag": f"c:plates/{material}", "amount": 8},
                {"tag": "c:glass_blocks", "amount": 1},
            ],
            "tank",
        )

    return recipes

def coil_recipes(material, flags):
    recipes = {}

    if not flags.get("coil") or not flags.get("cable"):
        return recipes

    cable_tag = f"c:cables/{material}"
    cable_id = f"modern_industrialization:{material}_cable"
    coil_id = f"modern_industrialization:{material}_coil"

    recipes["coil_crafting.json"] = {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "pattern": [
            "CCC",
            "C C",
            "CCC",
        ],
        "key": {
            "C": {
                "tag": cable_tag,
            },
        },
        "result": {
            "id": coil_id,
            "count": 1,
        },
    }

    recipes["coil_unpacker.json"] = {
        "type": "modern_industrialization:unpacker",
        "eu": 2,
        "duration": 100,
        "item_inputs": [
            {"item": coil_id, "amount": 1},
        ],
        "item_outputs": [
            {"item": cable_id, "amount": 8},
        ],
    }

    return recipes

def crafting_recipes(material, flags):
    recipes = {}

    def shaped(pattern, key, output, count=1):
        return {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": key,
            "pattern": pattern,
            "result": {
                "count": count,
                "id": item(material, output),
            },
        }

    if flags.get("tiny_dust") and flags.get("dust"):
        recipes["craft_dust_from_tiny_dust.json"] = {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {"X": {"item": item(material, "tiny_dust")}},
            "pattern": ["XXX", "XXX", "XXX"],
            "result": {"count": 1, "id": item(material, "dust")},
        }

        recipes["craft_tiny_dust_from_dust.json"] = {
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{"item": item(material, "dust")}],
            "result": {"count": 9, "id": item(material, "tiny_dust")},
        }

    if flags.get("nugget") and flags.get("ingot"):
        recipes["craft_ingot_from_nuggets.json"] = {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {"X": {"item": item(material, "nugget")}},
            "pattern": ["XXX", "XXX", "XXX"],
            "result": {"count": 1, "id": item(material, "ingot")},
        }

        recipes["craft_nuggets_from_ingot.json"] = {
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{"item": item(material, "ingot")}],
            "result": {"count": 9, "id": item(material, "nugget")},
        }

    if flags.get("ingot") and flags.get("ingot_block"):
        recipes["craft_block_from_ingots.json"] = {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {"X": {"tag": f"c:ingots/{material}"}},
            "pattern": ["XXX", "XXX", "XXX"],
            "result": {"count": 1, "id": item(material, "block")},
        }

        recipes["craft_ingots_from_block.json"] = {
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{"item": item(material, "block")}],
            "result": {"count": 9, "id": item(material, "ingot")},
        }

    if (
        flags.get("plate")
        and flags.get("gear")
        and flags.get("ring")
        and flags.get("bolt")
    ):
        recipes["gear_crafting.json"] = shaped(
            ["PbP", "bRb", "PbP"],
            {
                "P": {"tag": f"c:plates/{material}"},
                "R": {"item": item(material, "ring")},
                "b": {"item": item(material, "bolt")},
            },
            "gear",
        )

    if (
        flags.get("gear")
        and flags.get("rod")
        and flags.get("bolt")
        and flags.get("curved_plate")
        and flags.get("plate")
    ):
        recipes["drill_head_crafting.json"] = shaped(
            ["bcp", "GRc", "bGb"],
            {
                "G": {"tag": f"c:gears/{material}"},
                "R": {"tag": f"c:rods/{material}"},
                "b": {"item": item(material, "bolt")},
                "c": {"item": item(material, "curved_plate")},
                "p": {"tag": f"c:plates/{material}"},
            },
            "drill_head",
        )

    if flags.get("rod") and flags.get("bolt") and flags.get("ring"):
        recipes["ring_crafting.json"] = shaped(
            ["bRb", "R R", "bRb"],
            {
                "R": {"tag": f"c:rods/{material}"},
                "b": {"item": item(material, "bolt")},
            },
            "ring",
            count=2,
        )

    if flags.get("blade") and flags.get("ring") and flags.get("bolt") and flags.get("rotor"):
        recipes["rotor_crafting.json"] = shaped(
            ["bBb", "BRB", "bBb"],
            {
                "B": {"item": item(material, "blade")},
                "R": {"item": item(material, "ring")},
                "b": {"item": item(material, "bolt")},
            },
            "rotor",
        )

    if flags.get("plate") and flags.get("tank"):
        recipes["tank_crafting.json"] = shaped(
            ["###", "#G#", "###"],
            {
                "#": {"tag": f"c:plates/{material}"},
                "G": {"tag": "c:glass_blocks"},
            },
            "tank",
        )

    if flags.get("plate") and flags.get("barrel"):
        recipes["barrel_crafting.json"] = shaped(
            ["###", "#b#", "###"],
            {
                "#": {"tag": f"c:plates/{material}"},
                "b": {"tag": "c:barrels/wooden"},
            },
            "barrel",
        )

    return recipes

def large_plate_recipes(material, flags):
    recipes = {}

    if flags.get("plate") and flags.get("large_plate"):
        recipes["large_plate_packer.json"] = recipe(
            "packer", 2, 100,
            [
                item_input(item(material, "plate"), 4),
            ],
            [
                item_output(item(material, "large_plate")),
            ],
        )

    return recipes

def block_packer_recipes(material, flags):
    recipes = {}

    if flags.get("ingot") and flags.get("ingot_block"):
        recipes["packer_ingot_block.json"] = recipe(
            "packer", 2, 100,
            [
                item_input(item(material, "ingot"), 9),
                item_input(f"{MI}:packer_block_template"),
            ],
            [
                item_output(item(material, "block")),
            ],
        )

    return recipes


def full_recipes(material, flags):
    recipes = {}

    for generator in (
        hot_ingot_recipes,
        macerator_recipes,
        compressor_recipes,
        cutting_machine_recipes,
        wiremill_recipes,
        packer_unpacker_recipes,
        alloy_smelter_recipes,
        cable_recipes,
        coil_recipes,
        bending_plate_recipes,
        crafting_recipes,
        large_plate_recipes,
        block_packer_recipes,
        assembler_component_recipes,
    ):
        recipes.update(generator(material, flags))

    return recipes

def main():
    materials_json = json.loads(INPUT_FILE.read_text(encoding="utf-8"))

    for material, flags in materials_json.items():
        material_dir = OUTPUT_DIR / material
        material_dir.mkdir(parents=True, exist_ok=True)

        recipes = full_recipes(material, flags)

        print(f"\n{material}: generated {len(recipes)} recipes")

        for filename, recipe_data in recipes.items():
            output_file = material_dir / filename
            output_file.write_text(
                json.dumps(recipe_data, indent=2) + "\n",
                encoding="utf-8",
            )
            print(f"{filename}")

if __name__ == "__main__":
    main()
    