ServerEvents.recipes(event => {
  // Infinity Catalyst
  event.custom({
    'type': 'extendedcrafting:shapeless_table',
    'tier': 4,
    'ingredients': [
      { 'item': 'extendedcrafting:ultimate_singularity' },
      { 'item': 'avaritia:ultimate_stew'},
      { 'item': 'avaritia:cosmic_meatballs'},
      { 'item': 'avaritia:endest_pearl'},
      { 'item': 'avaritia:crystal_matrix_ingot'},
      { 'item': 'extendedcrafting:enhanced_redstone_catalyst'},
      { 'item': 'extendedcrafting:enhanced_ender_catalyst'},
      { 'item': 'extendedcrafting:crystaltine_catalyst'},
      { 'item': 'avaritia:neutron_ingot'},
      { 'item': 'advanced_ae:quantum_storage_component'},
      { 'item': 'mekanism:ultimate_control_circuit'},
      { 'item': 'avaritia:record_fragment'}
    ],
    'result': {
      'id': 'avaritia:infinity_catalyst'
    }
  })

  event.remove({ id: 'extendedcrafting:ultimate_table' })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 3,
    "pattern": [
      "AAABAAA",
      "ACCCCCA",
      "ACCCCCA",
      "BCDCDCB",
      "ACCCCCA",
      "ACCCCCA",
      "AAAEAAA"
    ],
    "key": {
      "A": { "item": "extendedcrafting:ultimate_component" },
      "B": { "item": "extendedcrafting:ultimate_catalyst" },
      "C": { "item": "minecraft:emerald_block" },
      "D": { "item": "extendedcrafting:elite_table" },
      "E": { "item": "extendedcrafting:black_iron_slate" }
    },
    "result": {
      "id": "extendedcrafting:ultimate_table"
    }
  })

  event.remove({ id: 'extendedcrafting:elite_table' })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "AABAA",
      "ACCCA",
      "BDCDB",
      "ACCCA",
      "AAEAA"
    ],
    "key": {
      "A": { "item": "extendedcrafting:elite_component" },
      "B": { "item": "extendedcrafting:elite_catalyst" },
      "C": { "item": "minecraft:diamond_block" },
      "D": { "item": "extendedcrafting:advanced_table" },
      "E": { "item": "extendedcrafting:black_iron_slate" }
    },
    "result": {
      "id": "extendedcrafting:elite_table"
    }
  })

  event.remove({ id: 'extendedcrafting:advanced_table' })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 1,
    "pattern": [
      "ABA",
      "CDC",
      "AEA"
    ],
    "key": {
      "A": { "item": "extendedcrafting:advanced_component" },
      "B": { "item": "extendedcrafting:advanced_catalyst" },
      "C": { "item": "extendedcrafting:basic_table" },
      "D": { "item": "minecraft:gold_block" },
      "E": { "item": "extendedcrafting:black_iron_slate" }
    },
    "result": {
      "id": "extendedcrafting:advanced_table"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "FGHGF",
      "ECACE",
      "DCCCD",
      "BBBBB",
      "IIIII"
    ],
    "key": {
      "A": { "item": "minecraft:dragon_egg" },
      "B": { "item": "minecraft:end_stone_bricks" },
      "C": { "item": "minecraft:end_stone" },
      "D": { "item": "minecraft:end_stone_brick_wall" },
      "E": { "item": "minecraft:emerald_block" },
      "F": { "item": "avaritia:crystal_matrix_ingot" },
      "G": { "item": "minecraft:ender_eye" },
      "H": { "item": "minecraft:sculk_shrieker" },
      "I": { "item": "avaritia:neutron_nugget"}
    },
    "result": {
      "id": "minecraft:end_portal_frame"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "  AC ",
      " AACB",
      "  ACB",
      "  CBB",
      "   B "
    ],
    "key": {
      "A": { "item": "avaritia:neutron_pile"},
      "B": { "item": "minecraft:sculk" },
      "C": { "item": "minecraft:netherite_ingot" }
    },
    "result": {
      "id": "minecraft:disc_fragment_5"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      " AAA ",
      " BAB ",
      "AACAA",
      " AAA ",
      "  A  "
    ],
    "key": {
      "A": { "item": "minecraft:gold_block"},
      "B": { "item": "minecraft:emerald_block" },
      "C": { "item": "minecraft:nether_star" }
    },
    "result": {
      "id": "minecraft:totem_of_undying"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 1,
    "pattern": [
      "   ",
      "BAB",
      "   ",
    ],
    "key": {
      "A": { "item": "minecraft:sculk" },
      "B": { "item": "minecraft:echo_shard" }
    },
    "result": {
      "id": "minecraft:sculk_sensor"
    }
  })
})