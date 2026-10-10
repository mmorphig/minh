ServerEvents.recipes(event => {
  event.remove({ type: "modern_industrialization:electrolyzer", intput: "minecraft:water" })
  event.custom({
    "type": "modern_industrialization:electrolyzer",
    "duration": 100,
    "eu": 8,
    "fluid_inputs": [
      {
        "amount": 1000,
        "fluid": "minecraft:water"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "kubejs:slag"
      }
    ],
    "fluid_outputs": [
      {
        "amount": 2000,
        "fluid": "modern_industrialization:hydrogen"
      },
      {
        "amount": 1000,
        "fluid": "modern_industrialization:oxygen"
      }
    ]
  }).id("kubejs:water_electrolysis")

  event.custom({
    "type": "modern_industrialization:electrolyzer",
    "duration": 100,
    "eu": 8,
    "fluid_inputs": [
      {
        "amount": 1000,
        "fluid": "northstar:brine"
      }
    ],
    "fluid_outputs": [
      {
        "amount": 1000,
        "fluid": "modern_industrialization:sodium_hydroxide"
      },
      {
        "amount": 500,
        "fluid": "modern_industrialization:hydrogen"
      },
      {
        "amount": 500,
        "fluid": "modern_industrialization:chlorine"
      }
    ]
  }).id("kubejs:brine_electrolysis")
})
