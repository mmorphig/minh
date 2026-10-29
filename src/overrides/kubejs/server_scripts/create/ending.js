ServerEvents.recipes(event => {
  event.custom({
    type: "create_dragons_plus:ending",
    ingredients: [
      {
      item: "minecraft:magma_cream"
      }
    ],
    results: [
      {
      id: "minecraft:ender_pearl"
      }
    ]
  })
})