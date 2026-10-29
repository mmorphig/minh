ServerEvents.recipes(event => {
  event.custom({
    "type": "advanced_ae:reaction",
    "input_energy": 100000,
    "input_fluid": {
      "amount": 8000,
      "ingredient": {
        "fluid": "minecraft:water"
      }
    },
    "input_items": [
      {
        "amount": 32,
        "ingredient": {
          "item": "create:wheat_flour"
        }
      }
    ],
    "output": {
      "#": 64,
      "#t": "ae2:i",
      "id": "create:dough"
    }
  })

  event.custom({
    "type": "advanced_ae:reaction",
    "input_energy": 100000,
    "input_fluid": {
      "amount": 8000,
      "ingredient": {
        "fluid": "minecraft:lava"
      }
    },
    "input_items": [
      {
        "amount": 32,
        "ingredient": {
          "tag": "c:dusts/steel"
        }
      },
      {
        "amount": 16,
        "ingredient": {
          "tag": "c:dusts/obsidian"
        }
      }
    ],
    "output": {
      "#": 16,
      "#t": "ae2:i",
      "id": "create:sturdy_sheet"
    }
  })
})