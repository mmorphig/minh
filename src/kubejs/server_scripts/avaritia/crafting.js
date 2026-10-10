ServerEvents.recipes(event => {
  event.remove({ id: 'avaritia:sculk_crafting_table' })
  event.remove({ id: 'avaritia:nether_crafting_table' })
  event.remove({ id: 'avaritia:end_crafting_table' })
  event.remove({ id: 'avaritia:extreme_crafting_table' })
  
  event.remove({ id: 'minecraft:end_portal_frame' })

  event.remove({ id:'avaritia:netherite_ingot_too' })

  // All the records are the only shaped with fragments
  event.remove({ type: 'avaritia:shaped_table', input: "avaritia:record_fragment" }) 

  event.forEachRecipe({ type: 'avaritia:shaped_table' }, recipe => {
    let json = recipe.json
    
    //event.remove({ id: recipe.getId() })
    
    event.custom({
      type: 'extendedcrafting:shaped_table',
      tier: json.get("tier"),
      pattern: json.get("pattern"),
      key: json.get("key"),
      result: json.get("result")
    })
  })

  event.forEachRecipe({ type: 'avaritia:shapeless_table' }, recipe => {
    let json = recipe.json
    
    //event.remove({ id: recipe.getId() })
    
    event.custom({
      type: 'extendedcrafting:shapeless_table',
      tier: json.get("tier"),
      ingredients: json.get("ingredients"),
      result: json.get("result")
    })
  })
})