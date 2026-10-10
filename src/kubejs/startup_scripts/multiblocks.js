//#region Ore Processor

let ORE_PROCESSOR

MIMachineEvents.registerRecipeTypes(event => {
  ORE_PROCESSOR = event.register('ore_processor')
    .withItemInputs()
    .withItemOutputs()
})

MIMachineEvents.registerMachines(event => {
  const casing = event.memberOfBlock(
    'modern_industrialization:highly_advanced_machine_casing'
  )

  const hatches = event.hatchOf(
    'item_input',
    'item_output',
    'energy_input'
  )

  // re-creation of the fusion reactor
  // multiblock is formed back to front, bottom to top, # is the controller
  const shape = event.layeredShape('titanium', [
    ['HHHHH', 'UUUUU', 'UUUUU', 'HHHHH'],
    ['HUUUH', 'U   U', 'U   U', 'HUUUH'],
    ['HUUUH', 'U   U', 'U   U', 'HUUUH'],
    ['HUUUH', 'U   U', 'U   U', 'HUUUH'],
    ['HH#HH', 'UUUUU', 'UUUUU', 'HHHHH']
  ])
    .key('H', casing, hatches)
    .key('U', casing, null)
    .build()

  event.simpleElectricCraftingMultiBlock(
    'Ore Processor',
    'ore_processor',
    ORE_PROCESSOR,
    shape,
    event.progressBar(77, 33, 'macerate'),
    slots => slots.addSlot(56, 35),
    slots => slots.addSlots(107, 9, 3, 3),
    slots => {},
    slots => {},
    'ev',
    'ore_processor',
    true,
    false,
    false
  )
})

//#endregion

//#region particle accelerator

let PARTICLE_ACCELERATOR

MIMachineEvents.registerRecipeTypes(event => {
  PARTICLE_ACCELERATOR = event.register('particle_accelerator')
    .withItemInputs()
    .withFluidInputs()
    .withFluidOutputs()
})

MIMachineEvents.registerMachines(event => {
  const hull = event.memberOfBlock(
    'modern_industrialization:highly_advanced_machine_hull'
  )

  const chamber = event.memberOfBlock(
    'modern_industrialization:fusion_chamber'
  )

  const hatches = event.hatchOf(
    'item_input',
    'fluid_input',
    'fluid_output',
    'energy_input'
  )

  // re-creation of the fusion reactor
  // multiblock is formed back to front, bottom to top, # is the controller
  const shape = event.layeredShape('ev', [
      ['      HAH      ', '     HHAHH     ', '      HAH      '],
      ['    HHHHHHH    ', '   HHCCCCCHH   ', '    HHHHHHH    '],
      ['   HHH   HHH   ', '  HCCHHHHHCCH  ', '   HHH   HHH   '],
      ['  HH       HH  ', ' HCCH     HCCH ', '  HH       HH  '],
      [' HH         HH ', ' HCH       HCH ', ' HH         HH '],
      [' HH         HH ', 'HCH         HCH', ' HH         HH '],
      ['HH           HH', 'HCH         HCH', 'HH           HH'],
      ['AH           HA', 'ACH         HCA', 'AH           HA'],
      ['HH           HH', 'HCH         HCH', 'HH           HH'],
      [' HH         HH ', 'HCH         HCH', ' HH         HH '],
      [' HH         HH ', ' HCH       HCH ', ' HH         HH '],
      ['  HH       HH  ', ' HCCH     HCCH ', '  HH       HH  '],
      ['   HHH   HHH   ', '  HCCHHHHHCCH  ', '   HHH   HHH   '],
      ['    HHHHHHH    ', '   HHCCCCCHH   ', '    HHHHHHH    '],
      ['      HAH      ', '     HH#HH     ', '      HAH      ']
  ])
    .key('A', hull, hatches)
    .key('H', hull, null)
    .key('C', chamber, null)
    .build()

  event.simpleElectricCraftingMultiBlock(
    'Particle Accelerator',
    'particle_accelerator',
    PARTICLE_ACCELERATOR,
    shape,
    event.progressBar(77, 33, 'arrow'),
    slots => slots.addSlot(28, 35),
    slots => {},
    slots => slots.addSlot(46, 35),
    slots => slots.addSlot(102, 35),
    'ev',
    'particle_accelerator',
    true,
    false,
    false
  )
})
//#endregion

//#region LHC

let LHC

MIMachineEvents.registerRecipeTypes(event => {
  LHC = event.register('supercollider')
    .withItemInputs()
    .withFluidInputs()
    .withFluidOutputs()
})

MIMachineEvents.registerMachines(event => {
  const hull = event.memberOfBlock(
    'modern_industrialization:highly_advanced_machine_hull'
  )

  const chamber = event.memberOfBlock(
    'modern_industrialization:fusion_chamber'
  )

  const hatches = event.hatchOf(
    'item_input',
    'fluid_input',
    'fluid_output',
    'energy_input'
  )

  // re-creation of the fusion reactor
  // multiblock is formed back to front, bottom to top, # is the controller
  const shape = event.layeredShape('ev', [
    ['                                                                                                                       ', '                                                 HHHHHHHHHHAHHHHHHHHHH                                                 ', '                                                                                                                       '],
    ['                                                 HHHHHHHHHHAHHHHHHHHHH                                                 ', '                                            HHHHHHCCCCCCCCCCCCCCCCCCCHHHHHH                                            ', '                                                 HHHHHHHHHHAHHHHHHHHHH                                                 '],
    ['                                            HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                            ', '                                         HHHHCCCCCCCCCCCCCCCCCCCCCCCCCCCCCHHHH                                         ', '                                            HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                            '],
    ['                                         HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                         ', '                                      HHHHCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCHHHH                                      ', '                                         HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                         '],
    ['                                      HHHHHHHHHHH                     HHHHHHHHHHH                                      ', '                                    HHHCCCCCCCCCHHHHHHHHHHHHHHHHHHHHHHHCCCCCCCCCHHH                                    ', '                                      HHHHHHHHHHH                     HHHHHHHHHHH                                      '],
    ['                                    HHHHHHHHH                             HHHHHHHHH                                    ', '                                 HHHHCCCCCCCHHHHH                     HHHHHCCCCCCCHHHH                                 ', '                                    HHHHHHHHH                             HHHHHHHHH                                    '],
    ['                                  HHHHHHH                                     HHHHHHH                                  ', '                               HHHCCCCCCCHHHH                             HHHHCCCCCCCHHH                               ', '                                  HHHHHHH                                     HHHHHHH                                  '],
    ['                                HHHHHHH                                         HHHHHHH                                ', '                              HHCCCCCCHHHH                                   HHHHCCCCCCHH                              ', '                                HHHHHHH                                         HHHHHHH                                '],
    ['                              HHHHHH                                               HHHHHH                              ', '                            HHHCCCCCHHH                                         HHHCCCCCHHH                            ', '                              HHHHHH                                               HHHHHH                              '],
    ['                            HHHHHH                                                   HHHHHH                            ', '                          HHHCCCCCHHH                                             HHHCCCCCHHH                          ', '                            HHHHHH                                                   HHHHHH                            '],
    ['                           HHHHH                                                       HHHHH                           ', '                         HHCCCCCHHH                                                 HHHCCCCCHH                         ', '                           HHHHH                                                       HHHHH                           '],
    ['                         HHHHHH                                                         HHHHHH                         ', '                       HHHCCCCHHH                                                     HHHCCCCHHH                       ', '                         HHHHHH                                                         HHHHHH                         '],
    ['                        HHHHH                                                             HHHHH                        ', '                      HHCCCCHHH                                                         HHHCCCCHH                      ', '                        HHHHH                                                             HHHHH                        '],
    ['                       HHHHH                                                               HHHHH                       ', '                     HHCCCCHH                                                             HHCCCCHH                     ', '                       HHHHH                                                               HHHHH                       '],
    ['                     HHHHH                                                                   HHHHH                     ', '                    HHCCCCHH                                                               HHCCCCHH                    ', '                     HHHHH                                                                   HHHHH                     '],
    ['                    HHHHH                                                                     HHHHH                    ', '                   HHCCCHHH                                                                 HHHCCCHH                   ', '                    HHHHH                                                                     HHHHH                    '],
    ['                   HHHHH                                                                       HHHHH                   ', '                  HHCCCHH                                                                     HHCCCHH                  ', '                   HHHHH                                                                       HHHHH                   '],
    ['                  HHHH                                                                           HHHH                  ', '                 HHCCCHH                                                                       HHCCCHH                 ', '                  HHHH                                                                           HHHH                  '],
    ['                 HHHH                                                                             HHHH                 ', '                HHCCCHH                                                                         HHCCCHH                ', '                 HHHH                                                                             HHHH                 '],
    ['                HHHH                                                                               HHHH                ', '               HHCCCHH                                                                           HHCCCHH               ', '                HHHH                                                                               HHHH                '],
    ['               HHHH                                                                                 HHHH               ', '              HHCCCHH                                                                             HHCCCHH              ', '               HHHH                                                                                 HHHH               '],
    ['              HHHH                                                                                   HHHH              ', '             HHCCCHH                                                                               HHCCCHH             ', '              HHHH                                                                                   HHHH              '],
    ['              HHH                                                                                     HHH              ', '            HHCCCHH                                                                                 HHCCCHH            ', '              HHH                                                                                     HHH              '],
    ['             HHHH                                                                                     HHHH             ', '           HHCCCHH                                                                                   HHCCCHH           ', '             HHHH                                                                                     HHHH             '],
    ['            HHHH                                                                                       HHHH            ', '           HCCCHH                                                                                     HHCCCH           ', '            HHHH                                                                                       HHHH            '],
    ['           HHHH                                                                                         HHHH           ', '          HHCCCH                                                                                       HCCCHH          ', '           HHHH                                                                                         HHHH           '],
    ['           HHH                                                                                           HHH           ', '         HHCCCHH                                                                                       HHCCCHH         ', '           HHH                                                                                           HHH           '],
    ['          HHHH                                                                                           HHHH          ', '         HCCCHH                                                                                         HHCCCH         ', '          HHHH                                                                                           HHHH          '],
    ['         HHHH                                                                                             HHHH         ', '        HHCCHH                                                                                           HHCCHH        ', '         HHHH                                                                                             HHHH         '],
    ['         HHH                                                                                               HHH         ', '        HCCCH                                                                                             HCCCH        ', '         HHH                                                                                               HHH         '],
    ['        HHHH                                                                                               HHHH        ', '       HHCCHH                                                                                             HHCCHH       ', '        HHHH                                                                                               HHHH        '],
    ['        HHH                                                                                                 HHH        ', '      HHCCCH                                                                                               HCCCHH      ', '        HHH                                                                                                 HHH        '],
    ['       HHH                                                                                                   HHH       ', '      HCCCHH                                                                                               HHCCCH      ', '       HHH                                                                                                   HHH       '],
    ['       HHH                                                                                                   HHH       ', '     HHCCCH                                                                                                 HCCCHH     ', '       HHH                                                                                                   HHH       '],
    ['      HHH                                                                                                     HHH      ', '     HCCCHH                                                                                                 HHCCCH     ', '      HHH                                                                                                     HHH      '],
    ['      HHH                                                                                                     HHH      ', '     HCCCH                                                                                                   HCCCH     ', '      HHH                                                                                                     HHH      '],
    ['     HHH                                                                                                       HHH     ', '    HHCCHH                                                                                                   HHCCHH    ', '     HHH                                                                                                       HHH     '],
    ['     HHH                                                                                                       HHH     ', '    HCCCH                                                                                                     HCCCH    ', '     HHH                                                                                                       HHH     '],
    ['    HHHH                                                                                                       HHHH    ', '   HHCCHH                                                                                                     HHCCHH   ', '    HHHH                                                                                                       HHHH    '],
    ['    HHH                                                                                                         HHH    ', '   HCCCH                                                                                                       HCCCH   ', '    HHH                                                                                                         HHH    '],
    ['    HHH                                                                                                         HHH    ', '   HCCCH                                                                                                       HCCCH   ', '    HHH                                                                                                         HHH    '],
    ['   HHH                                                                                                           HHH   ', '  HHCCHH                                                                                                       HHCCHH  ', '   HHH                                                                                                           HHH   '],
    ['   HHH                                                                                                           HHH   ', '  HCCCH                                                                                                         HCCCH  ', '   HHH                                                                                                           HHH   '],
    ['   HHH                                                                                                           HHH   ', '  HCCCH                                                                                                         HCCCH  ', '   HHH                                                                                                           HHH   '],
    ['  HHHH                                                                                                           HHHH  ', ' HHCCHH                                                                                                         HHCCHH ', '  HHHH                                                                                                           HHHH  '],
    ['  HHH                                                                                                             HHH  ', ' HCCCH                                                                                                           HCCCH ', '  HHH                                                                                                             HHH  '],
    ['  HHH                                                                                                             HHH  ', ' HCCCH                                                                                                           HCCCH ', '  HHH                                                                                                             HHH  '],
    ['  HHH                                                                                                             HHH  ', ' HCCCH                                                                                                           HCCCH ', '  HHH                                                                                                             HHH  '],
    ['  HHH                                                                                                             HHH  ', ' HCCHH                                                                                                           HHCCH ', '  HHH                                                                                                             HHH  '],
    [' HHH                                                                                                               HHH ', 'HHCCH                                                                                                             HCCHH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' AHH                                                                                                               HHA ', 'ACCCH                                                                                                             HCCCA', ' AHH                                                                                                               HHA '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HCCCH                                                                                                             HCCCH', ' HHH                                                                                                               HHH '],
    [' HHH                                                                                                               HHH ', 'HHCCH                                                                                                             HCCHH', ' HHH                                                                                                               HHH '],
    ['  HHH                                                                                                             HHH  ', ' HCCHH                                                                                                           HHCCH ', '  HHH                                                                                                             HHH  '],
    ['  HHH                                                                                                             HHH  ', ' HCCCH                                                                                                           HCCCH ', '  HHH                                                                                                             HHH  '],
    ['  HHH                                                                                                             HHH  ', ' HCCCH                                                                                                           HCCCH ', '  HHH                                                                                                             HHH  '],
    ['  HHH                                                                                                             HHH  ', ' HCCCH                                                                                                           HCCCH ', '  HHH                                                                                                             HHH  '],
    ['  HHHH                                                                                                           HHHH  ', ' HHCCHH                                                                                                         HHCCHH ', '  HHHH                                                                                                           HHHH  '],
    ['   HHH                                                                                                           HHH   ', '  HCCCH                                                                                                         HCCCH  ', '   HHH                                                                                                           HHH   '],
    ['   HHH                                                                                                           HHH   ', '  HCCCH                                                                                                         HCCCH  ', '   HHH                                                                                                           HHH   '],
    ['   HHH                                                                                                           HHH   ', '  HHCCHH                                                                                                       HHCCHH  ', '   HHH                                                                                                           HHH   '],
    ['    HHH                                                                                                         HHH    ', '   HCCCH                                                                                                       HCCCH   ', '    HHH                                                                                                         HHH    '],
    ['    HHH                                                                                                         HHH    ', '   HCCCH                                                                                                       HCCCH   ', '    HHH                                                                                                         HHH    '],
    ['    HHHH                                                                                                       HHHH    ', '   HHCCHH                                                                                                     HHCCHH   ', '    HHHH                                                                                                       HHHH    '],
    ['     HHH                                                                                                       HHH     ', '    HCCCH                                                                                                     HCCCH    ', '     HHH                                                                                                       HHH     '],
    ['     HHH                                                                                                       HHH     ', '    HHCCHH                                                                                                   HHCCHH    ', '     HHH                                                                                                       HHH     '],
    ['      HHH                                                                                                     HHH      ', '     HCCCH                                                                                                   HCCCH     ', '      HHH                                                                                                     HHH      '],
    ['      HHH                                                                                                     HHH      ', '     HCCCHH                                                                                                 HHCCCH     ', '      HHH                                                                                                     HHH      '],
    ['       HHH                                                                                                   HHH       ', '     HHCCCH                                                                                                 HCCCHH     ', '       HHH                                                                                                   HHH       '],
    ['       HHH                                                                                                   HHH       ', '      HCCCHH                                                                                               HHCCCH      ', '       HHH                                                                                                   HHH       '],
    ['        HHH                                                                                                 HHH        ', '      HHCCCH                                                                                               HCCCHH      ', '        HHH                                                                                                 HHH        '],
    ['        HHHH                                                                                               HHHH        ', '       HHCCHH                                                                                             HHCCHH       ', '        HHHH                                                                                               HHHH        '],
    ['         HHH                                                                                               HHH         ', '        HCCCH                                                                                             HCCCH        ', '         HHH                                                                                               HHH         '],
    ['         HHHH                                                                                             HHHH         ', '        HHCCHH                                                                                           HHCCHH        ', '         HHHH                                                                                             HHHH         '],
    ['          HHHH                                                                                           HHHH          ', '         HCCCHH                                                                                         HHCCCH         ', '          HHHH                                                                                           HHHH          '],
    ['           HHH                                                                                           HHH           ', '         HHCCCHH                                                                                       HHCCCHH         ', '           HHH                                                                                           HHH           '],
    ['           HHHH                                                                                         HHHH           ', '          HHCCCH                                                                                       HCCCHH          ', '           HHHH                                                                                         HHHH           '],
    ['            HHHH                                                                                       HHHH            ', '           HCCCHH                                                                                     HHCCCH           ', '            HHHH                                                                                       HHHH            '],
    ['             HHHH                                                                                     HHHH             ', '           HHCCCHH                                                                                   HHCCCHH           ', '             HHHH                                                                                     HHHH             '],
    ['              HHH                                                                                     HHH              ', '            HHCCCHH                                                                                 HHCCCHH            ', '              HHH                                                                                     HHH              '],
    ['              HHHH                                                                                   HHHH              ', '             HHCCCHH                                                                               HHCCCHH             ', '              HHHH                                                                                   HHHH              '],
    ['               HHHH                                                                                 HHHH               ', '              HHCCCHH                                                                             HHCCCHH              ', '               HHHH                                                                                 HHHH               '],
    ['                HHHH                                                                               HHHH                ', '               HHCCCHH                                                                           HHCCCHH               ', '                HHHH                                                                               HHHH                '],
    ['                 HHHH                                                                             HHHH                 ', '                HHCCCHH                                                                         HHCCCHH                ', '                 HHHH                                                                             HHHH                 '],
    ['                  HHHH                                                                           HHHH                  ', '                 HHCCCHH                                                                       HHCCCHH                 ', '                  HHHH                                                                           HHHH                  '],
    ['                   HHHHH                                                                       HHHHH                   ', '                  HHCCCHH                                                                     HHCCCHH                  ', '                   HHHHH                                                                       HHHHH                   '],
    ['                    HHHHH                                                                     HHHHH                    ', '                   HHCCCHHH                                                                 HHHCCCHH                   ', '                    HHHHH                                                                     HHHHH                    '],
    ['                     HHHHH                                                                   HHHHH                     ', '                    HHCCCCHH                                                               HHCCCCHH                    ', '                     HHHHH                                                                   HHHHH                     '],
    ['                       HHHHH                                                               HHHHH                       ', '                     HHCCCCHH                                                             HHCCCCHH                     ', '                       HHHHH                                                               HHHHH                       '],
    ['                        HHHHH                                                             HHHHH                        ', '                      HHCCCCHHH                                                         HHHCCCCHH                      ', '                        HHHHH                                                             HHHHH                        '],
    ['                         HHHHHH                                                         HHHHHH                         ', '                       HHHCCCCHHH                                                     HHHCCCCHHH                       ', '                         HHHHHH                                                         HHHHHH                         '],
    ['                           HHHHH                                                       HHHHH                           ', '                         HHCCCCCHHH                                                 HHHCCCCCHH                         ', '                           HHHHH                                                       HHHHH                           '],
    ['                            HHHHHH                                                   HHHHHH                            ', '                          HHHCCCCCHHH                                             HHHCCCCCHHH                          ', '                            HHHHHH                                                   HHHHHH                            '],
    ['                              HHHHHH                                               HHHHHH                              ', '                            HHHCCCCCHHH                                         HHHCCCCCHHH                            ', '                              HHHHHH                                               HHHHHH                              '],
    ['                                HHHHHHH                                         HHHHHHH                                ', '                              HHCCCCCCHHHH                                   HHHHCCCCCCHH                              ', '                                HHHHHHH                                         HHHHHHH                                '],
    ['                                  HHHHHHH                                     HHHHHHH                                  ', '                               HHHCCCCCCCHHHH                             HHHHCCCCCCCHHH                               ', '                                  HHHHHHH                                     HHHHHHH                                  '],
    ['                                    HHHHHHHHH                             HHHHHHHHH                                    ', '                                 HHHHCCCCCCCHHHHH                     HHHHHCCCCCCCHHHH                                 ', '                                    HHHHHHHHH                             HHHHHHHHH                                    '],
    ['                                      HHHHHHHHHHH                     HHHHHHHHHHH                                      ', '                                    HHHCCCCCCCCCHHHHHHHHHHHHHHHHHHHHHHHCCCCCCCCCHHH                                    ', '                                      HHHHHHHHHHH                     HHHHHHHHHHH                                      '],
    ['                                         HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                         ', '                                      HHHHCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCHHHH                                      ', '                                         HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                         '],
    ['                                            HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                            ', '                                         HHHHCCCCCCCCCCCCCCCCCCCCCCCCCCCCCHHHH                                         ', '                                            HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH                                            '],
    ['                                                 HHHHHHHHHHAHHHHHHHHHH                                                 ', '                                            HHHHHHCCCCCCCCCCCCCCCCCCCHHHHHH                                            ', '                                                 HHHHHHHHHHAHHHHHHHHHH                                                 '],
    ['                                                                                                                       ', '                                                 HHHHHHHHHH#HHHHHHHHHH                                                 ', '                                                                                                                       ']
  ])
    .key('A', hull, hatches)
    .key('H', hull, null)
    .key('C', chamber, null)
    .build()

  event.simpleElectricCraftingMultiBlock(
    'LHC',
    'supercollider',
    LHC,
    shape,
    event.progressBar(77, 33, 'arrow'),
    slots => slots.addSlot(28, 35),
    slots => {},
    slots => slots.addSlot(56, 35),
    slots => slots.addSlot(102, 35),
    'ev',
    'supercollider',
    true,
    false,
    false
  )
})

//#endregion

//#region Thorium RTG

MIMachineEvents.registerMachines(event => {
  const hatches = event.hatchOf(
    "item_input",
    "energy_output"
  )

  const casing = event.memberOfBlock(
    "modern_industrialization:solid_titanium_machine_casing"
  )

  const nuclear = event.memberOfBlock(
    "modern_industrialization:nuclear_casing"
  )
  const nuclearPipe = event.memberOfBlock(
    "modern_industrialization:nuclear_alloy_machine_casing_pipe"
  )

  const shape = event.layeredShape('titanium', [
    ['HHH', 'NNN', 'HHH'],
    ['HCH', 'NPN', 'HCH'],
    ['H#H', 'NNN', 'HHH']
  ])
    .key("H", casing, hatches)
    .key("N", nuclear, null)
    .key("P", nuclearPipe, null)
    .key("C", casing, null)
    .build()

  event.simpleGeneratorMultiBlock(
    "Thorium RTG",
    "thorium_rtg",
    shape,
    16384,
    builder => builder.item(
      "modern_industrialization:thorium_ingot",
      4194304
    ),
    "titanium",
    "thorium_rtg",
    true,
    false,
    false
  )
})

//#endregion