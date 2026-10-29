ServerEvents.recipes(event => {
  // add modern saddle recipe
  event.shaped('minecraft:saddle', [
    ' A ',
    'ABA'
  ], {
    A: '#c:leathers',
    B: '#c:ingots/iron'
  })

  event.shapeless(
    Item.of("minecraft:cobblestone", 1),
    [
      Ingredient.of("kubejs:crushed_stone", 2)
    ]
  )

  // flint and STEEL
  event.remove({ id: 'minecraft:flint_and_steel'})
  event.shapeless('minecraft:flint_and_steel', [
    Item.of('minecraft:flint', 1),
    '#c:ingots/steel']
  )

  // remove wooden tools
  const tools = [
    'axe', 'pickaxe', 'hoe', 'shovel', 'sword'
  ]
  tools.forEach(tool => {
    event.remove({ output: 'minecraft:wooden_' + tool })
  })

  // AE2
  event.replaceInput([{ mod: "ae2"}, { mod: "megacells" }, { mod: "appflux" }, { mod: "extendedae" } ], 
    "minecraft:iron_ingot", "modern_industrialization:titanium_plate"
  )

  event.replaceInput({ output: "ae2:controller" }, 
    "ae2:engineering_processor", "modern_industrialization:processing_unit"
  )

  function copperToFluix(itemOutput) {
    event.replaceInput({ output: itemOutput }, 
      "minecraft:copper_ingot", "ae2:fluix_crystal"
    )
  }

  copperToFluix("ae2:energy_acceptor")
  copperToFluix("ae2:inscriber")

  function redstoneToNAND(itemOutput) {
    event.replaceInput({ output: itemOutput }, 
      "minecraft:redstone", Ingredient.of(["kubejs:nand_unit", "create_redstone_additions:quartz_semiconductor"])
    )
  }

  redstoneToNAND("ae2:cell_component_1k")
  redstoneToNAND("ae2:cell_component_4k")

  // Advanced AE
  event.replaceInput({ output: "advanced_ae:quantum_crafter"},
    "ae2:cell_component_64k", "advanced_ae:quantum_processor"
  )

  event.replaceInput({ output: "advanced_ae:quantum_unit"},
    "extendedae:concurrent_processor", "advanced_ae:quantum_processor"
  )

  // AE2 appflux
  event.remove({ id: "appflux:charger/charge_redstone" })

  // Extended AE
  event.shaped("kubejs:infinity_lava_cell", [
    "ACA",
    "CDC",
    "BBB"
  ], {
    "A": "ae2:quartz_glass",
    "B": "minecraft:netherite_ingot",
    "C": "minecraft:lava_bucket",
    "D": "ae2:cell_component_64k"
  })

  // BROKEN
  event.replaceInput({ output: "extendedae:ex_interface"},
    "ae2:interface", Ingredient.of("#megacells:mega_interface")
  )

  // AE2lt
  event.replaceInput({ output: "ae2lt:matter_warping_matrix_casing"},
    "minecraft:iron_ingot", "modern_industrialization:iridium_plate"
  )

  event.replaceInput({ output: "ae2lt:matter_warping_matrix_casing"},
    "minecraft:quartz_block", "extendedae:assembler_matrix_wall"
  )

  function singularityToOverloaded(itemOutput) {
    event.replaceInput({ output: itemOutput }, 
      "ae2:singularity", "ae2lt:overload_singularity"
    )
  }

  singularityToOverloaded("ae2lt:tianshu_supercomputer_casing")
  singularityToOverloaded("ae2lt:tianshu_blank_unit")

  event.replaceInput({ output: "ae2lt:matter_warping_matrix_pattern_storage_t1"},
    "ae2:pattern_provider", "extendedae:assembler_matrix_pattern"
  )

  event.replaceInput({ output: "ae2lt:matter_warping_matrix_thread_unit_t1"},
    "ae2:molecular_assembler", "extendedae:assembler_matrix_crafter"
  )

  // BROKEN
  event.replaceInput({ output: "ae2lt:overload_processing_factory"},
    "ae2:inscriber", "advanced_ae:reaction_chamber"
  )

  // BROKEN
  event.replaceInput({ output: "ae2lt:overloaded_interface"},
    "ae2:interface", Ingredient.of("#extendedae:oversize_interface")
  )

  // ae2lt pigmee

  const pigmeeBlocks = ["ae2lt:pigmee_mentalmath_unit", "ae2lt:pigmee_pattern_provider", "ae2lt:pigmee_molecular_assembler"]

  pigmeeBlocks.forEach(block => {
    event.replaceInput({ output: block},
      "minecraft:lever", Ingredient.of("ae2:fluix_glass_cable")
    )
    event.replaceInput({ output: block},
      "minecraft:stone_button", Ingredient.of("modern_industrialization:iron_plate")
    )
    event.replaceInput({ output: block},
      "minecraft:stone_pressure_plate", Ingredient.of("minecraft:copper_ingot")
    )
  })

  event.shaped("ae2lt:pigmee_core", [
    'CAC',
    'ABA',
    'CAC'
  ], {
    A: '#ae2:all_certus_quartz',
    B: 'modern_industrialization:analog_circuit',
    C: 'minecraft:pink_wool'
  })

  // CC
  event.remove({ output: "computercraft:computer_normal" })
  event.shaped("computercraft:computer_normal", [
    'CCC',
    'ABA',
    'EDE'
  ], {
    A: 'modern_industrialization:random_access_memory',
    B: 'modern_industrialization:processing_unit',
    C: '#c:plates/iron',
    D: 'ae2:cell_component_16k',
    E: 'minecraft:redstone'
  })

  // Minestuck
  event.remove({ output: "minestuck:computer" })
  event.shaped("minestuck:computer", [
    'CFC',
    'ABA',
    'EDE'
  ], {
    A: 'modern_industrialization:random_access_memory',
    B: 'modern_industrialization:processing_unit',
    C: 'minestuck:raw_cruxite',
    D: 'minestuck:computer_parts',
    E: 'minecraft:redstone',
    F: 'computercraft:computer_normal'
  })

  // Neo Vitae
  event.replaceInput({ output: "neovitae:ara_vitae"}, 
    "minecraft:furnace", "ironfurnaces:netherite_furnace"
  )

  // Create
  event.replaceInput({ output: "create:depot"}, 
    "create:andesite_alloy", "modern_industrialization:steel_ingot"
  )

  event.replaceInput({ output: "northstar:ice_box" },
    "minecraft:blue_ice", "modern_industrialization:stainless_steel_plate"
  )

  event.replaceInput({ output: "create:propeller"},
    "create:andesite_alloy", "create:shaft"
  )

  event.remove({ output: "createdieselgenerators:bulk_fermenter" })
  event.shaped("createdieselgenerators:bulk_fermenter", [
    '   ',
    'ABA',
    '   '
  ], {
    A: 'modern_industrialization:steel_ingot',
    B: 'minecraft:barrel'
  })

  event.remove({ output: "moreburners:electric_burner" })
  event.shaped("moreburners:electric_burner", [
    'ABA',
    ' C ',
    ' D '
  ], {
    A: 'ae2:quartz_glass',
    B: 'modern_industrialization:cupronickel_coil',
    C: 'modern_industrialization:steel_machine_casing',
    D: 'modern_industrialization:electric_furnace'
  })

  event.remove({ type: "minecraft:smithing", output: "create:netherite_diving_helmet" })
  event.shaped("create:netherite_diving_helmet", [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'minecraft:netherite_helmet',
    B: 'create:copper_diving_helmet',
    C: 'blood_and_deepslate:gas_mask_helmet'
  })

  event.remove({ output: 'northstar:space_atlas' })
  event.shapeless('northstar:space_atlas', [
    'minecraft:book',
    'northstar:targeting_computer']
  )

  event.remove({ id: 'create_sa:small_filling_tank_recipe'})
  event.shaped('create_sa:small_filling_tank', [
    ' A ',
    'ABA',
    ' A '
  ],
  {
    A: 'minecraft:copper_ingot',
    B: '#kubejs:create_fluid_storage'
  })

  event.replaceInput({ output: "create_redstone_additions:quartz_semiconductor" }, 
    "minecraft:gold_ingot", "modern_industrialization:platinum_ingot"
  )

  // Hostile Neural Networks
  function comparatorToMVCircuit(itemOutput) {
    event.replaceInput({ output: itemOutput }, 
      "minecraft:comparator", "modern_industrialization:electronic_circuit"
    )
  }

  comparatorToMVCircuit("hostilenetworks:sim_chamber")
  comparatorToMVCircuit("hostilenetworks:loot_fabricator")
  comparatorToMVCircuit("hostilenetworks:deep_learner")

  event.replaceInput({ output: "hostilenetworks:deep_learner" }, 
    "minecraft:repeater", "modern_industrialization:electronic_circuit"
  )

  event.replaceInput({ output: "hostilenetworks:sim_chamber" }, 
    Ingredient.of("#c:glass_panes"), "minecraft:netherite_ingot"
  )

  event.replaceInput({ output: "hostilenetworks:blank_data_model" }, 
    "minecraft:repeater", "modern_industrialization:electronic_circuit"
  )

  event.replaceInput({ output: "hostilenetworks:blank_data_model" }, 
    "minecraft:redstone", "kubejs:nand_unit"
  )

  // Sophisticated Backpacks
  event.remove({ id: 'sophisticatedbackpacks:backpack'})
  event.shaped('sophisticatedbackpacks:backpack', [
    'BAB',
    'BDB',
    'CAC'
  ], {
    A: '#kubejs:backpack_materials',
    B: 'minecraft:string',
    C: '#c:ingots/steel',
    D: '#c:chests/wooden'
  })

  // Mob Grinding Utils
  event.replaceInput({ mod: "mob_grinding_utils" },
    "minecraft:feather", "create:propeller"
  )
  
  // Mekanism
  event.replaceInput({ output: "mekanism:solar_neutron_activator" },
    "mekanism:hdpe_sheet", "extended_industrialization:hv_photovoltaic_cell"
  )

  event.replaceInput({ output: 'mekanism:chemical_dissolution_chamber' },
    "mekanism:ingot_refined_obsidian", "mekanism:alloy_reinforced"
  )

  event.replaceInput({ output: 'mekanism:chemical_dissolution_chamber' },
    Ingredient.of("#c:circuits/ultimate"), Ingredient.of("#c:circuits/elite")
  )

  event.remove({ output: 'mekanism:chemical_crystallizer' })
  event.shaped('mekanism:chemical_crystallizer', [
    'ACA',
    'BDB',
    'ACA'
  ],
  {
    A: '#c:alloys/elite',
    B: '#c:circuits/elite',
    C: 'mekanism:fluorite_gem',
    D: 'mekanism:steel_casing'
  })

  // Mekanism upgrades
  event.shaped('kubejs:mekanism_upgrade_base', [
    'AEA',
    'SPS',
    'ACA'
  ],
  {
    C: 'mekanism:basic_control_circuit',
    E: 'minecraft:gold_ingot',
    A: 'create:andesite_alloy',
    P: '#c:ingots/aluminum',
    S: '#c:ingots/osmium'
  })

  event.remove({ id: 'mekanism:upgrade/speed'})
  event.shaped('mekanism:upgrade_speed', [
    'SES',
    'OBO',
    'SCS'
  ],
  {
    C: 'mekanism:basic_control_circuit',
    E: 'minecraft:gold_ingot',
    O: 'mekanism:dust_osmium',
    B: 'kubejs:mekanism_upgrade_base',
    S: 'minecraft:sugar'
  })

  event.remove({ id: 'mekanism:upgrade/energy'})
  event.shaped('mekanism:upgrade_energy', [
    'SES',
    'OBO',
    'SCS'
  ],
  {
    C: 'mekanism:basic_control_circuit',
    E: 'minecraft:gold_ingot',
    O: 'mekanism:dust_osmium',
    B: 'kubejs:mekanism_upgrade_base',
    S: 'minecraft:redstone'
  })

  event.remove({ id: 'mekanism:upgrade/filter'})
  event.shaped('mekanism:upgrade_filter', [
    'SES',
    'OBO',
    'SCS'
  ],
  {
    C: 'mekanism:basic_control_circuit',
    E: 'minecraft:gold_ingot',
    O: 'mekanism:alloy_infused',
    B: 'kubejs:mekanism_upgrade_base',
    S: '#c:dusts/tin'
  })

  event.remove({ id: 'mekanism:upgrade/chemical'})
  event.shaped('mekanism:upgrade_chemical', [
    'SES',
    'OBO',
    'SCS'
  ],
  {
    C: '#c:dusts/iron',
    E: 'minecraft:gold_ingot',
    O: 'mekanism:alloy_infused',
    B: 'kubejs:mekanism_upgrade_base',
    S: '#c:glass_blocks'
  })

  event.remove({ id: 'mekanism_extras:upgrade/stack'})
  event.shaped('mekanism_extras:upgrade_stack', [
    'AEA',
    'DBD',
    'ACA'
  ],
  {
    A: 'minecraft:obsidian',
    B: 'kubejs:mekanism_upgrade_base',
    C: '#c:glass_blocks',
    D: 'mekanism_extras:alloy_thermonuclear',
    E: 'sophisticatedstorage:stack_upgrade_tier_5'
  })

  // Modern Industrialization
  event.remove({ output: "modern_industrialization:steam_quarry" })

  event.replaceInput({ input: "modern_industrialization:steam_quarry" },
    "modern_industrialization:steam_quarry", "modern_industrialization:aluminum_drill_head"
  )

  event.replaceInput({ output: "modern_industrialization:chemical_reactor" },
    "modern_industrialization:basic_machine_hull", "modern_industrialization:advanced_machine_hull"
  )

  event.replaceInput({ output: "modern_industrialization:distillation_tower" },
    "modern_industrialization:turbo_machine_hull", "modern_industrialization:advanced_machine_hull"
  )

  event.replaceInput({ output: "modern_industrialization:turbo_machine_casing" },
    "modern_industrialization:stainless_steel_plate", "modern_industrialization:titanium_plate"
  )

  event.replaceInput({ output: "modern_industrialization:highly_advanced_machine_casing" },
    "modern_industrialization:titanium_plate", "kubejs:tpv_alloy_plate"
  )

  event.remove({ output: "modern_industrialization:electric_blast_furnace" })
  event.shaped("modern_industrialization:electric_blast_furnace", [
    'BAB',
    'ADA',
    'CCC'
  ], {
    A: 'modern_industrialization:analog_circuit',
    B: 'minecraft:blast_furnace',
    C: 'modern_industrialization:cupronickel_cable',
    D: 'modern_industrialization:heatproof_machine_casing'
  })

  event.remove({ output: "modern_industrialization:bronze_macerator" })
  event.remove({ output: "modern_industrialization:steel_macerator" })
  event.replaceInput({ input: "modern_industrialization:bronze_macerator" },
    "modern_industrialization:bronze_macerator", "modern_industrialization:steel_macerator"
  )

  event.remove({ output: "modern_industrialization:bronze_cutting_machine" })
  event.remove({ output: "modern_industrialization:steel_cutting_machine" })

  event.shaped("modern_industrialization:steel_macerator", [
    'BAB',
    'ADA',
    'CCC'
  ], {
    A: 'modern_industrialization:bronze_gear',
    B: 'minecraft:diamond',
    C: '#modern_industrialization:fluid_pipes',
    D: 'modern_industrialization:steel_machine_casing'
  })

  event.replaceInput({ output: "industrialization_overdrive:vajra" },
    "modern_industrialization:advanced_motor", "modern_industrialization:large_advanced_motor"
  )

  event.replaceInput({ output: "industrialization_overdrive:vajra" },
    "modern_industrialization:digital_circuit", "modern_industrialization:processing_unit"
  )

  event.replaceInput({ output: "industrialization_overdrive:vajra" },
    "modern_industrialization:diesel_mining_drill", "extended_industrialization:electric_mining_drill"
  )

  event.replaceInput({ output: "industrialization_overdrive:vajra" },
    "modern_industrialization:diesel_chainsaw", "extended_industrialization:electric_chainsaw"
  )

  event.remove({ output: "modern_industrialization:ore_processor" })
  event.shaped("modern_industrialization:ore_processor", [
    'BCB',
    'ADA',
    'CCC'
  ], {
    A: 'extended_industrialization:large_electric_macerator',
    B: 'extended_industrialization:netherite_rotary_blade',
    C: 'extended_industrialization:steel_plated_bricks',
    D: 'modern_industrialization:highly_advanced_machine_hull'
  })

  // pointblank
  event.remove({ mod: "pointblank" })
  event.shapeless('pointblank:guninternals', [
    '3x pointblank:gunmetal_ingot',
    '2x minecraft:iron_ingot']
  )

  event.shapeless('pointblank:gunmetal_ingot', [
    '9x pointblank:gunmetal_nugget']
  )

  event.shaped( Item.of("pointblank:gunmetal_mesh"),
    [
      "A",
      "B"
    ],
    {
      A: "minecraft:iron_ingot",
      B: "minecraft:copper_ingot"
    }
  )

  event.shaped( Item.of("pointblank:processor"),
    [
      "CAC",
      "DBA",
      "CDC"
    ],
    {
      A: "modern_industrialization:and_gate",
      B: "modern_industrialization:electronic_circuit",
      C: "modern_industrialization:iron_plate",
      D: "modern_industrialization:or_gate"
    }
  ).id("kubejs:pointblank_processor_canister")

  event.shaped( Item.of("pointblank:processor"),
    [
      "CAC",
      "DBD",
      "CAC"
    ],
    {
      A: "pointblank:processor",
      B: "modern_industrialization:basic_machine_hull",
      C: "modern_industrialization:robot_arm",
      D: "modern_industrialization:conveyor"
    }
  )

  // rustic delight
  event.remove({ id: "rusticdelight:string_from_cotton_boll" })

  // Kubejs
  event.shaped( Item.of("kubejs:rocket_fuel_canister"),
    [
      " A ",
      "ABA",
      " A "
    ],
    {
      A: "modern_industrialization:titanium_plate",
      B: "minecraft:bucket"
    }
  ).id("kubejs:rocket_fuel_canister")
})