ItemEvents.rightClicked(event => {
  if (event.item.id == 'kubejs:ponder_manual') {
    event.player.runCommandSilent('ponder')
    event.cancel()
  }
})

ServerEvents.tags('item', event => {
  event.add('kubejs:create_fluid_storage', [
    'create:fluid_tank',
    'create_connected:fluid_vessel'
  ])

  event.add('kubejs:create_item_storage', [
    'create:item_vault',
    'create_connected:item_silo'
  ])

  event.add('c:experience', "create_enchantment_industry:experience_bucket")

  event.add('c:ores', "blood_and_deepslate:molybdenum_ore")
  event.add('c:ores/molybdenum', "blood_and_deepslate:molybdenum_ore")
  event.add('c:raw_materials', "blood_and_deepslate:raw_molybdenum")
  event.add('c:raw_materials/molybdenum', "blood_and_deepslate:raw_molybdenum")

  event.add('c:dusts', 'electrodynamics:dustvanadium')

  event.add('c:wires/copper', "modern_industrialization:copper_wire")

  event.add('c:raw_materials', 'northstar:raw_glowstone_ore')
  event.add('c:raw_materials/glowstone', 'northstar:raw_glowstone_ore')

  event.add('northstar:air_passes_through', 'modern_industrialization:assembler')
  event.add('northstar:air_passes_through', 'modern_industrialization:electric_blast_furnace')

  function makeSpaceInsulating(armor, pants) {
    event.add('northstar:insulating', armor + "_helmet")
    event.add('northstar:insulating', armor + "_chestplate")
    event.add('northstar:insulating', `${armor}${pants ? "_pants" : "_leggings"}`)
    event.add('northstar:insulating', armor + "_boots")
  }

  function makeSpaceSealing(armor, pants) {
    event.add('northstar:oxygen_sealing', armor + "_helmet")
    event.add('northstar:oxygen_sealing', armor + "_chestplate")
    event.add('northstar:oxygen_sealing', `${armor}${pants ? "_pants" : "_leggings"}`)
    event.add('northstar:oxygen_sealing', armor + "_boots")
  }

  function makeSpaceHeatResistant(armor, pants) {
    event.add('northstar:heat_resistant', armor + "_helmet")
    event.add('northstar:heat_resistant', armor + "_chestplate")
    event.add('northstar:heat_resistant', `${armor}${pants ? "_pants" : "_leggings"}`)
    event.add('northstar:heat_resistant', armor + "_boots")
  }

  function fullSpaceSuit(armor, pants) {
    makeSpaceInsulating(armor, pants)
    makeSpaceSealing(armor, pants)
    makeSpaceHeatResistant(armor, pants)
    event.add('northstar:oxygen_sources', armor + "_chestplate")
  }

  event.add('northstar:heat_resistant', "extended_industrialization:nano_gravichestplate")
  event.add('northstar:insulating', "extended_industrialization:nano_gravichestplate")
  event.add('northstar:oxygen_sealing', "extended_industrialization:nano_gravichestplate")
  event.add('northstar:oxygen_sources', "extended_industrialization:nano_gravichestplate")

  event.add('northstar:oxygen_sealing', "minecraft:netherite_boots")
  event.add('northstar:heat_resistant', "minecraft:netherite_boots")
  event.add('northstar:insulating', "minecraft:netherite_boots")

  event.add('northstar:oxygen_sealing', "minecraft:netherite_leggings")
  event.add('northstar:heat_resistant', "minecraft:netherite_leggings")
  event.add('northstar:insulating', "minecraft:netherite_leggings")

  event.add('northstar:oxygen_sealing', "create_sa:netherite_jetpack")
  event.add('northstar:heat_resistant', "create_sa:netherite_jetpack")
  event.add('northstar:insulating', "create_sa:netherite_jetpack")

  event.add('northstar:insulating', "create:netherite_diving_helmet")

  fullSpaceSuit("extended_industrialization:nano_quantum", false)
  fullSpaceSuit("extended_industrialization:nano", false)
  fullSpaceSuit("advanced_ae:quantum", false)

  fullSpaceSuit("avaritia:infinity", true)

  event.add('minecraft:enchantable/sharp_weapon', 'minecraft:trident')

  event.add('kubejs:backpack_materials', 'minecraft:leather')
  event.add('kubejs:backpack_materials', 'minecraft:rabbit_hide')
  event.add('kubejs:backpack_materials', 'farmersdelight:canvas')
  event.add('kubejs:backpack_materials', 'dimdoors:enduring_fibers')
  event.add('kubejs:backpack_materials', 'dimdoors:stable_fabric')

  event.add('c:fiber', 'rusticdelight:cotton_boll')

  event.add('forge:gas_masks', 'create:netherite_diving_helmet')

  event.add('ae2:all_quartz_dust', 'modern_industrialization:quartz_dust')

  event.add('c:ingots/plastic', 'kubejs:plastic_bar')

  event.add('c:dusts/sulfur', 'createchemistry:sulfur_dust')
  event.add('c:dusts/calcium', 'createchemistry:calcium_dust')
  event.add('c:gems/sulfur', 'createchemistry:sulfur')

  event.add('c:rotors', 'modern_industrialization:aluminum_rotor')
  event.add('c:rotors', 'modern_industrialization:bronze_rotor')
  event.add('c:rotors', 'modern_industrialization:copper_rotor')
  event.add('c:rotors', 'modern_industrialization:stainless_steel_rotor')
  event.add('c:rotors', 'modern_industrialization:tin_rotor')
  event.add('c:rotors', 'modern_industrialization:titanium_rotor')

  event.add('northstar:tier_1_heat_resistance', 'minecraft:quartz_block')

  event.add('northstar:tier_1_heat_resistance', 'mekanism:block_steel')
  event.add('northstar:heavy_blocks', 'mekanism:block_steel')

  event.add('northstar:tier_2_heat_resistance', 'minecraft:netherite_block')
  event.add('northstar:super_heavy_blocks', 'minecraft:netherite_block')

  event.add('northstar:tier_2_heat_resistance', 'ae2:quartz_glass')
  event.add('northstar:tier_2_heat_resistance', 'mekanismgenerators:reactor_glass')
  event.add('northstar:tier_2_heat_resistance', 'createnuclear:reinforced_glass')

  const copper_levels = ['', 'exposed_', 'weathered_', 'oxidized_']

  copper_levels.forEach(copper_levels => {
    event.add('northstar:air_passes_through', 'minecraft:' + copper_levels + 'copper_grate')
    event.add('northstar:air_passes_through', 'minecraft:waxed_' + copper_levels + 'copper_grate')
  })

  const copper_blocks = ['copper', 'chiseled_copper', 'copper_grate', 'cut_copper_stairs', 'cut_copper_slab', 'copper_door', 'copper_trapdoor', 'copper_bulb']

  copper_levels.forEach(copper_levels => {
    copper_blocks.forEach(copper_blocks => {
      event.add('kubejs:' + copper_levels + 'copper_blocks', 'minecraft:' + copper_levels + copper_blocks)
      event.add('kubejs:waxed_' + copper_levels + 'copper_blocks', 'minecraft:waxed_' + copper_levels + copper_blocks)
    })
  })
})