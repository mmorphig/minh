ServerEvents.recipes(event => {
  function addVanillaTree(tree) {
    event.custom({
      "type": "immersiveengineering:cloche",
      "input": {
        "item": `minecraft:${tree}_sapling`
      },
      "render": {
        "type": "immersiveengineering:generic",
        "block": `minecraft:${tree}_sapling`
      },
      "results": [
        {
          "count": 4,
          "id": `minecraft:${tree}_log`
        },
        {
          "chance": 0.05,
          "output": {
            "count": 1,
            "id": "minecraft:stick"
          }
        }
      ],
      "soil": {
        "item": "minecraft:dirt"
      },
      "time": 1500
    })

    event.custom({
      "type": "immersiveengineering:cloche",
      "input": {
        "item": `minecraft:${tree}_sapling`
      },
      "render": {
        "type": "immersiveengineering:generic",
        "block": `minecraft:${tree}_sapling`
      },
      "results": [
        {
          "count": 4,
          "id": `minecraft:${tree}_log`
        },
        {
          "chance": 0.05,
          "output": {
            "count": 1,
            "id": "minecraft:stick"
          }
        }
      ],
      "soil": {
        "item": "farmersdelight:rich_soil"
      },
      "time": 1200
    })
  }

  const trees = ["cherry", "oak", "dark_oak", "spruce", "jungle", "acacia", "birch"]

  trees.forEach(tree => {
    addVanillaTree(tree)
  });

  function addCropCloche(time, input, block, outputs, render) {
    event.custom({
      "type": "immersiveengineering:cloche",
      "input": {
        "item": input
      },
      "render": {
        "type": "immersiveengineering:" + render,
        "block": block
      },
      "results": outputs,
      "soil": {
        "item": "minecraft:dirt"
      },
      "time": time
    })

    event.custom({
      "type": "immersiveengineering:cloche",
      "input": {
        "item": input
      },
      "render": {
        "type": "immersiveengineering:" + render,
        "block": block
      },
      "results": outputs,
      "soil": {
        "item": "farmersdelight:rich_soil"
      },
      "time": time * 0.75
    })
  }

  addCropCloche(500, "rusticdelight:cotton_seeds", "rusticdelight:cotton", [ { id: "rusticdelight:cotton_boll", count: 3 }, { id: "rusticdelight:cotton_seeds", chance: 0.1 } ], "crop")
  addCropCloche(500, "rusticdelight:coffee_beans", "rusticdelight:coffee", [ { id: "rusticdelight:coffee_beans", count: 4 }, { id: "rusticdelight:coffee_beans", chance: 0.25 } ], "generic")
})