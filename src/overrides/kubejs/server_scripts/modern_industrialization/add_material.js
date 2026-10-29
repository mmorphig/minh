ServerEvents.recipes(event => {
  function addMaterialRecipes(material, hasCoil) {
    event.custom({
      "type": "modern_industrialization:macerator",
      "duration": 200,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_ingot`
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_dust`
        }
      ],
    }).id(`kubejs:${material}_ingot_macerating`)

    event.custom({
      "type": "modern_industrialization:macerator",
      "duration": 200,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_plate`
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_dust`
        }
      ]
    }).id(`kubejs:${material}_plate_macerating`)

    event.custom({
      "type": "modern_industrialization:compressor",
      "duration": 100,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_ingot`
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_plate`
        }
      ]
    }).id(`kubejs:${material}_plate_compressor`)

    event.custom({
      "type": "modern_industrialization:wiremill",
      "duration": 100,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_plate`
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": `kubejs:${material}_wire`
        }
      ]
    }).id(`kubejs:${material}_wiremill`)

    if (hasCoil) {
      event.custom({
        "type": "modern_industrialization:packer",
        "duration": 100,
        "eu": 2,
        "item_inputs": [
          {
            "amount": 6,
            "item": "modern_industrialization:rubber_sheet"
          },
          {
            "amount": 3,
            "item": `kubejs:${material}_wire`
          }
        ],
        "item_outputs": [
          {
            "amount": 3,
            "item": `modern_industrialization:${material}_cable`
          }
        ]
      }).id(`kubejs:${material}_cable_packer`)

      event.custom({
        "type": "modern_industrialization:assembler",
        "duration": 100,
        "eu": 2,
        "item_inputs": [
          {
            "amount": 3,
            "item": `kubejs:${material}_wire`
          }
        ],
        "fluid_inputs": [
          {
            "amount": 6,
            "fluid": "modern_industrialization:styrene_butadiene_rubber"
          }
        ],
        "item_outputs": [
          {
            "amount": 3,
            "item": `modern_industrialization:${material}_cable`
          }
        ]
      }).id(`kubejs:${material}_cable_styrene_assembler`)

      event.custom({
        "type": "modern_industrialization:assembler",
        "duration": 100,
        "eu": 2,
        "item_inputs": [
          {
            "amount": 3,
            "item": `kubejs:${material}_wire`
          }
        ],
        "fluid_inputs": [
          {
            "amount": 30,
            "fluid": "modern_industrialization:synthetic_rubber"
          }
        ],
        "item_outputs": [
          {
            "amount": 3,
            "item": `modern_industrialization:${material}_cable`
          }
        ]
      }).id(`kubejs:${material}_cable_synthetic_assembler`)
    
      event.shaped(`3x modern_industrialization:${material}_cable`, [
        'BBB',
        'AAA',
        'BBB'
      ], {
        A: `kubejs:${material}_wire`,
        B: 'modern_industrialization:rubber_sheet'
      }).id(`kubejs:${material}_cable_crafting`)
    
      event.custom({
        "type": "modern_industrialization:assembler",
        "duration": 200,
        "eu": 8,
        "item_inputs": [
          {
            "amount": 8,
            "item": `modern_industrialization:${material}_cable`
          }
        ],
        "item_outputs": [
          {
            "amount": 1,
            "item": `kubejs:${material}_coil`
          }
        ]
      }).id(`kubejs:${material}_coil_assembler`)

      event.shaped(`kubejs:${material}_coil`, [
        'AAA',
        'A A',
        'AAA'
      ], {
        A: `modern_industrialization:${material}_cable`
      }).id(`kubejs:${material}_coil_crafting`)
    }
  }

  function addHotIngotProcessing(material, eu) {
    event.remove({ type: 'modern_industrialization:blast_furnace', output: `${material}_hot_ingot`})
    event.remove({ type: 'modern_industrialization:vacuum_freezer', output: `${material}_ingot`})
    event.remove({ type: 'modern_industrialization:heat_exchanger', output: `${material}_ingot`})

    event.custom({
      "type": "modern_industrialization:blast_furnace",
      "eu": eu,
      "duration": 500,
      "item_inputs": {
        "item": `${material}_dust`,
        "amount": 1
      },
      "item_outputs": {
        "item": `${material}_hot_ingot`,
        "amount": 1
      }
    })

    event.custom({
      "type": "modern_industrialization:blast_furnace",
      "eu": eu,
      "duration": 300,
      "item_inputs": {
        "item": `${material}_dust`,
        "amount": 1
      },
      "fluid_inputs": {
        "fluid": "modern_industrialization:argon",
        "amount": 800
      },
      "item_outputs": {
        "item": `${material}_hot_ingot`,
        "amount": 1
      }
    })

    event.custom({
      "type": "modern_industrialization:blast_furnace",
      "eu": eu,
      "duration": 360,
      "item_inputs": {
        "item": `${material}_dust`,
        "amount": 1
      },
      "fluid_inputs": {
        "fluid": "modern_industrialization:helium",
        "amount": 1000
      },
      "item_outputs": {
        "item": `${material}_hot_ingot`,
        "amount": 1
      }
    })

    event.custom({
      "type": "modern_industrialization:blast_furnace",
      "eu": eu,
      "duration": 400,
      "item_inputs": {
        "item": `${material}_dust`,
        "amount": 1
      },
      "fluid_inputs": {
        "fluid": "modern_industrialization:nitrogen",
        "amount": 1000
      },
      "item_outputs": {
        "item": `${material}_hot_ingot`,
        "amount": 1
      }
    })
    
    event.custom({
      "type": "modern_industrialization:vacuum_freezer",
      "eu": eu,
      "duration": 240,
      "item_inputs": {
        "item": `${material}_hot_ingot`,
        "amount": 1
      },
      "item_outputs": {
        "item": `${material}_ingot`,
        "amount": 1
      }
    })

    event.custom({
      "type": "modern_industrialization:heat_exchanger",
      "eu": eu / 4,
      "duration": 10,
      "item_inputs": {
        "item": `${material}_hot_ingot`,
        "amount": 1
      },
      "fluid_inputs": {
        "amount": 20,
        "fluid": "modern_industrialization:cryofluid"
      },
      "item_outputs": {
        "item": `${material}_ingot`,
        "amount": 1
      },
      "fluid_outputs": [
        {
          "amount": 13,
          "fluid": "modern_industrialization:argon"
        },
        {
          "amount": 5,
          "fluid": "modern_industrialization:helium"
        }
      ]
    })
  }

  addMaterialRecipes('nichrome', true)
  addMaterialRecipes('tpv_alloy', true)
  addMaterialRecipes('pure_gold', false)
  
  addHotIngotProcessing('modern_industrialization:kanthal', 32)
  addHotIngotProcessing('kubejs:nichrome', 128)
  addHotIngotProcessing('modern_industrialization:titanium', 256)
  addHotIngotProcessing('modern_industrialization:platinum', 256)
  addHotIngotProcessing('kubejs:tpv_alloy', 256)
  addHotIngotProcessing('modern_industrialization:chromium', 512)
  addHotIngotProcessing('modern_industrialization:superconductor', 512)
  //addHotIngotProcessing('modern_industrialization:iridium', 1024)

  event.custom({
    "type": "modern_industrialization:blast_furnace",
    "eu": 256,
    "duration": 400,
    "item_inputs": {
      "tag": `c:raw_materials/titanium`,
      "amount": 3
    },
    "fluid_inputs": {
      "fluid": "modern_industrialization:manganese_sulfuric_solution",
      "amount": 3000
    },
    "item_outputs": {
      "item": `modern_industrialization:titanium_hot_ingot`,
      "amount": 4
    },
    "fluid_outputs": {
      "fluid": "modern_industrialization:manganese_sulfuric_solution",
      "amount": 2500
    }
  })

  event.custom({
    "type": "modern_industrialization:wiremill",
    "duration": 100,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "item": `kubejs:pure_gold_wire`
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": `kubejs:pure_gold_fine_wire`
      }
    ]
  }).id(`kubejs:pure_gold_fine_wiremill`)

  event.custom({
    "type": "modern_industrialization:blast_furnace",
    "eu": 128,
    "duration": 200,
    "item_inputs": [
      {
        "item": "kubejs:pure_gold_dust",
        "amount": 1
      }
    ],
    "item_outputs": {
      "item": "kubejs:pure_gold_ingot",
      "amount": 1
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:pure_gold_ebf")

  event.custom({
    "type": "modern_industrialization:canning",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
      "item": `minecraft:glass_bottle`,
      "amount": 1
    },
    "fluid_inputs": {
      "fluid": "create_enchantment_industry:experience",
      "amount": 10
    },
    "item_outputs": {
      "item": `minecraft:experience_bottle`,
      "amount": 1
    }
  })
})