ServerEvents.recipes(event => {
  event.replaceOutput({ id: "modern_industrialization:vanilla_recipes/centrifuge/lava" }, 
    "modern_industrialization:aluminum_nugget", "modern_industrialization:aluminum_tiny_dust"
  )

  event.replaceOutput({ id: "modern_industrialization:vanilla_recipes/centrifuge/lava" }, 
    "modern_industrialization:chromium_nugget", "modern_industrialization:chromium_tiny_dust"
  )

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "item": "rusticdelight:cotton_seeds"
      }
    ],
    "fluid_outputs": [
      {
        "amount": 300,
        "fluid": "modern_industrialization:plant_oil"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 100,
    "eu": 8,
    "fluid_inputs": [
      {
        "amount": 1000,
        "fluid": "kubejs:mineralized_water"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "minecraft:raw_iron",
        "probability" : 0.2
      },
      {
        "amount": 1,
        "item": "minecraft:raw_copper",
        "probability" : 0.2
      },
      {
        "amount": 1,
        "item": "modern_industrialization:lignite_coal_dust",
        "probability" : 0.15
      },
      {
        "amount": 1,
        "item": "modern_industrialization:raw_lead",
        "probability" : 0.1
      },
      {
        "amount": 1,
        "item": "modern_industrialization:raw_tin",
        "probability" : 0.1
      },
      {
        "amount": 1,
        "item": "modern_industrialization:raw_nickel",
        "probability" : 0.1
      },
      {
        "amount": 1,
        "item": "create:raw_zinc",
        "probability" : 0.1
      }
    ],
    "fluid_outputs": [
      {
        "amount": 1000,
        "fluid": "minecraft:water"
      }
    ]
  }).id("kubejs:mineralized_centrifuge")

  event.remove({ id: "modern_industrialization:materials/centrifuge/heavy_water"})
  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 100,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "item": "kubejs:slag"
      }
    ],
    "fluid_inputs": [
      {
        "amount": 1000,
        "fluid": "minecraft:water"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:wood_pulp",
        "probability" : 0.5
      },
      {
        "amount": 1,
        "item": "extended_industrialization:mulch",
        "probability": 0.05
      }
    ]
  }).id("kubejs:wood_centrifuge")

  event.remove({ id: "modern_industrialization:materials/centrifuge/uranium"})
  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 1200,
    "eu": 128,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:dusts/uranium"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:uranium_235_dust",
        "probability" : 0.007
      },
      {
        "amount": 1,
        "item": "modern_industrialization:uranium_238_dust",
        "probability" : 0.993
      }
    ]
  }).id("kubejs:uranium_processing_centrifuge")

  event.remove({ id: "modern_industrialization:materials/centrifuge/manganese_crushed_dust" })
  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 1200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 6,
        "item": "minecraft:raw_iron"
      }
    ],
    "item_outputs": [
      {
        "amount": 8,
        "item": "modern_industrialization:iron_dust"
      }
      ,
      {
        "amount": 5,
        "item": "modern_industrialization:redstone_tiny_dust"
      }
    ]
  }).id("kubejs:iron_processing_centrifuge")

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 1200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 6,
        "item": "modern_industrialization:raw_tin"
      }
    ],
    "item_outputs": [
      {
        "amount": 8,
        "item": "modern_industrialization:tin_dust"
      }
      ,
      {
        "amount": 1,
        "item": "modern_industrialization:gold_tiny_dust"
      }
    ]
  }).id("kubejs:tin_processing_centrifuge")

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 1200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 6,
        "item": "modern_industrialization:raw_lead"
      }
    ],
    "item_outputs": [
      {
        "amount": 8,
        "item": "modern_industrialization:lead_dust"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:antimony_tiny_dust"
      }
    ]
  }).id("kubejs:lead_processing_centrifuge")

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 1200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 6,
        "item": "minecraft:raw_copper"
      }
    ],
    "item_outputs": [
      {
        "amount": 8,
        "item": "modern_industrialization:copper_dust"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:silver_tiny_dust"
      }
    ]
  }).id("kubejs:copper_processing_centrifuge")

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 1200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 6,
        "item": "modern_industrialization:raw_nickel"
      }
    ],
    "item_outputs": [
      {
        "amount": 8,
        "item": "modern_industrialization:nickel_dust"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:gold_tiny_dust"
      }
    ]
  }).id("kubejs:nickel_processing_centrifuge")

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "duration": 1200,
    "eu": 128,
    "item_inputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:air_intake",
        "probability": 0
      }
    ],
    "fluid_outputs": [
      {
        "amount": 650,
        "fluid": "modern_industrialization:oxygen"
      },
      {
        "amount": 2315,
        "fluid": "modern_industrialization:nitrogen"
      },
      {
        "amount": 35,
        "fluid": "modern_industrialization:argon"
      }
    ]
  }).id("kubejs:early_air_centrifuge")

  event.custom({
    "type": "modern_industrialization:centrifuge",
    "eu": 32,
    "duration": 3000,
    "item_inputs": {
      "item": "modern_industrialization:breeder_uranium_238_fuel_rod_depleted",
      "amount": 1
    },
    "item_outputs": [
      {
        "item": "modern_industrialization:uranium_238_tiny_dust",
        "amount": 36
      },
      {
        "item": "modern_industrialization:plutonium_tiny_dust",
        "amount": 45
      }
    ]
  })
})