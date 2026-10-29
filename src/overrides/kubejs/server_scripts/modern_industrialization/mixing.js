ServerEvents.recipes(event => {
  function mixerSanding(input, output) {
    event.custom({
      "type": "modern_industrialization:mixer",
      "duration": 80,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 1,
          "tag": "c:sands"
        },
        {
          "amount": 1,
          "item": input
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": output
        }
      ]
    })
  }

  mixerSanding("northstar:lunar_sapphire_shard", "northstar:polished_lunar_sapphire")
  mixerSanding("minecraft:diamond", "northstar:polished_diamond")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 100,
    "eu": 8,
    "fluid_inputs": [
      {
        "amount": 1000,
        "fluid": "minecraft:water"
      }
    ],
    "item_inputs": [
      {
        "amount": 1,
        "item": "kubejs:crushed_stone"
      }
    ],
    "fluid_outputs": [
      {
        "amount": 1000,
        "fluid": "kubejs:mineralized_water"
      }
    ]
  }).id("kubejs:water_mineralizing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 100,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 4,
        "item": "modern_industrialization:nickel_dust"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:chromium_dust"
      }
    ],
    "item_outputs": [
      {
        "amount": 5,
        "item": "kubejs:nichrome_dust"
      }
    ]
  }).id("kubejs:nichrome_dust_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 100,
    "eu": 128,
    "item_inputs": [
      {
        "amount": 3,
        "item": "modern_industrialization:titanium_dust"
      },
      {
        "amount": 3,
        "item": "modern_industrialization:platinum_dust"
      },
      {
        "amount": 1,
        "item": "electrodynamics:dustvanadium"
      }
    ],
    "item_outputs": [
      {
        "amount": 7,
        "item": "kubejs:tpv_alloy_dust"
      }
    ]
  }).id("kubejs:tpv_dust_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 80,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "item": "minecraft:cobblestone"
      },
      {
        "amount": 4,
        "item": "extended_industrialization:mulch"
      }
    ],
    "item_outputs": [
      {
        "amount": 2,
        "item": "minecraft:dirt"
      }
    ]
  }).id("kubejs:dirt_mulch_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 80,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:platinum_dust"
      },
      {
        "amount": 3,
        "item": "kubejs:alumina_dust"
      }
    ],
    "item_outputs": [
      {
        "amount": 4,
        "item": "kubejs:btx_catalyst"
      }
    ]
  }).id("kubejs:btx_catalyst_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 80,
    "eu": 16,
    "item_inputs": [
      {
        "amount": 1,
        "item": "kubejs:anthraquinone"
      }
    ],
    "fluid_inputs": [
      {
        "fluid": "modern_industrialization:hydrogen",
        "amount": 200
      },
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "kubejs:anthrahydroquinone"
      }
    ]
  }).id("kubejs:anthrahydroquinone_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 80,
    "eu": 32,
    "fluid_inputs": [
      {
        "fluid": "kubejs:hydrogen_peroxide",
        "amount": 200
      },
      {
        "fluid": "modern_industrialization:sulfuric_acid",
        "amount": 800
      }
    ],
    "fluid_outputs": [
      {
        "fluid": "kubejs:pirahna_solution",
        "amount": 1000
      }
    ]
  }).id("kubejs:pirahna_solution_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 400,
    "eu": 32,
    "fluid_inputs": [
      {
        "fluid": "kubejs:hydrogen_peroxide",
        "amount": 1000
      },
      {
        "fluid": "modern_industrialization:naphtha",
        "amount": 1000
      }
    ],
    "fluid_outputs": [
      {
        "fluid": "kubejs:early_rocket_fuel",
        "amount": 2000
      }
    ]
  }).id("kubejs:early_rocket_fuel_mixing")

  event.remove({ id: "northstar:mixing/brine" })
  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 40,
    "eu": 4,
    "fluid_inputs": [
      {
        "fluid": "minecraft:water",
        "amount": 500
      }
    ],
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:dusts/salt"
      }
    ],
    "fluid_outputs": [
      {
        "amount": 500,
        "fluid": "northstar:brine"
      }
    ]
  }).id("kubejs:brine_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 40,
    "eu": 8,
    "fluid_inputs": [
      {
        "fluid": "minecraft:lava",
        "amount": 500
      }
    ],
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:dusts/salt"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "northstar:sodium_catalyst"
      }
    ]
  }).id("kubejs:sodium_catalyst_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 100,
    "eu": 4,
    "fluid_inputs": [
      {
        "fluid": "modern_industrialization:creosote",
        "amount": 1000
      }
    ],
    "item_inputs": [
      {
        "amount": 8,
        "tag": "minecraft:planks"
      }
    ],
    "item_outputs": [
      {
        "amount": 8,
        "item": "immersiveengineering:treated_wood_horizontal"
      }
    ]
  }).id("kubejs:treated_planks_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 100,
    "eu": 2,
    "fluid_inputs": [
      {
        "fluid": "minecraft:water",
        "amount": 1000
      }
    ],
    "item_inputs": [
      {
        "amount": 1,
        "item": "create:wheat_flour"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:dough"
      }
    ]
  }).id("kubejs:dough_mixing")

  event.custom({
    "type": "modern_industrialization:mixer",
    "duration": 100,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:emerald_dust"
      },
      {
        "amount": 1,
        "item": "mekanism:dust_obsidian"
      },
      {
        "amount": 1,
        "item": "ae2:ender_dust"
      },
      {
        "amount": 1,
        "item": "moremekanismprocessing:dust_sapphire"
      }
    ],
    "item_outputs": [
      {
        "amount": 4,
        "item": "ae2:sky_dust"
      }
    ]
  }).id("kubejs:sky_stone_dust_mixing")
})