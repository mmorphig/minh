ServerEvents.recipes(event => {
  event.remove({ type: "modern_industrialization:oil_drilling_rig" })

  event.custom({
    "type": "modern_industrialization:oil_drilling_rig",
    "eu": 8,
    "duration": 200,
    "item_inputs": {
      "item": "modern_industrialization:aluminum_drill",
      "amount": 1,
      "probability": 0.04
    },
    "fluid_outputs": {
      "fluid": "modern_industrialization:crude_oil",
      "amount": 500
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("modern_industrialization:oil/crude_oil")

  event.custom({
    "type": "modern_industrialization:oil_drilling_rig",
    "eu": 32,
    "duration": 200,
    "item_inputs": {
      "item": "modern_industrialization:stainless_steel_drill",
      "amount": 1,
      "probability": 0.02
    },
    "fluid_outputs": {
      "fluid": "modern_industrialization:shale_oil",
      "amount": 4000
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("modern_industrialization:oil/shale_oil")

  event.custom({
    "type": "modern_industrialization:oil_drilling_rig",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
      "item": "modern_industrialization:copper_drill",
      "amount": 1,
      "probability": 0.02
    },
    "fluid_outputs": {
      "fluid": "minecraft:water",
      "amount": 16000
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("modern_industrialization:oil/water")

  event.custom({
    "type": "modern_industrialization:oil_drilling_rig",
    "eu": 8,
    "duration": 100,
    "item_inputs": {
      "item": "modern_industrialization:gold_drill",
      "amount": 1,
      "probability": 0.02
    },
    "fluid_outputs": {
      "fluid": "minecraft:lava",
      "amount": 8000
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:the_nether"
      }
    ]
  }).id("kubejs:lava_drilling")

  event.custom({
    "type": "modern_industrialization:oil_drilling_rig",
    "eu": 256,
    "duration": 200,
    "item_inputs": {
      "item": "modern_industrialization:titanium_drill",
      "amount": 4,
      "probability": 0
    },
    "fluid_outputs": {
      "fluid": "modern_industrialization:crude_oil",
      "amount": 500
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("kubejs:titanium_drill_oil")
  event.custom({
    "type": "modern_industrialization:oil_drilling_rig",
    "eu": 256,
    "duration": 200,
    "item_inputs": {
      "item": "modern_industrialization:titanium_drill",
      "amount": 4,
      "probability": 0
    },
    "fluid_outputs": {
      "fluid": "modern_industrialization:shale_oil",
      "amount": 500
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:dimension",
        "dimension": "minecraft:overworld"
      }
    ]
  }).id("kubejs:titanium_drill_shale_oil")
})