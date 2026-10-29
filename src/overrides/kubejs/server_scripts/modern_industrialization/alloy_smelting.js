ServerEvents.recipes(event => {
  event.remove({ output: "extended_industrialization:steel_alloy_smelter" })

  event.replaceOutput({ id: "modern_industrialization:materials/blast_furnace/silicium_from_quartz"},
    "modern_industrialization:silicon_dust", "ae2:silicon"
  )
  event.replaceOutput({ id: "modern_industrialization:materials/blast_furnace/silicium_from_quartz_with_carbon"},
    "modern_industrialization:silicon_dust", "ae2:silicon"
  )

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "ae2:all_quartz_dust"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:coal_dust"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "ae2:silicon"
      }
    ]
  }).id("kubejs:silicon_alloy_smelting")

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "item": "minecraft:copper_ingot"
      },
      {
        "amount": 1,
        "item": "create:zinc_ingot"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:brass_ingot"
      }
    ]
  }).id("kubejs:brass_alloy_smelting")

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "ae2:all_quartz_dust"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:coke_dust"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "ae2:silicon"
      }
    ]
  }).id("kubejs:silicon_alloy_smelting_coke")

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:gears"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:steel_large_plate"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "kubejs:gear_casting_mold"
      }
    ]
  }).id("kubejs:gear_mold_alloy_smelting")

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:rotors"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:steel_large_plate"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "kubejs:rotor_casting_mold"
      }
    ]
  }).id("kubejs:rotor_mold_alloy_smelting")

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:plates"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:steel_large_plate"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "kubejs:plate_casting_mold"
      }
    ]
  }).id("kubejs:plate_mold_alloy_smelting")

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:bronze_machine_casing"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:steel_large_plate"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "kubejs:casing_casting_mold"
      }
    ]
  }).id("kubejs:casing_mold_alloy_smelting")

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:bronze_block"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:steel_large_plate"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "kubejs:block_casting_mold"
      }
    ]
  }).id("kubejs:block_mold_alloy_smelting")

  const rotor_materials = ["aluminum", "bronze", "copper", "stainless_steel", "tin", "titanium"]
  rotor_materials.forEach(material => {
    event.custom({
      "type": "extended_industrialization:alloy_smelter",
      "duration": 200,
      "eu": 4,
      "item_inputs": [
        {
          "amount": 4,
          "tag": "c:ingots/" + material
        },
        {
          "amount": 1,
          "item": "kubejs:rotor_casting_mold",
          "probability": 0
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `modern_industrialization:${material}_rotor`
        }
      ]
    }).id(`kubejs:${material}_rotor_alloy_smelting`)
  })

  const gear_materials = ["aluminum", "bronze", "copper", "gold", "invar", "iron", "stainless_steel", "steel", "tin", "titanium"]
  gear_materials.forEach(material => {
    event.custom({
      "type": "extended_industrialization:alloy_smelter",
      "duration": 200,
      "eu": 4,
      "item_inputs": [
        {
          "amount": 3,
          "tag": "c:ingots/" + material
        },
        {
          "amount": 1,
          "item": "kubejs:gear_casting_mold",
          "probability": 0
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `modern_industrialization:${material}_gear`
        }
      ]
    }).id(`kubejs:${material}_gear_alloy_smelting`)
  })

  const casing_materials = [["bronze", "bronze"], ["steel", "steel"], ["frostproof", "aluminum"], ["heatproof", "invar"], ["clean_stainless_steel", "stainless_steel"], ["solid_titanium", "titanium"]]
  casing_materials.forEach(material => {
    event.custom({
      "type": "extended_industrialization:alloy_smelter",
      "duration": 200,
      "eu": 4,
      "item_inputs": [
        {
          "amount": 11,
          "tag": "c:ingots/" + material[1]
        },
        {
          "amount": 1,
          "item": "kubejs:casing_casting_mold",
          "probability": 0
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `modern_industrialization:${material[0]}_machine_casing`
        }
      ]
    }).id(`kubejs:${material[1]}_casing_alloy_smelting`)
  })

  const plate_materials = ["aluminum", "annealed_copper", "battery_alloy", "beryllium", "blastproof_alloy", "bronze", "cadmium", "chromium", "copper", "cupronickel", "electrum", "gold", "invar", "iron", "kanthal", "lead", "nickel", "platinum", "silver", "stainless_steel", "steel", "superconductor", "tin", "titanium", "tungsten"]
  plate_materials.forEach(material => {
    event.custom({
      "type": "extended_industrialization:alloy_smelter",
      "duration": 200,
      "eu": 4,
      "item_inputs": [
        {
          "amount": 1,
          "tag": "c:ingots/" + material
        },
        {
          "amount": 1,
          "item": "kubejs:plate_casting_mold",
          "probability": 0
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `modern_industrialization:${material}_plate`
        }
      ]
    }).id(`kubejs:${material}_plate_alloy_smelting`)
  })

  const mi_block_materials = ["aluminum", "annealed_copper", "antimony", "battery_alloy", "beryllium", "bronze", "chromium", "cupronickel", "electrum", "he_mox", "he_uranium", "invar", "iridium", "kanthal", "le_mox", "le_uranium", "lead", "nickel", "platinum", "plutonium", "silver", "stainless_steel", "steel", "tin", "titanium", "tungsten", "uranium", "uranium_235"]
  mi_block_materials.forEach(material => {
    event.custom({
      "type": "extended_industrialization:alloy_smelter",
      "duration": 200,
      "eu": 4,
      "item_inputs": [
        {
          "amount": 9,
          "tag": "c:ingots/" + material
        },
        {
          "amount": 1,
          "item": "kubejs:block_casting_mold",
          "probability": 0
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `modern_industrialization:${material}_block`
        }
      ]
    }).id(`kubejs:${material}_block_alloy_smelting`)
  })

  event.custom({
    "type": "extended_industrialization:alloy_smelter",
    "duration": 200,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "item": "minecraft:andesite"
      },
      {
        "amount": 1,
        "item": "create:zinc_nugget"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:andesite_alloy"
      }
    ]
  }).id("kubejs:andesite_alloy_smelting")
})