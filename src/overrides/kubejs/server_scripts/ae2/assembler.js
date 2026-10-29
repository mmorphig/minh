ServerEvents.recipes(event => {
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 1,
        ingredient: {
         item: 'create:brass_nugget'
        }
      },
      {
        amount: 2,
        ingredient: {
          item: 'create:cogwheel'
        }
      },
      {
        amount: 2,
        ingredient: {
          item: 'create:large_cogwheel'
        }
      }
    ],
    output: {
      count: 1,
      id: 'kubejs:precision_assembly'
    }
  })

  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 4,
        ingredient: {
         item: 'modern_industrialization:electrum_wire',
        }
      },
      {
        amount: 4,
        ingredient: {
          item: 'kubejs:precision_assembly'
        }
      },
      {
        amount: 4,
        ingredient: {
         item: 'minecraft:glass_pane'
        }
      },
      {
        ingredient: {
         tag: 'c:plates/gold'
        }
      }
    ],
    output: {
      count: 1,
      id: 'create:precision_mechanism'
    }
  })

  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 5,
        ingredient: {
         tag: 'c:nuggets/titanium',
        }
      },
      {
        amount: 5,
        ingredient: {
          item: 'northstar:iron_cogwheel'
        }
      },
      {
        amount: 5,
        ingredient: {
         item: 'northstar:iron_large_cogwheel'
        }
      },
      {
        amount: 1,
        ingredient: {
         item: 'create:precision_mechanism',
        }
      }
    ],
    output: {
      count: 1,
      id: 'northstar:hardened_precision_mechanism'
    }
  })

  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 3,
        ingredient: {
         item: 'create:electron_tube',
        }
      },
      {
        amount: 3,
        ingredient: {
          item: 'modern_industrialization:electrum_wire'
        }
      }
    ],
    output: {
      count: 1,
      id: 'create_connected:control_chip'
    }
  })

  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 3,
        ingredient: {
         tag: 'c:ingots/electrum'
        }
      },
      {
        amount: 3,
        ingredient: {
          item: 'create:cogwheel'
        }
      },
      {
        amount: 3,
        ingredient: {
         item: 'create:large_cogwheel'
        }
      },
      {
        amount: 3,
        ingredient: {
         item: 'create:propeller'
        }
      },
      {
        ingredient: {
         item: 'create:brass_sheet'
        }
      }
    ],
    output: {
      count: 1,
      id: 'create_sa:steam_engine'
    }
  })

  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 3,
        ingredient: {
         tag: 'c:nuggets/electrum'
        }
      },
      {
        amount: 3,
        ingredient: {
         item: 'create:zinc_nugget'
        }
      },
      {
        amount: 3,
        ingredient: {
          item: 'create:cogwheel'
        }
      },
      {
        amount: 3,
        ingredient: {
         item: 'create:large_cogwheel'
        }
      },
      
      {
        ingredient: {
         item: 'create:andesite_alloy'
        }
      }
    ],
    output: {
      count: 1,
      id: 'create_sa:heat_engine'
    }
  })

  event.custom({
    type: "extendedae:crystal_assembler",
    input_fluid: {
      amount: 1000,
      ingredient: {
        fluid: "minecraft:water"
      }
    },
    input_items: [
      {
        amount: 3,
        ingredient: {
         item: 'modern_industrialization:electrum_wire'
        }
      },
      {
        ingredient: {
         item: 'create:copper_sheet'
        }
      }
    ],
    output: {
      count: 1,
      id: 'create_sa:hydraulic_engine'
    }
  })
})
