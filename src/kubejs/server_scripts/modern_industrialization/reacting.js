ServerEvents.recipes(event => {
  event.replaceInput({ input: "modern_industrialization:manganese_crushed_dust" }, 
    "modern_industrialization:manganese_crushed_dust", "modern_industrialization:manganese_dust"
  )

  event.remove({ output: "modern_industrialization:random_access_memory" })
  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 12,
    "duration": 400,
    "item_inputs": [
      {
        "item" : "modern_industrialization:silicon_wafer",
        "amount": 1
      },
      {
        "tag" : "c:dusts/antimony",
        "amount": 1
      },
      {
        "tag" : "c:dusts/aluminum",
        "amount": 1
      }
    ],
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:argon",
        "amount" : 350
      },
      {
        "fluid" : "modern_industrialization:styrene_butadiene_rubber",
        "amount" : 500
      }
    ],
    "item_outputs": {
      "item" : "modern_industrialization:random_access_memory",
      "amount": 1
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:ram_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 32,
    "duration": 200,
    "item_inputs": [
      {
        "item" : "modern_industrialization:silicon_wafer",
        "amount": 1
      },
      {
        "item" : "modern_industrialization:not_gate",
        "amount": 2
      },
      {
        "item" : "modern_industrialization:and_gate",
        "amount": 2
      }
    ],
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:argon",
        "amount" : 35
      },
      {
        "fluid" : "modern_industrialization:styrene_butadiene_rubber",
        "amount" : 100
      }
    ],
    "item_outputs": {
      "item" : "kubejs:nand_unit",
      "amount": 1
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:nand_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 12,
    "duration": 400,
    "item_inputs": [
      {
        "item" : "modern_industrialization:aluminum_plate",
        "amount": 8
      },
      {
        "tag" : "minecraft:saplings",
        "amount": 1
      }
    ],
    "item_outputs": {
      "item" : "ars_nouveau:blue_archwood_sapling",
      "amount": 1
    }
  }).id("kubejs:archwood_sapling_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 128,
    "duration": 1000,
    "item_inputs": [
      {
        "item" : "kubejs:btx_catalyst",
        "amount": 1,
        "probability": 0
      }
    ],
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:naphtha",
        "amount" : 500
      },
      {
        "fluid" : "modern_industrialization:hydrogen",
        "amount" : 2000
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "kubejs:btx",
        "amount" : 500
      },
      {
        "fluid" : "modern_industrialization:hydrogen",
        "amount" : 1800
      }
    ],
  }).id("kubejs:btx_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 16,
    "duration": 100,
    "item_inputs": [
      {
        "item" : "modern_industrialization:aluminum_dust",
        "amount": 2
      }
    ],
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:oxygen",
        "amount" : 300
      }
    ],
    "item_outputs": {
      "item" : "kubejs:alumina_dust",
      "amount": 2
    }
  }).id("kubejs:alumina_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 16,
    "duration": 100,
    "item_inputs": [
      {
        "item" : "modern_industrialization:aluminum_dust",
        "amount": 1
      }
    ],
    "fluid_inputs": [
      {
        "fluid" : "mekanism:hydrogen_chloride",
        "amount" : 300
      }
    ],
    "item_outputs": {
      "item" : "kubejs:aluminum_chloride_dust",
      "amount": 1
    },
    "fluid_outputs": [
      {
        "fluid" : "modern_industrialization:hydrogen",
        "amount": 300
      }
    ]
  }).id("kubejs:aluminum_chloride_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 32,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid" : "kubejs:xylene",
        "amount": 200
      },
      {
        "fluid" : "modern_industrialization:steam",
        "amount" : 100
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "kubejs:o_xylene",
        "amount": 200
      }
    ]
  }).id("kubejs:o_xylene_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 64,
    "duration": 200,
    "fluid_inputs": [
      {
        "fluid" : "kubejs:o_xylene",
        "amount": 200
      },
      {
        "fluid" : "modern_industrialization:oxygen",
        "amount" : 1000
      }
    ],
    "item_outputs": [
      {
        "item" : "kubejs:phthalic_anhydride",
        "amount": 1
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "minecraft:water",
        "amount": 1000
      }
    ]
  }).id("kubejs:phthalic_anhydride_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 128,
    "duration": 200,
    "fluid_inputs": [
      
      {
        "fluid" : "modern_industrialization:benzene",
        "amount" : 200
      }
    ],
    "item_inputs": [
      {
        "item" : "kubejs:phthalic_anhydride",
        "amount": 1
      },
      {
        "item" : "kubejs:aluminum_chloride_dust",
        "amount": 2
      }
    ],
    "fluid_outputs": [
      {
        "fluid": "kubejs:o_benzoylbenzoic_acid",
        "amount": 200
      },
      {
        "fluid" : "mekanism:hydrogen_chloride",
        "amount" : 600
      }
    ],
    "item_outputs": [
      {
        "item" : "modern_industrialization:aluminum_dust",
        "amount": 2
      }
    ],
  }).id("kubejs:o_benzoylbenzoic_acid_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 32,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid": "kubejs:o_benzoylbenzoic_acid",
        "amount": 100
      }
    ],
    "item_outputs": [
      {
        "item": "kubejs:anthraquinone",
        "amount": 1
      }
    ],
    "fluid_outputs": [
      {
        "fluid": "modern_industrialization:sulfuric_acid",
        "amount": 200
      },
      {
        "fluid": "minecraft:water",
        "amount": 100
      }
    ]
  }).id("kubejs:anthraquinone_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 32,
    "duration": 40,
    "fluid_inputs": [
      {
        "fluid": "modern_industrialization:oxygen",
        "amount": 200
      }
    ],
    "item_inputs": [
      {
        "item": "kubejs:anthrahydroquinone",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "kubejs:anthraquinone",
        "amount": 1
      }
    ],
    "fluid_outputs": [
      {
        "fluid": "kubejs:hydrogen_peroxide",
        "amount": 200
      }
    ]
  }).id("kubejs:hydrogen_peroxide_reactor")

  event.remove({ output: Fluid.of("modern_industrialization:hydrochloric_acid") })
  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 8,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:hydrogen",
        "amount" : 1000
      },
      {
        "fluid" : "modern_industrialization:chlorine",
        "amount" : 1000
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "mekanism:hydrogen_chloride",
        "amount" : 1000
      }
    ]
  }).id("kubejs:hydrogen_chloride_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 8,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:hydrogen",
        "amount" : 3000
      },
      {
        "fluid" : "modern_industrialization:nitrogen",
        "amount" : 1000
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "mekanismelements:ammonia",
        "amount" : 2000
      }
    ]
  }).id("kubejs:ammonia_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 8,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid" : "mekanismelements:nitric_oxide",
        "amount" : 2000
      },
      {
        "fluid" : "modern_industrialization:oxygen",
        "amount" : 1000
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "mekanismelements:nitrogen_dioxide",
        "amount" : 2000
      }
    ]
  }).id("kubejs:nitrogen_dioxide_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 8,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid" : "mekanismelements:ammonia",
        "amount" : 4000
      },
      {
        "fluid" : "modern_industrialization:oxygen",
        "amount" : 5000
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "mekanismelements:nitric_oxide",
        "amount" : 4000
      }
    ]
  }).id("kubejs:nitric_oxide_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 8,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid" : "mekanismelements:nitrogen_dioxide",
        "amount" : 3000
      },
      {
        "fluid" : "minecraft:water",
        "amount" : 1000
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "mekanismelements:nitric_acid",
        "amount" : 2000
      }
    ]
  }).id("kubejs:nitric_acid_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 8,
    "duration": 100,
    "fluid_inputs": [
      {
        "fluid" : "mekanismelements:nitric_acid",
        "amount" : 1000
      },
      {
        "fluid" : "mekanism:hydrogen_chloride",
        "amount" : 3000
      }
    ],
    "fluid_outputs": [
      {
        "fluid" : "kubejs:aqua_regia",
        "amount" : 1000
      }
    ]
  }).id("kubejs:aqua_regia_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 64,
    "duration": 600,
    "fluid_inputs": [
      {
        "fluid" : "kubejs:aqua_regia",
        "amount" : 1000
      }
    ],
    "item_inputs": [
      {
        "item": "modern_industrialization:gold_dust",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "kubejs:pure_gold_dust",
        "amount": 1
      },
      {
        "item": "modern_industrialization:silver_tiny_dust",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "modern_industrialization:platinum_tiny_dust",
        "amount": 1,
        "probability": 0.05
      },
    ],
    "fluid_outputs": [
      {
        "fluid" : "mekanismelements:nitric_acid",
        "amount" : 950
      },
      {
        "fluid" : "mekanism:hydrogen_chloride",
        "amount" : 2850
      }
    ]
  }).id("kubejs:pure_gold_reactor")

  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 16,
    "duration": 600,
    "fluid_inputs": [
      {
        "fluid" : "minecraft:lava",
        "amount" : 100
      },
      {
        "fluid" : "modern_industrialization:sulfuric_acid",
        "amount" : 100
      }
    ],
    "item_inputs": [
      {
        "item": "modern_industrialization:sulfur_dust",
        "amount": 1
      },
      {
        "item": "modern_industrialization:gold_dust",
        "amount": 1
      },
    ],
    "item_outputs": [
      {
        "item": "minecraft:blaze_powder",
        "amount": 2
      }
    ]
  }).id("kubejs:blaze_powder_reactor")

  event.remove({ id: "minecraft:ender_eye"})
  event.custom({
    "type": "modern_industrialization:chemical_reactor",
    "eu": 32,
    "duration": 200,
    "fluid_inputs": [
      {
        "fluid" : "extended_industrialization:blazing_essence",
        "amount" : 200
      }
    ],
    "item_inputs": [
      {
        "item": "minecraft:ender_pearl",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:ender_eye",
        "amount": 1
      }
    ]
  }).id("kubejs:eye_of_ender_reactor")
})