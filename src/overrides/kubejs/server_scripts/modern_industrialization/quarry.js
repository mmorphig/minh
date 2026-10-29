ServerEvents.recipes(event => {
  event.remove({ type: "modern_industrialization:quarry" })

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 8,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:gold_drill",
      "amount": 1,
      "probability": 0.05
    },
    "item_outputs": [
      {
        "item": "minecraft:netherrack",
        "amount": 32,
        "probability": 0.5
      },
      {
        "item": "minecraft:blackstone",
        "amount": 16,
        "probability": 0.25
      },
      {
        "item": "minecraft:basalt",
        "amount": 16,
        "probability": 0.25
      },
      {
        "item": "minecraft:soul_soil",
        "amount": 20,
        "probability": 0.1
      },
      {
        "item": "minecraft:magma_block",
        "amount": 5,
        "probability": 0.1
      },
      {
        "item": "minecraft:soul_sand",
        "amount": 20,
        "probability": 0.25
      },
      {
        "item": "minecraft:glowstone",
        "amount": 4,
        "probability": 0.15
      },
      {
        "item": "minecraft:nether_quartz_ore",
        "amount": 6,
        "probability": 0.15
      },
      {
        "item": "minecraft:nether_gold_ore",
        "amount": 1,
        "probability": 0.25
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:the_nether"
      }
    ]
  }).id("kubejs:gold_drill_quarry")

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 12,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:steel_drill",
      "amount": 1,
      "probability": 0.04
    },
    "item_outputs": [
      {
        "item": "minecraft:coal_ore",
        "amount": 1,
        "probability": 0.3
      },
      {
        "item": "minecraft:iron_ore",
        "amount": 1,
        "probability": 0.3
      },
      {
        "item": "minecraft:copper_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "minecraft:diamond_ore",
        "amount": 1,
        "probability": 0.02
      },
      {
        "item": "minecraft:lapis_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:lead_ore",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "modern_industrialization:nickel_ore",
        "amount": 1,
        "probability": 0.14
      },
      {
        "item": "modern_industrialization:bauxite_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "modern_industrialization:salt_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "minecraft:emerald_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:quartz_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "minecraft:redstone_ore",
        "amount": 1,
        "probability": 0.02
      },
      {
        "item": "modern_industrialization:sodium_dust",
        "amount": 1,
        "probability": 0.04
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("kubejs:steel_drill_quarry")

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 12,
    "duration": 500,
    "item_inputs": {
      "item": "modern_industrialization:aluminum_drill",
      "amount": 1,
      "probability": 0.02
    },
    "item_outputs": [
      {
        "item": "minecraft:gold_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:antimony_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "minecraft:diamond_ore",
        "amount": 1,
        "probability": 0.02
      },
      {
        "item": "minecraft:lapis_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "minecraft:iron_ore",
        "amount": 1,
        "probability": 0.3
      },
      {
        "item": "minecraft:copper_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "modern_industrialization:lead_ore",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "modern_industrialization:nickel_ore",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "modern_industrialization:tin_ore",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "modern_industrialization:bauxite_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "minecraft:emerald_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:quartz_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "minecraft:redstone_ore",
        "amount": 1,
        "probability": 0.02
      },
      {
        "item": "modern_industrialization:manganese_dust",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:sodium_dust",
        "amount": 1,
        "probability": 0.04
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("kubejs:aluminum_drill_quarry")

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 128,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:stainless_steel_drill",
      "amount": 1,
      "probability": 0.01
    },
    "item_outputs": [
      {
        "item": "northstar:moon_titanium_ore",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "modern_industrialization:monazite_ore",
        "amount": 1,
        "probability": 0.20
      },
      {
        "item": "northstar:moon_glowstone_ore",
        "amount": 1,
        "probability": 0.35
      },
      {
        "item": "northstar:moon_iron_ore",
        "amount": 1,
        "probability": 0.20
      },
      {
        "item": "northstar:moon_gold_ore",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "northstar:moon_diamond_ore",
        "amount": 1,
        "probability": 0.10
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "northstar:moon"
      }
    ]
  }).id("kubejs:stainless_steel_moon_quarry")

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 128,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:stainless_steel_drill",
      "amount": 1,
      "probability": 0.01
    },
    "item_outputs": [
      {
        "item": "minecraft:gold_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "minecraft:diamond_ore",
        "amount": 1,
        "probability": 0.02
      },
      {
        "item": "modern_industrialization:lead_ore",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "modern_industrialization:nickel_ore",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "modern_industrialization:bauxite_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "modern_industrialization:quartz_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "minecraft:redstone_ore",
        "amount": 1,
        "probability": 0.02
      },
      {
        "item": "modern_industrialization:manganese_dust",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:sodium_dust",
        "amount": 1,
        "probability": 0.04
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("kubejs:stainless_steel_quarry")

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 512,
    "duration": 500,
    "item_inputs": {
      "item": "modern_industrialization:titanium_drill",
      "amount": 1,
      "probability": 0.01
    },
    "item_outputs": [
      {
        "item": "mekanism:osmium_ore",
        "amount": 1,
        "probability": 0.45
      },
      {
        "item": "modern_industrialization:uranium_ore",
        "amount": 1,
        "probability": 0.3
      },
      {
        "item": "modern_industrialization:tungsten_ore",
        "amount": 1,
        "probability": 0.3
      },
      {
        "item": "modern_industrialization:platinum_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "blood_and_deepslate:molybdenum_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:titanium_ore",
        "amount": 1,
        "probability": 0.05
      },
      {
        "item": "mekanism:fluorite_ore",
        "amount": 1,
        "probability": 0.05
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("kubejs:titanium_drill_quarry")

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 512,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:titanium_drill",
      "amount": 1,
      "probability": 0.01
    },
    "item_outputs": [
      {
        "item": "minecraft:glowstone",
        "amount": 4,
        "probability": 0.25
      },
      {
        "item": "minecraft:nether_quartz_ore",
        "amount": 6,
        "probability": 0.25
      },
      {
        "item": "minecraft:nether_gold_ore",
        "amount": 4,
        "probability": 0.45
      },
      {
        "item": "electrodynamics:orevanadium",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "minecraft:ancient_debris",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "minestuck:netherrack_cruxite_ore",
        "amount": 1,
        "probability": 0.15
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:the_nether"
      }
    ]
  }).id("kubejs:titanium_drill_nether_quarry")
})