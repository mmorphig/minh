ServerEvents.recipes(event => {

  event.recipes.create.mixing(
    [
      Item.of('minecraft:netherrack', 1)
    ],
    [
      Item.of('minecraft:magma_block', 1),
      Item.of('create:cinder_flour', 1)
    ]
  )

  event.recipes.create.mixing(
    [
      Fluid.of('create_dragons_plus:dragon_breath', 1000)
    ],
    [
      Item.of('minecraft:end_crystal', 16),
      Item.of('minecraft:nether_star', 1)
    ]
  ).superheated()

  event.recipes.create.mixing(
    [
      Fluid.of('create_enchantment_industry:infused_dragon_breath', 500)
    ],
    [
      Fluid.of('create_dragons_plus:dragon_breath', 500),
      Fluid.of('create_enchantment_industry:experience', 552)
    ]
  )

  // Alloys

  // andesite alloy
  event.remove({ id: 'create:mixing/andesite_alloy'})
  event.recipes.create.mixing(
    [
      Item.of('create:andesite_alloy', 1)
    ],
    [
      Item.of('minecraft:andesite', 2),
      Item.of('minecraft:iron_nugget', 2)
    ]
  ).heated()

  event.remove({ id: 'create:mixing/andesite_alloy_from_zinc'})
  event.recipes.create.mixing(
    [
      Item.of('create:andesite_alloy', 1)
    ],
    [
      Item.of('minecraft:andesite', 1),
      Item.of('create:zinc_nugget', 1)
    ]
  ).heated()

  // brass
  event.remove({ id: 'create:mixing/brass_ingot' })

  // bronze
  event.recipes.create.mixing(
    [
      Fluid.of('createmetalwork:molten_bronze', 1152)
    ],
    [
      Item.of('create:crushed_raw_copper', 3),
      Item.of('create:crushed_raw_tin', 1)
    ]
  ).superheated()

  event.recipes.create.mixing(
    [
      Fluid.of('createmetalwork:molten_bronze', 576)
    ],
    [
      Fluid.of('createmetalwork:molten_copper', 144),
      Fluid.of('createmetalwork:molten_tin', 48)
    ]
  ).superheated()
})