ServerEvents.recipes(event => {
  event.custom({
    'type': 'mekanism:reaction',
    'duration': 1000,
    'energy_required': 1000,
    'chemical_input': {
      'amount': 200,
      'chemical': 'kubejs:neutron'
    },
    'fluid_input': {
      'amount': 100,
      'fluid': 'kubejs:proton_plasma'
    },
    'item_input': {
      'count': 1,
      'item': 'modern_industrialization:neodymium_dust'
    },
    'item_output': {
      'count': 1,
      'id': 'kubejs:promethium'
    }
  })

  event.custom({
    'type': 'mekanism:reaction',
    'duration': 200,
    'energy_required': 4000,
    'chemical_input': {
      'amount': 100,
      'chemical': 'mekanismelements:beryllium'
    },
    'fluid_input': {
      'amount': 1500,
      'fluid': 'create_enchantment_industry:infused_dragon_breath'
    },
    'item_input': {
      'item': 'minecraft:emerald'
    },
    'item_output': {
      'id': 'apotheosis:gem',
      'components': {
        'apotheosis:gem': 'apotheosis:the_end/endersurge',
        'apotheosis:purity': 'flawless'
      }
    }
  })
})