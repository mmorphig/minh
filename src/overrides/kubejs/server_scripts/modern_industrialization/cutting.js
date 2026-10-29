ServerEvents.recipes(event => {
  event.remove({ output: "modern_industrialization:silicon_wafer" })
  event.custom({
    "type": "modern_industrialization:cutting_machine",
    "eu": 16,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:monocrystalline_silicon",
      "amount": 1
    },
    "fluid_inputs": {
      "fluid": "modern_industrialization:lubricant",
      "amount": 500
    },
    "item_outputs": {
      "item": "modern_industrialization:silicon_wafer",
      "amount": 32
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:silicon_wafer_cutting")

  event.custom({
    "type": "modern_industrialization:cutting_machine",
    "duration": 800,
    "eu": 2,
    "fluid_inputs": [
      {
        "amount": 1,
        "fluid": "modern_industrialization:lubricant"
      }
    ],
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:ingots/uranium_238"
      }
    ],
    "item_outputs": [
      {
        "amount": 2,
        "item": "modern_industrialization:breeder_uranium_238_rod"
      }
    ]
  })
})