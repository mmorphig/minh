ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "count": 1,
      "tag": "kubejs:oxidized_copper_blocks"
    },
    "output": {
      "count": 18,
      "id": "create_redstone_additions:verdigris"
    }
  })

  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "count": 1,
      "tag": "kubejs:weathered_copper_blocks"
    },
    "output": {
      "count": 12,
      "id": "create_redstone_additions:verdigris"
    }
  })

  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "count": 1,
      "tag": "kubejs:exposed_copper_blocks"
    },
    "output": {
      "count": 6,
      "id": "create_redstone_additions:verdigris"
    }
  })
})