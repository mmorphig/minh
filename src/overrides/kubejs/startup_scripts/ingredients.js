StartupEvents.registry('item', event => {
  event.create('ponder_manual')
    .tooltip('Right-click to open the Ponder Index')

  event.create('precision_assembly')
  
  event.create('incomplete_precision_assembly', 'create:sequenced_assembly')

  event.create('slag')
  
  event.create('crushed_stone')
    .tag('create:crushed_raw_materials')
    .tag('c:crushed_raw_materials/stone')

  event.create('empty_casting_mold')
    .displayName('Empty Mold')
    .tag('c:casting_molds')
  
  event.create('gear_casting_mold')
    .displayName('Gear Mold')
    .tag('c:casting_molds')

  event.create('rotor_casting_mold')
    .displayName('Rotor Mold')
    .tag('c:casting_molds')

  event.create('plate_casting_mold')
    .displayName('Plate Mold')
    .tag('c:casting_molds')

  event.create('ball_casting_mold')
    .displayName('Ball Mold')
    .tag('c:casting_molds')
  
  event.create('ingot_casting_mold')
    .displayName('Ingot Mold')
    .tag('c:casting_molds')
  
  event.create('casing_casting_mold')
    .displayName('Casing Mold')
    .tag('c:casting_molds')
  
  event.create('block_casting_mold')
    .displayName('Block Mold')
    .tag('c:casting_molds')
  
  event.create('bottle_casting_mold')
    .displayName('Bottle Mold')
    .tag('c:casting_molds')
  
  event.create('raw_promethium')
    .tag('c:raw_materials')
    .tag('c:raw_materials/promethium')

  event.create('promethium_dust')
    .tag('c:dusts')
    .tag('c:dusts/promethium')

  event.create('promethium')
    .tag('minecraft:beacon_payment_items')

  event.create('nichrome_dust')
    .tag('c:dusts')
    .tag('c:dusts/nichrome')

  event.create('nichrome_ingot')
    .tag('c:ingots')
    .tag('c:ingots/nichrome')

  event.create('nichrome_hot_ingot')

  event.create('nichrome_plate')
    .tag('c:plates')
    .tag('c:plates/nichrome')

  event.create('nichrome_wire')

  event.create('tpv_alloy_dust')
    .displayName('TPV Alloy Dust')
    .tag('c:dusts')
    .tag('c:dusts/tpv_alloy')

  event.create('tpv_alloy_ingot')
    .displayName('TPV Alloy Ingot')
    .tag('c:ingots')
    .tag('c:ingots/tpv_alloy')

  event.create('tpv_alloy_hot_ingot')
    .displayName('Hot TPV Alloy Ingot')

  event.create('tpv_alloy_plate')
    .displayName('TPV Alloy Plate')
    .tag('c:plates')
    .tag('c:plates/tpv_alloy')

  event.create('tpv_alloy_wire')

  event.create('alumina_dust')
    .tag('c:dusts')
    .tag('c:dusts/alumina')

  event.create('aluminum_chloride_dust')
    .tag('c:dusts')
    .tag('c:dusts/alumina')

  event.create('btx_catalyst')
    .displayName('Reforming Catalyst')
    .tag('c:dusts')
    .tag('c:dusts/btx_catalyst')

  event.create('anthrahydroquinone')
    .tag('c:dusts')
    .tag('c:dusts/anthrahydroquinone')

  event.create('anthraquinone')
    .tag('c:dusts')
    .tag('c:dusts/anthraquinone')

  event.create('phthalic_anhydride')
    .displayName('Phthalic Anhydride')
    .tag('c:dusts')
    .tag('c:dusts/phthalic_anhydride')

  event.create('early_rocket_fuel_canister')
    .maxStackSize(16)
    .burnTime(12800)

  event.create('rocket_fuel_canister')

  event.create('blank_record')

  event.create('pure_gold_dust')
    .tag('c:dusts')
    .tag('c:dusts/pure_gold')

  event.create('pure_gold_ingot')
    .tag('c:ingots')
    .tag('c:ingots/pure_gold')

  event.create('pure_gold_plate')
    .tag('c:plates')
    .tag('c:plates/pure_gold')
  
  event.create('pure_gold_wire')

  event.create('pure_gold_fine_wire')

  event.create('nand_unit')
    .displayName('NAND Flash')

  event.create('scrap_trans', 'create:sequenced_assembly')
    .displayName('Trans Scrap')

  event.create('mekanism_upgrade_base')
    .displayName('Upgrade Base')
    .tooltip(Text.white('Base template for Mekanism upgrade cards.'))

  event.create('infinity_lava_cell', 'custom_infinity_cell')
      .fluidType('minecraft:lava')
})

StartupEvents.registry('fluid', event => {
  event.create('mineralized_water')
    .translationKey("fluid_type.kubejs.mineralized_water")
    .tint(0x3B72E0)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('btx')
    .translationKey("fluid_type.kubejs.btx")
    .tint(0xD4C15A)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('xylene')
    .translationKey("fluid_type.kubejs.xylene")
    .tint(0xD6B84C)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('o_xylene')
    .translationKey("fluid_type.kubejs.o_xylene")
    .tint(0x3B72E0)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('o_benzoylbenzoic_acid')
    .translationKey("fluid_type.kubejs.o_benzoylbenzoic_acid")
    .tint(0xE6D9A8)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )
  
  event.create('hydrogen_peroxide')
    .translationKey("fluid_type.kubejs.hydrogen_peroxide")
    .tint(0x5FA6E4)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('early_rocket_fuel')
    .translationKey("fluid_type.kubejs.early_rocket_fuel")
    .tint(0x0F5694)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('pirahna_solution')
    .translationKey("fluid_type.kubejs.pirahna_solution")
    .tint(0xD9D4B8)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('aqua_regia')
    .translationKey("fluid_type.kubejs.aqua_regia")
    .tint(0xD2DB4E)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )
  
  event.create('proton_plasma')
    .translationKey("fluid_type.kubejs.proton_plasma")
    .tint(0xFF0000)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )
  
  event.create('neutron_plasma')
    .translationKey("fluid_type.kubejs.neutron_plasma")
    .tint(0x00EEFF)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('electron_plasma')
    .translationKey("fluid_type.kubejs.electron_plasma")
    .tint(0xEEEEEE)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('muon_plasma')
    .translationKey("fluid_type.kubejs.muon_plasma")
    .tint(0x999999)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )
  
  event.create('degenerate_electron_gas')
    .translationKey("fluid_type.kubejs.degenerate_electron_gas")
    .tint(0xFFFFFF)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )

  event.create('quark_gluon_plasma')
    .translationKey("fluid_type.kubejs.quark_gluon_plasma")
    .tint(0x666666)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
    )
})

const $Chemical = Java.loadClass('mekanism.api.chemical.Chemical')
const $ChemicalBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder')

StartupEvents.registry('mekanism:chemical', event => {
  event.createCustom(
    'kubejs:antineutron',
    () => new $Chemical(
      $ChemicalBuilder.builder()
        .tint(0xFFEE00)
    )
  ).displayName('Antineutrons')

  event.createCustom(
    'kubejs:neutron',
    () => new $Chemical(
      $ChemicalBuilder.builder()
        .tint(0x00EEFF)
    )
  ).displayName('Neutrons')

  event.createCustom(
    'kubejs:antiproton',
    () => new $Chemical(
      $ChemicalBuilder.builder()
        .tint(0xEE00FF)
    )
  ).displayName('Antiprotons')

  event.createCustom(
    'kubejs:proton',
    () => new $Chemical(
      $ChemicalBuilder.builder()
        .tint(0xFF0000)
    )
  ).displayName('Protons')

  event.createCustom(
    'kubejs:energy',
    () => new $Chemical(
      $ChemicalBuilder.builder()
        .tint(0xFFFFFF)
    )
  ).displayName('Pure Energy')

  event.createCustom(
    'kubejs:life',
    () => new $Chemical(
      $ChemicalBuilder.builder()
        .tint(0xAAFFAA)
    )
  ).displayName('Life, the universe and everything.')
})

StartupEvents.registry('block', event => {
  event.create('nichrome_coil')
    .displayName('Nichrome Coil')
    .fullBlock(true)
    .soundType('metal')
    .hardness(1)
    .resistance(10)
    .requiresTool(true)
    .tag('minecraft:mineable/pickaxe')
    .tag('minecraft:incorrect_for_gold_tool')
    .tag('minecraft:incorrect_for_wooden_tool')
  
  event.create('tpv_alloy_coil')
    .displayName('TPV Alloy Coil')
    .fullBlock(true)
    .soundType('metal')
    .hardness(1)
    .resistance(10)
    .requiresTool(true)
    .tag('minecraft:mineable/pickaxe')
    .tag('minecraft:incorrect_for_iron_tool')
    .tag('minecraft:incorrect_for_gold_tool')
    .tag('minecraft:incorrect_for_wooden_tool')
  
  function machineHull(tier) {
    event.create(`${tier}_machine_hull`)
      .fullBlock(true)
      .soundType('metal')
      .hardness(1)
      .resistance(10)
      .requiresTool(true)
      .tag('minecraft:mineable/pickaxe')
      .tag('minecraft:incorrect_for_gold_tool')
      .tag('minecraft:incorrect_for_wooden_tool')
  }

  machineHull('insane')
  machineHull('ludicrous')
  machineHull('max')
  machineHull('mega')
  machineHull('extremely_ultimate')
  machineHull('highly_ultimate')
  machineHull('insanely_ultimate')
  machineHull('mega_ultimate')
  machineHull('ultimate')
  machineHull('extended_ultimate')
})

ItemEvents.modification(event => {
  function stack(insert) {
    event.modify(insert, item => {item.maxStackSize = 64})
  }
    
  stack('minecraft:ender_pearl')
  stack('minecraft:snowball')
  stack('minecraft:bucket')
  stack('minecraft:egg')
  stack('minecraft:honey_bottle')
})
