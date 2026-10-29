ServerEvents.recipes(event => {
  event.remove({ id: "modern_industrialization:compat/create/macerator/obsidian_to_powdered_obsidian" })

  event.custom({
    "type": "modern_industrialization:macerator",
    "duration": 400,
    "eu": 16,
    "item_inputs": [
      {
        "amount": 1,
        "item": "kubejs:slag"
      }
    ],
    "item_outputs": [
      {
        "amount": 8,
        "item": "kubejs:crushed_stone"
      }
    ],
  }).id("kubejs:slag_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "duration": 200,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "item": "createchemistry:sulfur"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:sulfur_dust"
      }
    ],
  }).id("kubejs:sulfur_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 50,
    "item_inputs": {
      "item": "farmersdelight:rice_panicle",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "farmersdelight:rice",
        "amount": 1
      },
      {
        "item": "farmersdelight:straw",
        "amount": 1
      }
    ]
  }).id("kubejs:rice_panicle_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 50,
    "item_inputs": {
      "item": "minecraft:wheat",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "create:wheat_flour",
        "amount": 1
      },
      {
        "item": "create:wheat_flour",
        "amount": 2,
        "probability": 0.25
      },
      {
        "item": "minecraft:wheat_seeds",
        "amount": 1,
        "probability": 0.25
      }
    ]
  }).id("kubejs:wheat_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 50,
    "item_inputs": {
      "tag": "c:ores/glowstone",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "northstar:raw_glowstone_ore",
        "amount": 2
      }
    ]
  }).id("kubejs:raw_glowstone_ore_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 50,
    "item_inputs": {
      "item": "northstar:raw_glowstone_ore",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "minecraft:glowstone_dust",
        "amount": 2
      }
    ]
  }).id("kubejs:glowstone_ore_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 80,
    "item_inputs": {
      "item": "northstar:lunar_sapphire_shard",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "moremekanismprocessing:dust_sapphire",
        "amount": 1
      }
    ]
  }).id("kubejs:sapphire_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 80,
    "item_inputs": {
      "item": "northstar:lunar_sapphire_block",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "northstar:lunar_sapphire_shard",
        "amount": 3
      },
      {
        "item": "northstar:lunar_sapphire_shard",
        "amount": 1,
        "probability": 0.5
      }
    ]
  }).id("kubejs:sapphire_block_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 4,
    "duration": 100,
    "item_inputs": {
      "item": "minecraft:obsidian",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "mekanism:dust_obsidian",
        "amount": 4
      }
    ]
  }).id("kubejs:obsidian_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 80,
    "item_inputs": {
      "item": "extendedae:entro_crystal",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "extendedae:entro_dust",
        "amount": 1
      }
    ]
  }).id("kubejs:entro_crystal_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": {
      "item": "blood_and_deepslate:molybdenum_ore",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "blood_and_deepslate:raw_molybdenum",
        "amount": 3
      }
    ]
  }).id("kubejs:bad_molybdenum_ore_macerating")

  /*event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
      "item": "blood_and_deepslate:molybdenum_ore",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "blood_and_deepslate:raw_molybdenum",
        "amount": 1
      },
      {
        "item": "blood_and_deepslate:raw_molybdenum",
        "amount": 1,
        "probability": 0.5
      }
    ]
  }).id("kubejs:bad_raw_molybdenum_macerating")*/

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 4,
    "duration": 200,
    "item_inputs": {
      "tag": "c:ores/vanadium",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "electrodynamics:dustvanadium",
        "amount": 2
      },
      {
        "item": "electrodynamics:dustvanadium",
        "amount": 1,
        "probability": 0.5
      }
    ]
  }).id("kubejs:vanadium_ore_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 16,
    "duration": 200,
    "item_inputs": {
      "tag": "c:ores/hellforged",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "neovitae:raw_demonite",
        "amount": 2
      },
      {
        "item": "neovitae:raw_demonite",
        "amount": 1,
        "probability": 0.5
      }
    ]
  }).id("kubejs:demonite_ore_macerating")
})