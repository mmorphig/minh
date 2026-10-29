let KAMI_ASSEMBLER

MIMachineEvents.registerRecipeTypes(event => {
  KAMI_ASSEMBLER = event.register('kami_assembler')
    .withItemInputs()
    .withItemOutputs()
})

MIMachineEvents.registerMachines(event => {
  event.craftingSingleBlock(
    'Kami Assembler',
    'kami_assembler',
    KAMI_ASSEMBLER,
    ['electric'],

    // GUI
    186,
    event.progressBar(105, 45, 'circuit'),
    event.efficiencyBar(48, 86),
    event.energyBar(14, 44),

    // Slots
    9,  // item inputs
    1,  // item outputs
    0,  // fluid inputs
    0,  // fluid outputs
    0,  // bucket capacity

    items => {
      items.addSlots(42, 27, 3, 3)
      items.addSlot(139, 45)
    },

    fluids => {},

    // Model overlays
    true,
    true,
    false
  )
})