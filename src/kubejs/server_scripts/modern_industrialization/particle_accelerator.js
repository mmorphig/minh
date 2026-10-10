ServerEvents.recipes(event => {
  event.custom({
    "type": "modern_industrialization:particle_accelerator",
    "duration": 4000,
    "eu": 4096,
    "item_inputs": [
      {
        "amount": 1,
        "item": "immersiveengineering:plate_hop_graphite"
      }
    ],
    "fuid_inputs": [
      {
        "amount": 1000,
        "fluid": "kubejs:proton_plasma"
      }
    ],
    "fluid_outputs": [
      {
        "amount": 100,
        "fluid": "kubejs:muon_plasma"
      }
    ]
  }).id("kubejs:muon_particle_accelerator")
})