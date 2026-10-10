ServerEvents.recipes(event => {
  event.custom({
    "type": "modern_industrialization:distillation_tower",
    "duration": 200,
    "eu": 30,
    "fluid_inputs": [
      {
        "amount": 1000,
        "fluid": "kubejs:btx"
      }
    ],
    "fluid_outputs": [
      {
        "amount": 100,
        "fluid": "modern_industrialization:benzene"
      },
      {
        "amount": 400,
        "fluid": "modern_industrialization:toluene"
      },
      {
        "amount": 500,
        "fluid": "kubejs:xylene"
      }
    ]
  }).id("kubejs:btx_distillation")
})