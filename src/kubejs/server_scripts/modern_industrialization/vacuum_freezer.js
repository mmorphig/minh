ServerEvents.recipes(event => {
  event.remove({ id: 'modern_industrialization:materials/vacuum_freezer/liquid_air' })

  event.custom({
    "type": "modern_industrialization:vacuum_freezer",
    "duration": 10,
    "eu": 16,
    "fluid_inputs": [
      {
        "amount": 27,
        "fluid": "create_enchantment_industry:experience"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:experience_block"
      }
    ]
  }).id("kubejs:experience_freezing")

  event.custom({
    "type": "modern_industrialization:vacuum_freezer",
    "duration": 100,
    "eu": 16,
    "fluid_inputs": [
      {
        "amount": 1000,
        "fluid": "pneumaticcraft:plastic"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "pneumaticcraft:plastic"
      }
    ]
  }).id("kubejs:plastic_freezing")
})