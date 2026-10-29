ServerEvents.recipes(event => {
  function replaceIn(input, output) {
    event.replaceInput({}, Ingredient.of(input), output)
  }
  function replaceOut(input, output) {
    event.replaceOutput({}, input, output)
  }

  function replaceFull(input, output) {
    replaceIn(input, output)
    replaceOut(input, output)
  }

  // sulfur
  event.remove({ id: "mekanism:sulfur_dye" })
  replaceFull('#c:dusts/sulfur', 'modern_industrialization:sulfur_dust')
  //event.replaceOutput({ output: 'createchemistry:sulfur_dust' },
  //  'createchemistry:sulfur_dust', 'modern_industrialization:sulfur_dust'
  //)
  //event.replaceOutput({ output: 'mekanism:dust_sulfur' },
  //  'mekanism:dust_sulfur', 'modern_industrialization:sulfur_dust'
  //)
  //event.replaceInput({ input: Ingredient.of("#c:dusts/sulfur") },
  //  Ingredient.of("#c:dusts/sulfur"), 'modern_industrialization:sulfur_dust'
  //)
  
  // silicon
  event.remove({ output: "ae2:silicon" })
  event.remove({ output: "extendedae:quartz_blend" })
  event.replaceInput({ input: "modern_industrialization:silicon_ingot" },
    "modern_industrialization:silicon_ingot", "ae2:silicon"
  )
  event.replaceOutput({ output: "modern_industrialization:silicon_ingot" }, 
    "modern_industrialization:silicon_ingot", "ae2:silicon"
  )

  /*event.replaceOutput({ output: "oritech:silicon_block" }, 
    "oritech:silicon_block", "extendedae:silicon_block"
  )*/

  // quartz
  replaceFull("#c:dusts/quartz", "modern_industrialization:quartz_dust")
  //event.replaceOutput({ id: "mekanism:processing/quartz/to_dust" }, 
  //  "mekanism:dust_quartz", "modern_industrialization:quartz_dust"
  //)

  // titanium
  event.replaceOutput({ output: 'northstar:titanium_sheet' },
    'northstar:titanium_sheet', 'modern_industrialization:titanium_plate'
  )
  event.replaceInput({ output: 'northstar:titanium_sheet' },
    'northstar:titanium_sheet', 'modern_industrialization:titanium_plate'
  )
  event.replaceInput({ input: 'northstar:titanium_ingot' }, 
    'northstar:titanium_ingot', "modern_industrialization:titanium_ingot"
  )
  event.remove({ output: 'northstar:titanium_ingot'})
  event.remove({ output: 'northstar:titanium_sheet'})
  
  // circuits
  event.replaceInput({ input: 'northstar:circuit' }, 
    'northstar:circuit', "modern_industrialization:digital_circuit"
  )

  event.replaceInput({ input: 'northstar:advanced_circuit' }, 
    'northstar:advanced_circuit', "modern_industrialization:processing_unit"
  )
  event.remove({ output: 'northstar:circuit' })
  event.remove({ output: 'northstar:advanced_circuit' })

  // nitric acid

  //Doesn't work?
  event.replaceInput({ input: Fluid.of('createchemistry:nitric_acid') }, 
    Fluid.of('createchemistry:nitric_acid'), Fluid.of("mekanismelements:nitric_acid")
  )
  event.replaceOutput({ output: Fluid.of('createchemistry:nitric_acid') }, 
    Fluid.of('createchemistry:nitric_acid'), Fluid.of("mekanismelements:nitric_acid")
  )

  //hydrochloric acid
  event.replaceInput({ input: Fluid.of('modern_industrialization:hydrochloric_acid') }, 
    Fluid.of('modern_industrialization:hydrochloric_acid'), Fluid.of("mekanism:hydrogen_chloride")
  )

  //raw titanium
  event.replaceOutput({ output: 'modern_industrialization:raw_titanium' }, 
    'modern_industrialization:raw_titanium', 'northstar:raw_titanium_ore'
  )

  // MI materials
  //const MI_ingots = ["silver, steel"]
  //MI_ingots.forEach(mat => {
  //  replaceFull(`#c:ingots/${mat}`, `modern_industrialization:${mat}_ingot`)
  //})

  //copper nuggets
  replaceFull("#c:nuggets/copper", 'modern_industrialization:copper_nugget')
  replaceFull("pneumaticcraft:copper_nugget", 'modern_industrialization:copper_nugget')
  replaceFull("create:copper_nugget", 'modern_industrialization:copper_nugget')
  replaceFull("immersiveengineering:nugget_copper", 'modern_industrialization:copper_nugget')
  replaceFull("electrodynamics:nuggetcopper", 'modern_industrialization:copper_nugget')

  //capacitor
  replaceIn('pneumaticcraft:capacitor', 'modern_industrialization:capacitor')
  //transistor
  replaceIn('pneumaticcraft:transistor', 'modern_industrialization:transistor')

  //beryllium
  replaceFull('mekanismelements:ingot_beryllium', 'modern_industrialization:beryllium_ingot')

  //steel
  replaceFull('mekanism:ingot_steel', 'modern_industrialization:steel_ingot')
})