ServerEvents.recipes(event => {
  event.custom({
    "type": "ars_nouveau:imbuement",
    "input": {
      "tag": "minecraft:saplings"
    },
    "output": {
      "count": 1,
      "id": "ars_nouveau:blue_archwood_sapling"
    },
    "pedestalItems": [
      {
        "item": "ars_nouveau:source_gem"
      },
      {
        "item": "ars_nouveau:source_gem"
      },
      {
        "item": "ars_nouveau:source_gem"
      },
      {
        "item": "ars_nouveau:source_gem"
      }
    ],
    "source": 500
  })

  event.remove({ id: "ars_nouveau:warp_scroll"})
  event.custom({
    "type": "ars_nouveau:imbuement",
    "input": {
      "item": "ars_nouveau:blank_parchment"
    },
    "output": {
      "count": 1,
      "id": "ars_nouveau:warp_scroll"
    },
    "pedestalItems": [
      {
        "item": "mekanism:teleportation_core"
      },
      {
        "item": "mekanism:teleportation_core"
      },
      {
        "item": "mekanism:teleportation_core"
      },
      {
        "item": "mekanism:teleportation_core"
      }
    ],
    "source": 2000
  })
})