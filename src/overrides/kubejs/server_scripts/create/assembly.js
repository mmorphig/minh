ServerEvents.recipes(event => {
  event.remove({ id: 'create:sequenced_assembly/precision_mechanism'})
  const precisionTransitional = 'create:incomplete_precision_mechanism'
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('create:precision_mechanism', 1),
    ],
    'create:golden_sheet',
    [
      event.recipes.create.deploying(precisionTransitional, [precisionTransitional, Ingredient.of('#c:wires/electrum')]),
      event.recipes.create.deploying(precisionTransitional, [precisionTransitional, 'kubejs:precision_assembly']),
      event.recipes.create.deploying(precisionTransitional, [precisionTransitional, 'minecraft:glass_pane']),
      event.recipes.create.deploying(precisionTransitional, [precisionTransitional, 'create:brass_nugget'])
    ]
  )
  .transitionalItem(precisionTransitional)
  .loops(4)

  const assemblyTransitional = 'kubejs:incomplete_precision_assembly'
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:precision_assembly', 1),
    ],
    'create:shaft',
    [
      event.recipes.create.deploying(assemblyTransitional, [assemblyTransitional, 'create:brass_nugget']),
      event.recipes.create.deploying(assemblyTransitional, [assemblyTransitional, 'create:cogwheel']),
      event.recipes.create.deploying(assemblyTransitional, [assemblyTransitional, 'create:large_cogwheel'])
    ]
  )
  .transitionalItem(assemblyTransitional)
  .loops(1)

  event.remove({ id: 'create_connected:sequenced_assembly/control_chip'})
  const ccTransitional = 'create_connected:incomplete_control_chip'
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('create_connected:control_chip', 1),
    ],
    '#c:plates/iron',
    [
      event.recipes.create.deploying(ccTransitional, [ccTransitional, 'create:electron_tube']),
      event.recipes.create.deploying(ccTransitional, [ccTransitional, 'createaddition:electrum_wire']),
      event.recipes.create.pressing(ccTransitional, ccTransitional)
    ]
  )
  .transitionalItem(ccTransitional)
  .loops(3)

  event.remove({ id: 'create:sequenced_assembly/sturdy_sheet'})
  const sturdyTransitional = 'create:unprocessed_obsidian_sheet'
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('create:sturdy_sheet', 1),
    ],
    '#c:dusts/obsidian',
    [
      event.recipes.create.filling(sturdyTransitional, [sturdyTransitional, Fluid.of('minecraft:lava', 250)]),
      event.recipes.create.deploying(sturdyTransitional, [sturdyTransitional, Ingredient.of('#c:dusts/steel')]),
      event.recipes.create.pressing(sturdyTransitional, sturdyTransitional),
      event.recipes.create.pressing(sturdyTransitional, sturdyTransitional)
    ]
  )
  .transitionalItem(sturdyTransitional)
  .loops(2)

  const transScrap = "kubejs:scrap_trans"
  event.recipes.create.sequenced_assembly(
    [
      Item.of("mekmm:scrap"),
      CreateItem.of("modern_industrialization:titanium_dust", 0.01),
      CreateItem.of("modern_industrialization:aluminum_dust", 0.01),
      CreateItem.of("modern_industrialization:silver_dust", 0.01),
      CreateItem.of("modern_industrialization:gold_dust", 0.02),
      CreateItem.of("modern_industrialization:antimony_dust", 0.02),

      CreateItem.of("modern_industrialization:nickel_dust", 0.04),
      CreateItem.of("modern_industrialization:tin_dust", 0.04),
      CreateItem.of("modern_industrialization:lead_dust", 0.04),
      CreateItem.of("modern_industrialization:iron_dust", 0.05),
      CreateItem.of("modern_industrialization:copper_dust", 0.05),
      CreateItem.of("modern_industrialization:coal_dust", 0.05),

      CreateItem.of("minecraft:bone", 0.05),
      CreateItem.of("minecraft:redstone", 0.05),
      CreateItem.of("minecraft:clay_ball", 0.05),
      CreateItem.of("minecraft:dirt", 0.06),
      CreateItem.of("minecraft:grass_block", 0.06),
      CreateItem.of("minecraft:paper", 0.06),
    ],
    'mekmm:scrap_box',
    [
      event.recipes.create.pressing(transScrap, transScrap)
    ]
  ).transitionalItem(transScrap).loops(1)
})