ServerEvents.recipes(event => {
  event.remove({ output: 'megacells:accumulation_processor', type: 'ae2:inscriber' })
  event.remove({ output: 'megacells:accumulation_processor', type: 'mekmm:pressing' })
})