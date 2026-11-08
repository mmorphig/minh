ServerEvents.recipes(event => {
  const MI = "modern_industrialization:"
  function smelt(output, input) {
    event.smelting(output, input).xp(0.2)
    event.blasting(output, input).xp(0.2)
  }

  //sphalerite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}sphalerite_dust`)
    .itemOut(`${MI}zinc_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}sulfur_dust`)
  
  smelt(`${MI}zinc_ingot`, `${MI}raw_sphalerite`)

  //magnetite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}magnetite_dust`)
    .itemOut(`3x ${MI}iron_dust`)
    .fluidOut(`4000x ${MI}oxygen`)
  
  smelt(`minecraft:iron_ingot`, `${MI}raw_magnetite`)

  //galena
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}galena_dust`)
    .itemOut(`${MI}lead_dust`)
    .itemOut(`${MI}sulfur_dust`)
  
  smelt(`${MI}lead_ingot`, `${MI}raw_galena`)

  //cassiterite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}cassiterite_dust`)
    .itemOut(`${MI}tin_dust`)
    .fluidOut(`2000x ${MI}oxygen`)
  
  smelt(`${MI}tin_ingot`, `${MI}raw_cassiterite`)

  //wolframite no smelting (tungsten)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}wolframite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}manganese_dust`)
    .itemOut(`${MI}tungsten_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //spodumene no smelting (is crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}spodumene_dust`)
    .itemOut(`${MI}aluminum_dust`)
    .itemOut(`${MI}lithium_dust`)
    .itemOut(`2x ${MI}silicon_dust`)
    .fluidOut(`6000x ${MI}oxygen`)

  //pentlandite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}pentlandite_dust`)
    .itemOut(`9x ${MI}iron_dust`)
    .itemOut(`9x ${MI}nickel_dust`)
    .itemOut(`8x ${MI}sulfur_dust`)
  
  smelt(`${MI}nickel_ingot`, `${MI}raw_pentlandite`)

  //molybdenite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}molybdenite_dust`)
    .itemOut(`${MI}molybdenum_dust`)
    .itemOut(`2x ${MI}sulfur_dust`)
  
  smelt(`${MI}molybdenum_ingot`, `${MI}raw_molybdenite`)

  //arsenopyrite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}arsenopyrite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}arsenic_dust`)
    .itemOut(`${MI}sulfur_dust`)
  
  smelt(`minecraft:iron_ingot`, `${MI}raw_arsenopyrite`)

  //stibnite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}stibnite_dust`)
    .itemOut(`2x ${MI}antimony_dust`)
    .itemOut(`3x ${MI}sulfur_dust`)
  
  smelt(`${MI}antimony_ingot`, `${MI}raw_stibnite`)

  //tantalite no smelting (tantalum)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}cassiterite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}manganese_dust`)
    .itemOut(`2x ${MI}tantalum_dust`)
    .fluidOut(`6000x ${MI}oxygen`)

  //uraninite no smelting (uranium)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}uraninite_dust`)
    .itemOut(`${MI}uranium_dust`)
    .fluidOut(`2000x ${MI}oxygen`)

  //thorite no smelting (uranium/thorium)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}thorite_dust`)
    .itemOut(`${MI}thorium_dust`)
    .itemOut(`${MI}uranium_dust`)
    .itemOut(`${MI}silicon_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //sperrylite no smelting (platinum)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}sperrylite_dust`)
    .itemOut(`${MI}platinum_dust`)
    .itemOut(`${MI}arsenic_dust`)

  //chromite no smelting (chromium)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}chromite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}magnesium_dust`)
    .itemOut(`2x ${MI}chromium_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //lazurite no smelting (lapis)
  //TODO

  //kimberlite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}kimberlite_dust`)
    .itemOut(`${MI}olivine_dust`)
    .itemOut(`2x ${MI}pyroxene_dust`)
    .itemOut(`2x ${MI}phlogopite_dust`)
    .itemOut(`2x ${MI}calcite_dust`)

  //pyrite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}pyrite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`2x ${MI}sulfur_dust`)
  
  smelt(`minecraft:iron_ingot`, `${MI}raw_pyrite`)

  //chalcopyrite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}chalcopyrite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}copper_dust`)
    .itemOut(`2x ${MI}sulfur_dust`)
  
  smelt(`minecraft:copper_ingot`, `${MI}raw_chalcopyrite`)

  //bornite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}bornite_dust`)
    .itemOut(`5x ${MI}copper_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`4x ${MI}sulfur_dust`)
  
  smelt(`minecraft:copper_ingot`, `${MI}raw_bornite`)

  //tetrahedrite NEEDS FIXING TODO
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}tetrahedrite_dust`)
    .itemOut(`12x ${MI}copper_dust`)
    .itemOut(`12x ${MI}iron_dust`)
    .itemOut(`4x ${MI}antimony_dust`)
    .itemOut(`13x ${MI}sulfur_dust`)
  
  smelt(`minecraft:copper_ingot`, `${MI}raw_tetrahedrite`)

  //tennantite
  //Uses ideal formula non-ideal TODO
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}tennantite_dust`)
    .itemOut(`12x ${MI}copper_dust`)
    .itemOut(`4x ${MI}arsenic_dust`)
    .itemOut(`13x ${MI}sulfur_dust`)

  smelt(`minecraft:copper_ingot`, `${MI}raw_tennantite`)

  //stannite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}stannite_dust`)
    .itemOut(`2x ${MI}copper_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}tin_dust`)
    .itemOut(`4x ${MI}sulfur_dust`)
  
  smelt(`${MI}tin_ingot`, `${MI}raw_stannite`)

  //bournonite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}bournonite_dust`)
    .itemOut(`${MI}lead_dust`)
    .itemOut(`${MI}copper_dust`)
    .itemOut(`${MI}antimony_dust`)
    .itemOut(`3x ${MI}sulfur_dust`)
  
  smelt(`${MI}lead_ingot`, `${MI}raw_bournonite`)

  //cobaltite no smelting (cobalt)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}cobaltite_dust`)
    .itemOut(`${MI}cobalt_dust`)
    .itemOut(`${MI}arsenic_dust`)
    .itemOut(`${MI}sulfur_dust`)

  //gypsum no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}gypsum_dust`)
    .itemOut(`${MI}calcium_dust`)
    .itemOut(`${MI}sulfur_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //calcite no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}calcite_dust`)
    .itemOut(`${MI}calcium_dust`)
    .itemOut(`${MI}carbon_dust`)
    .fluidOut(`3000x ${MI}oxygen`)

  //dolomite no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}calcite_dust`)
    .itemOut(`${MI}calcium_dust`)
    .itemOut(`${MI}carbon_dust`)
    .fluidOut(`3000x ${MI}oxygen`)

  //fluorite no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}fluorite_dust`)
    .itemOut(`${MI}calcium_dust`)
    .fluidOut(`2000x ${MI}fluorine`)

  //beryl no smelting (emerald)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}fluorite_dust`)
    .itemOut(`3x ${MI}beryllium_dust`)
    .itemOut(`2x ${MI}aluminum_dust`)
    .itemOut(`6x ${MI}silicon_dust`)
    .fluidOut(`18000x ${MI}oxygen`)

  //garnet no smelting (emerald)
  // uses almandine as garnet because why not
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}garnet_dust`)
    .itemOut(`3x ${MI}iron_dust`)
    .itemOut(`2x ${MI}aluminum_dust`)
    .itemOut(`3x ${MI}silicon_dust`)
    .fluidOut(`12000x ${MI}oxygen`)

  //corundum no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}corundum_dust`)
    .itemOut(`2x ${MI}aluminum_dust`)
    .fluidOut(`3000x ${MI}oxygen`)

  //ilmenite no smelting (titanium)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}ilmenite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}titanium_dust`)
    .fluidOut(`3000x ${MI}oxygen`)

  //xenotime no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}xenotime_dust`)
    .itemOut(`${MI}yttrium_dust`)
    .itemOut(`${MI}phosphorus_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //rutile no smelting (titanium)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}rutile_dust`)
    .itemOut(`${MI}titanium_dust`)
    .fluidOut(`2000x ${MI}oxygen`)

  //epidote no smelting (emerald)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}epidote_dust`)
    .itemOut(`2x ${MI}calcium_dust`)
    .itemOut(`3x ${MI}aluminum_dust`)
    .itemOut(`1x ${MI}iron_dust`)
    .itemOut(`3x ${MI}silicon_dust`)
    .fluidOut(`13000x ${MI}oxygen`)
    .fluidOut(`1000x ${MI}hydrogen`)

  //scheelite no smelting (tungsten)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}scheelite_dust`)
    .itemOut(`${MI}calcium_dust`)
    .itemOut(`${MI}tungsten_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //malachite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}malachite_dust`)
    .itemOut(`2x ${MI}copper_dust`)
    .itemOut(`${MI}carbon_dust`)
    .fluidOut(`5000x ${MI}oxygen`)
    .fluidOut(`2000x ${MI}hydrogen`)
  
  smelt(`minecraft:copper_ingot`, `${MI}raw_malachite`)

  //azurite no smelting (lapis)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}azurite_dust`)
    .itemOut(`3x ${MI}copper_dust`)
    .itemOut(`2x ${MI}carbon_dust`)
    .fluidOut(`8000x ${MI}oxygen`)
    .fluidOut(`2000x ${MI}hydrogen`)

  //cerussite no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}cerussite_dust`)
    .itemOut(`${MI}lead_dust`)
    .itemOut(`${MI}carbon_dust`)
    .fluidOut(`3000x ${MI}oxygen`)

  //pyrrhotite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}pyrrhotite_dust`)
    .itemOut(`${MI}iron_dust`)
    .itemOut(`${MI}sulfur_dust`)
  
  smelt(`minecraft:iron_ingot`, `${MI}raw_pyrrhotite`)

  //spessartine no smelting (emerald)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}spessartine_dust`)
    .itemOut(`3x ${MI}magnesium_dust`)
    .itemOut(`2x ${MI}aluminum_dust`)
    .itemOut(`3x ${MI}silicon_dust`)
    .fluidOut(`12000x ${MI}oxygen`)

  //rhodochrosite no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}rhodochrosite_dust`)
    .itemOut(`${MI}manganese_dust`)
    .itemOut(`${MI}carbon_dust`)
    .fluidOut(`3000x ${MI}oxygen`)

  //manganesite
  //??

  //allanite
  //TODO

  //hematite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}hematite_dust`)
    .itemOut(`${MI}lead_dust`)
    .itemOut(`${MI}carbon_dust`)
    .fluidOut(`3000x ${MI}oxygen`)
  
  smelt(`minecraft:iron_ingot`, `${MI}raw_hematite`)

  //bismuthinite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}bismuthinite_dust`)
    .itemOut(`2x ${MI}bismuth_dust`)
    .itemOut(`3x ${MI}sulfur_dust`)
  
  smelt(`${MI}bismuth_ingot`, `${MI}raw_bismuthinite`)

  //sapphire no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}corundum_dust`)
    .itemOut(`2x ${MI}aluminum_dust`)
    .fluidOut(`3000x ${MI}oxygen`)

  //apatite no smelting (crystal)
  //TODO

  //peridot no smelting (emerald)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}peridot_dust`)
    .itemOut(`2x ${MI}magnesium_dust`)
    .itemOut(`2x ${MI}iron_dust`)
    .itemOut(`${MI}silicon_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //vanadinite
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}vanadinite_dust`)
    .itemOut(`5x ${MI}lead_dust`)
    .itemOut(`3x ${MI}vanadium_dust`)
    .fluidOut(`1000x ${MI}chlorine`)
    .fluidOut(`12000x ${MI}oxygen`)

  smelt(`${MI}lead_ingot`, `${MI}raw_vanadinite`)

  //olivine no smelting (emerald)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}olivine_dust`)
    .itemOut(`2x ${MI}magnesium_dust`)
    .itemOut(`2x ${MI}iron_dust`)
    .itemOut(`2x ${MI}manganese_dust`)
    .itemOut(`${MI}silicon_dust`)
    .fluidOut(`4000x ${MI}oxygen`)

  //pyroxene no smelting (crystal)
  event.recipes.modern_industrialization.centrifuge(4, 300)
    .itemIn(`${MI}pyroxene_dust`)
    .itemOut(`${MI}sodium_dust`) // can be: calcium, sodium, iron or magnesium
    .itemOut(`${MI}chromium_dust`) // can be: chromium, aluminum, magnesium, cobalt or manganese
    .itemOut(`2x ${MI}silicon_dust`)
    .itemOut(`2x ${MI}aluminum_dust`)
    .fluidOut(`6000x ${MI}oxygen`)
  
  //phlogopite no smelting (crystal)
  //TODO
})