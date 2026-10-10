ServerEvents.recipes(event => {
  event.remove({ output: "modern_industrialization:electronic_circuit"})
  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 4,
        "item": "modern_industrialization:analog_circuit"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:diode"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:transistor"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:electronic_circuit_board"
      }
    ],
    "fluid_inputs": [
      {
        "amount": 100,
        "fluid": "modern_industrialization:soldering_alloy"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:electronic_circuit"
      }
    ]
  }).id("kubejs:electronic_circuit_assembler")

  event.remove({ output: "modern_industrialization:digital_circuit"})
  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 4,
        "item": "modern_industrialization:electronic_circuit"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:or_gate"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:and_gate"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:not_gate"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:digital_circuit_board"
      }
    ],
    "fluid_inputs": [
      {
        "amount": 100,
        "fluid": "modern_industrialization:soldering_alloy"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:digital_circuit"
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:digital_circuit_assembler")

  event.remove({ output: "modern_industrialization:processing_unit" })
  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 4,
        "item": "modern_industrialization:digital_circuit"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:random_access_memory"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:memory_management_unit"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:arithmetic_logic_unit"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:processing_unit_board"
      }
    ],
    "fluid_inputs": [
      {
        "amount": 250,
        "fluid": "kubejs:pirahna_solution"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:processing_unit"
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:processing_unit_assembler")

  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 12,
        "item": "mekanism:elite_control_circuit"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:random_access_memory"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:memory_management_unit"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:arithmetic_logic_unit"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:processing_unit_board"
      }
    ],
    "fluid_inputs": [
      {
        "amount": 250,
        "fluid": "kubejs:pirahna_solution"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:processing_unit"
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:processing_unit_assembler_alt")

  event.remove({ output: "modern_industrialization:quantum_circuit"})
  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 4,
        "item": "modern_industrialization:processing_unit"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:cooling_cell"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:qubit"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:quantum_circuit_board"
      }
    ],
    "fluid_inputs": [
      {
        "amount": 100,
        "fluid": "modern_industrialization:cryofluid"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:quantum_circuit"
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "advCleanroom"
      },
      {
        "type": "modern_industrialization:dimension",
        "dimension": "northstar:earth_orbit"
      }
    ]
  }).id("kubejs:quantum_circuit_assembler")

  event.remove({ output: "northstar:targeting_computer"})
  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 4,
        "item": "modern_industrialization:iron_plate"
      },
      {
        "amount": 2,
        "item": "northstar:polished_diamond"
      },
      {
        "amount": 4,
        "item": "modern_industrialization:digital_circuit"
      }
    ],
    "fluid_inputs": [
      {
        "amount": 100,
        "fluid": "modern_industrialization:soldering_alloy"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "northstar:targeting_computer"
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:targeting_computer_assembler")

  event.remove({ output: "modern_industrialization:memory_management_unit"})
  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:plates/emerald"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:silicon_wafer"
      },
      {
        "amount": 6,
        "item": "kubejs:pure_gold_fine_wire"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:memory_management_unit"
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:memory_management_unit_assembler")

  event.remove({ output: "modern_industrialization:arithmetic_logic_unit"})
  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:plates/diamond"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:and_gate"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:or_gate"
      },
      {
        "amount": 4,
        "item": "modern_industrialization:not_gate"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:arithmetic_logic_unit"
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:alu_assembler")

  event.remove({ output: "modern_industrialization:processing_unit_board" })
  event.custom({
    "type": "modern_industrialization:assembler",
    "eu": 32,
    "duration": 1200,
    "item_inputs": [
      {
        "item": "modern_industrialization:annealed_copper_cable",
        "amount": 8
      },
      {
        "item": "modern_industrialization:cadmium_battery",
        "amount": 2
      },
      {
        "item": "modern_industrialization:digital_circuit_board",
        "amount": 1
      },
      {
        "item": "kubejs:pure_gold_plate",
        "amount": 4
      }
    ],
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:polyvinyl_chloride",
        "amount" : 1500
      }
    ],
    "item_outputs": [
      {
        "item": "modern_industrialization:processing_unit_board",
        "amount": 1
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  })

  event.remove({ output: "modern_industrialization:digital_circuit_board" })
  event.custom({
    "type": "modern_industrialization:assembler",
    "eu": 16,
    "duration": 500,
    "item_inputs": [
      {
        "item": "modern_industrialization:aluminum_cable",
        "amount": 6
      },
      {
        "item": "modern_industrialization:silicon_battery",
        "amount": 1
      },
      {
        "item": "modern_industrialization:electronic_circuit_board",
        "amount": 1
      },
      {
        "item": "modern_industrialization:stainless_steel_plate",
        "amount": 4
      }
    ],
    "fluid_inputs": [
      {
        "fluid" : "modern_industrialization:polyethylene",
        "amount" : 750
      }
    ],
    "item_outputs": [
      {
        "item": "modern_industrialization:digital_circuit_board",
        "amount": 1
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  })

  event.remove({ output: "modern_industrialization:quantum_circuit_board" })
  event.custom({
    "type": "modern_industrialization:assembler",
    "eu": 64,
    "duration": 2000,
    "item_inputs": [
      {
        "item": "modern_industrialization:superconductor_cable",
        "amount": 12
      },
      {
        "item": "modern_industrialization:plutonium_battery",
        "amount": 2
      },
      {
        "item": "modern_industrialization:processing_unit_board",
        "amount": 1
      },
      {
        "tag": "c:plates/iridium",
        "amount": 6
      }
    ],
    "fluid_inputs": [
      {
        "fluid": "modern_industrialization:helium_3",
        "amount" : 50
      }
    ],
    "item_outputs": [
      {
        "item": "modern_industrialization:quantum_circuit_board",
        "amount": 1
      }
    ],
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "advCleanroom"
      },
      {
        "type": "modern_industrialization:dimension",
        "dimension": "northstar:earth_orbit"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:glass_blocks"
      },
      {
        "amount": 3,
        "tag": "c:paper"
      },
      {
        "amount": 1,
        "tag": "c:ingots/copper"
      }
    ],
    "item_outputs": [
      {
        "amount": 3,
        "item": "immersiveengineering:light_bulb"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:glass_blocks"
      },
      {
        "amount": 3,
        "item": "minecraft:bamboo"
      },
      {
        "amount": 1,
        "tag": "c:ingots/copper"
      }
    ],
    "item_outputs": [
      {
        "amount": 3,
        "item": "immersiveengineering:light_bulb"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 200,
    "eu": 16,
    "fluid_inputs": [
      {
        "amount": 500,
        "fluid": "modern_industrialization:soldering_alloy"
      },
      {
        "amount": 100,
        "fluid": "modern_industrialization:helium"
      }
    ],
    "item_inputs": [
      {
        "amount": 2,
        "item": "modern_industrialization:blastproof_alloy_curved_plate"
      },
      {
        "amount": 1,
        "item": "modern_industrialization:large_motor"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:robot_arm"
      },
      {
        "amount": 18,
        "item": "modern_industrialization:breeder_uranium_238_rod"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:breeder_uranium_238_fuel_rod"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:assembler",
    "duration": 400,
    "eu": 64,
    "item_inputs": [
      {
        "amount": 4,
        "item": "neovitae:ingot_hellforged"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "neovitae:hellforged_parts"
      }
    ]
  })
})