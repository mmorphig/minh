ServerEvents.recipes(event => {
  event.remove({ output: 'createchemistry:calcium_dust' })

  event.remove({ input: 'minecraft:bone', type: 'create:crushing' })
  /*event.recipes.createCrushing(
    [
      CreateItem.of('2x minecraft:bonemeal'),
      CreateItem.of('minecraft:bonemeal', 0.5)
      CreateItem.of('createchemistry:calcium_dust')
    ],
    [
      Item.of("minecraft:bone")
    ]
  )*/

  event.recipes.createCrushing(
    [
      CreateItem.of('northstar:volcanic_ash')
    ],
    [
      Item.of("northstar:volcanic_rock", 1)
    ]
  )
})
