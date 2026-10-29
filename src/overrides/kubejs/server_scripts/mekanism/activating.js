ServerEvents.recipes(event => {
  event.custom({
    "type": "mekanism:activating",
    "input": {
      "amount": 10,
      "chemical": "kubejs:antineutron"
    },
    "output": {
      "amount": 1,
      "id": "kubejs:energy"
    }
  })
})