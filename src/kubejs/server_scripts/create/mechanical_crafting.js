ServerEvents.recipes(event => {
  function northstarTierFix(itemOutput) {
    event.replaceInput({ output: itemOutput }, 
      'northstar:circuit', 'modern_industrialization:digital_circuit'
    )
    event.replaceInput({ output: itemOutput }, 
      'modern_industrialization:titanium_ingot', 'modern_industrialization:kanthal_ingot'
    )
    event.replaceInput({ output: itemOutput }, 
      'modern_industrialization:titanium_plate', 'modern_industrialization:kanthal_plate'
    )
    event.replaceInput({ output: itemOutput }, 
      'create:industrial_iron_block', 'modern_industrialization:steel_machine_casing'
    )
    event.replaceInput({ output: itemOutput }, 
      'northstar:hardened_precision_mechanism', 'modern_industrialization:large_motor'
    )
  }

  northstarTierFix('northstar:rocket_combustion_chamber')
  northstarTierFix('northstar:rocket_thruster')
  northstarTierFix('northstar:rocket_controls')
  northstarTierFix('northstar:rocket_station')
  northstarTierFix('northstar:oxygen_filler')

  event.replaceInput({ output: 'createaddition:tesla_coil' }, 
    'createaddition:copper_spool', 'extended_industrialization:copper_tesla_winding'
  )

  event.recipes.create.mechanical_crafting('minecraft:dragon_head', 
    [
      ' OBO ',
      ' OOO ',
      ' EGE ',
      'PSLSP',
      'PONOP'
    ], {
      'O': 'minecraft:obsidian',
      'G': 'minecraft:dragon_egg',
      'E': 'minecraft:ender_eye',
      'L': 'minecraft:elytra',
      'N': 'minecraft:netherite_block',
      'P': 'minecraft:phantom_membrane',
      'S': 'minecraft:nether_star',
      'B': 'create_dragons_plus:dragon_breath_bucket'
    }
  )

  event.remove({ id: 'create:crafting/kinetics/large_water_wheel'})
  event.recipes.create.mechanical_crafting('create:large_water_wheel', 
    [
      ' BBB ',
      'BBBBB',
      'BBABB',
      'BBBBB',
      ' BBB '
    ], {
      'A': 'create:water_wheel',
      'B': '#minecraft:planks'
    }
  )

  event.remove({ id: 'create:crafting/kinetics/water_wheel'})
  event.recipes.create.mechanical_crafting('create:water_wheel', 
    [
      ' BBB ',
      'BBBBB',
      'BBABB',
      'BBBBB',
      ' BBB '
    ], {
      'A': 'create:shaft',
      'B': '#minecraft:planks'
    }
  )

  event.remove({ output: 'northstar:temperature_regulator'})
  event.recipes.create.mechanical_crafting('northstar:temperature_regulator', 
    [
      'ADB',
      'ADB',
      'CEC',
      'FFF',
      'CEC'
    ], {
      'A': 'minecraft:blue_ice',
      'B': 'minecraft:blaze_rod',
      'C': 'modern_industrialization:stainless_steel_plate',
      'D': 'modern_industrialization:stainless_steel_ingot',
      'E': 'create:shaft',
      'F': 'modern_industrialization:electronic_circuit'
    }
  )

  event.remove({ id: 'northstar:mechanical_crafting/interplanetary_navigator'})
  event.recipes.create.mechanical_crafting('northstar:interplanetary_navigator', 
    [
      'CAC',
      'BAB',
      'CAC',
      'BAB',
      'CFC',
      'DED'
    ], {
      'A': 'northstar:polished_lunar_sapphire',
      'B': 'modern_industrialization:processing_unit',
      'C': 'modern_industrialization:iridium_plate',
      'D': 'modern_industrialization:iridium_ingot',
      'E': 'modern_industrialization:quantum_circuit',
      'F': 'northstar:targeting_computer'
    }
  )

  event.remove({ id: 'northstar:mechanical_crafting/oxygen_sealer'})
  event.recipes.create.mechanical_crafting('northstar:oxygen_sealer', 
    [
      'CDC',
      'CAC',
      'BEB',
      'CFC'
    ], {
      'A': 'northstar:oxygen_separator',
      'B': 'modern_industrialization:digital_circuit',
      'C': '#c:plates/titanium',
      'D': 'create:encased_fan',
      'E': 'create:fluid_tank',
      'F': 'create:shaft'
    }
  )
});
