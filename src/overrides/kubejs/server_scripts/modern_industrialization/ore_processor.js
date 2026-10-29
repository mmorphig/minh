ServerEvents.recipes(event => {
  function ore_processor(eu, time, input, inputCount, itemOutput, outputCount) {
    let outputs = []

    while (outputCount > 64) {
      outputs.push({
        "item": itemOutput,
        "amount": 64
      })
      outputCount -= 64
    }
    if (outputCount > 0) {
      outputs.push({
        "item": itemOutput,
        "amount": outputCount
      })
    }

    event.custom({
      "type": "modern_industrialization:ore_processor",
      "duration": time,
      "eu": eu,
      "item_inputs": {
        "tag": input,
        "amount": inputCount
      },
      "item_outputs": outputs
    })
  }
 
  function mi_dust(dust) { return `modern_industrialization:${dust}_dust` }

  // vanilla
  ore_processor(128, 40, "c:ores/coal", 32, `${mi_dust("coal")}`, 192 )
  ore_processor(128, 40, "c:ores/iron", 32, `${mi_dust("iron")}`, 192 )
  ore_processor(128, 40, "c:ores/copper", 32, `${mi_dust("copper")}`, 512 )
  ore_processor(128, 40, "c:ores/gold", 32, `${mi_dust("gold")}`, 192 )
  ore_processor(128, 40, "c:ores/redstone", 32, `minecraft:redstone`, 384 )
  ore_processor(128, 80, "c:ores/emerald", 32, `${mi_dust("emerald")}`, 192 )
  ore_processor(128, 40, "c:ores/lapis", 16, `${mi_dust("lapis")}`, 512 ) // wow that's a lot of lapis
  ore_processor(128, 80, "c:ores/diamond", 32, `${mi_dust("diamond")}`, 192 )
  ore_processor(256, 80, "c:ores/netherite_scrap", 32, `mekanism:dirty_netherite_scrap`, 96 )

  // create
  ore_processor(128, 40, "c:ores/zinc", 32, `create:crushed_raw_zinc`, 192 )

  // modern industrialization
  ore_processor(128, 40, "c:ores/antimony", 32, `${mi_dust("antimony")}`, 192 )
  ore_processor(128, 40, "c:ores/bauxite", 32, `${mi_dust("bauxite")}`, 192 )
  ore_processor(128, 40, "c:ores/lead", 32, `${mi_dust("lead")}`, 192 )
  ore_processor(128, 40, "c:ores/lignite_coal", 32, `${mi_dust("lignite_coal")}`, 192 )
  ore_processor(128, 40, "c:ores/monazite", 32, `${mi_dust("monazite")}`, 192 )
  ore_processor(128, 40, "c:ores/nickel", 32, `modern_industrialization:raw_platinum`, 96 )
  ore_processor(128, 40, "c:ores/quartz", 32, `${mi_dust("quartz")}`, 256 )
  ore_processor(128, 40, "c:ores/salt", 32, `${mi_dust("salt")}`, 192 )
  ore_processor(128, 40, "c:ores/tin", 32, `${mi_dust("tin")}`, 192 )
  ore_processor(256, 80, "c:ores/titanium", 32, `northstar:raw_titanium_ore`, 96 )
  ore_processor(256, 80, "c:ores/tungsten", 32, `${mi_dust("tungsten")}`, 192 )
  ore_processor(128, 40, "c:ores/uranium", 32, `${mi_dust("uranium")}`, 192 )
  ore_processor(256, 80, "c:ores/platinum", 32, `modern_industrialization:raw_platinum`, 96 )

  // mekanism
  ore_processor(128, 80, "c:ores/osmium", 32, `mekanism:dust_osmium`, 192 )

  // blood and deepslate
  ore_processor(128, 40, "c:ores/molybdenum", 32, `blood_and_deepslate:raw_molybdenum`, 192 )
})