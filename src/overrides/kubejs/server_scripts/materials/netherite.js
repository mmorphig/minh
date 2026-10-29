ServerEvents.recipes(event => {
  event.custom({
    "type": "modern_industrialization:macerator",
    "duration": 200,
    "eu": 32,
    "item_inputs": [
      {
        "amount": 1,
        "item": "minecraft:ancient_debris"
      }
    ],
    "item_outputs": [
      {
        "amount": 2,
        "item": "mekanism:dirty_netherite_scrap"
      },
      {
        "amount": 1,
        "item": "mekanism:dirty_netherite_scrap",
        "probability": 0.75
      }
    ],
  }).id("kubejs:ancient_debris_macerating")

  event.custom({
    "type": "modern_industrialization:macerator",
    "duration": 200,
    "eu": 32,
    "item_inputs": [
      {
        "amount": 1,
        "item": "minecraft:netherite_scrap"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "createmetalwork:crushed_netherite_scrap"
      },
      {
        "amount": 1,
        "item": "createmetalwork:crushed_netherite_scrap",
        "probability": 0.75
      }
    ],
  }).id("kubejs:netherite_scrap_macerating")

  event.remove({ output: "minecraft:netherite_scrap", not: { input: "mekanism:dirty_netherite_scrap" }})

  event.replaceOutput({ output: "extended_industrialization:netherite_dust" },
    "extended_industrialization:netherite_dust", "mekanism:dust_netherite"
  )

  event.replaceInput({ input: "extended_industrialization:netherite_dust" },
    "extended_industrialization:netherite_dust", "mekanism:dust_netherite"
  )

  event.remove({ output: "minecraft:netherite_ingot", not: { input: "minecraft:netherite_block" }})
  event.remove({ id:'avaritia:netherite_ingot_too' })
  event.remove({ id:'extendedcrafting:kjs/netherite_ingot' })

  event.custom({
    'type': 'mekanism:reaction',
    'duration': 200,
    'energy_required': 2000,
    'chemical_input': {
      'amount': 400,
      'chemical': 'mekanismelements:netherite_acid'
    },
    'fluid_input': {
      "fluid": "minecraft:lava",
      "amount": 1000
    },
    'item_input': {
      'count': 4,
      'item': 'kubejs:pure_gold_ingot'
    },
    'item_output': {
      'count': 1,
      'id': 'minecraft:netherite_ingot'
    }
  })

  event.remove({ input: "createmetalwork:crushed_netherite_scrap" })
  event.remove({ id: "mekanism:processing/netherite/scrap_to_dust" })

  event.replaceInput({ id: "mekanismelements:dissolution/netherite_acid" },
    "mekanism:dust_netherite", "createmetalwork:crushed_netherite_scrap"
  )
})