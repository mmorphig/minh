ServerEvents.recipes(event => {
  event.remove({ mod: "electrodynamics", type: "minecraft:blasting" })
  event.remove({ mod: "electrodynamics", type: "minecraft:smelting" })

  event.remove({ mod: "immersiveengineering", type: "minecraft:smelting" })
  event.remove({ mod: "immersiveengineering", type: "minecraft:blasting" })
  event.remove({ mod: "moremekanismprocessing", type: "minecraft:smelting" })
  event.remove({ mod: "moremekanismprocessing", type: "minecraft:blasting" })

  event.remove({ output: "modern_industrialization:iridium_ingot", type: "minecraft:smelting" })
  event.remove({ output: "modern_industrialization:iridium_ingot", type: "minecraft:blasting" })
  event.remove({ output: "modern_industrialization:iridium_nugget", type: "minecraft:smelting" })
  event.remove({ output: "modern_industrialization:iridium_nugget", type: "minecraft:blasting" })

  event.remove({ id: "moremekanismprocessing:processing/silver/ingot/from_dust_smelting"})

  event.smelting('pointblank:gunmetal_ingot', 'pointblank:gunmetal_mesh').xp(0.15)
  event.blasting('pointblank:gunmetal_ingot', 'pointblank:gunmetal_mesh').xp(0.2)
})