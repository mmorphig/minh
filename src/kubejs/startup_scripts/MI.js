// Java version in MI's source
// public CableTier register(String name, String shortEnglishName, String longEnglishName, long eu, ResourceLocation itemKey) {
// public static CableTier LV = new CableTier("lv", "LV", "Low Voltage", 32, null);
// public static CableTier MV = new CableTier("mv", "MV", "Medium Voltage", 32*4, MIBlockKeys.ADVANCED_MACHINE_HULL);

// Modified a bit from GT's tiers, to have more consistency
MIRegistrationEvents.registerCableTiers(event => {
  event.register("inv", "InV", "Insane Voltage",  8192*4, 'modern_industrialization:insane_machine_hull')
  event.register("luv", "LuV", "Ludicrous Voltage", 8192*4*4, 'modern_industrialization:ludicrous_machine_hull')
  event.register("mev", "MeV", "Mega Voltage", 8192*4*4*4, 'modern_industrialization:mega_machine_hull')
  event.register("utv", "UtV", "Ultimate Voltage", 8192*4*4*4*4, 'modern_industrialization:ultimate_machine_hull')
  event.register("uhv", "UHV", "Highly Ultimate Voltage", 8192*4*4*4*4*4, 'modern_industrialization:highly_ultimate_machine_hull')
  event.register("uev", "UEV", "Extremely Ultimate Voltage", 8192*4*4*4*4*4*4, 'modern_industrialization:extremely_ultimate_machine_hull')
  event.register("uiv", "UIV", "Insanely Ultimate Voltage", 8192*4*4*4*4*4*4*4, 'modern_industrialization:insanely_ultimate_machine_hull')
  event.register("umv", "UMV", "Mega Ultimate Voltage", 8192*4*4*4*4*4*4*4*4, 'modern_industrialization:mega_ultimate_machine_hull')
  event.register("uxv", "UXV", "Extended Ultimate Voltage", 8192*4*4*4*4*4*4*4*4*4, 'modern_industrialization:extended_ultimate_machine_hull')
  event.register("max", "MAX", "Maximum Voltage", 8192*4*4*4*4*4*4*4*4*4*4, 'modern_industrialization:max_machine_hull')
})

// public void createMaterial(String englishName, String materialName, int color, Consumer<MaterialBuilderJSWrapper> builder) {
MIMaterialEvents.addMaterials(event => {
  event.createMaterial("Nichrome", "nichrome", 0xFFCCFF, 
    builder => { builder
      .hardness("average")
      .materialSet("metallic")
      .addParts(
        "plate",
        "wire",
        "coil",
        "ingot",
        "hot_ingot",
        "dust"
      )
      .cable("mv")
    }
  )
  event.createMaterial("TPV Alloy", "tpv_alloy", 0xFF00EE,
    builder => { builder
      .hardness("hard")
      .materialSet("metallic")
      .addParts(
        "plate",
        "wire",
        "coil",
        "ingot",
        "hot_ingot",
        "dust"
      )
      .cable("ev")
    }
  )
  event.createMaterial("HSS-G", "hss_g", 0x117711,
    builder => { builder
      .hardness("hard")
      .materialSet("metallic")
      .addParts(
        "plate",
        "wire",
        "coil",
        "ingot",
        "hot_ingot",
        "dust"
      )
      .cable("ev")
    }
  )
  event.createMaterial("Naquadah Alloy", "naquadah_alloy", 0x113311,
    builder => { builder
      .hardness("very_hard")
      .materialSet("metallic")
      .addParts(
        "plate",
        "wire",
        "coil",
        "ingot",
        "hot_ingot",
        "dust"
      )
      .cable("inv")
    }
  )

  // nuclear fission fuel
  event.createMaterial('Breeder Uranium 238', 'breeder_uranium_238', 0x55cc55,
    builder => { builder
      .addParts("rod")
      .nuclearFuel(0.35, 0.11, 3100, 500, 2500, 0.0, 0.0 )
      .fuelRods()
    }
  )

  // create a full material (metal), no drill, cable, or coil though
  function createFullMaterial(displayName, name, color, hardness) {
    event.createMaterial(displayName, name, color,
      builder => { builder
        .hardness(hardness)
        .materialSet("metallic")
        .addParts(
          "plate",
          "ingot",
          "dust",
          "tiny_dust",
          "nugget",
          "ring",
          "gear",
          "curved_plate",
          "double_ingot",
          "large_plate",
          "hot_ingot"
        )
        .ore({
            ore_set: "iron",
            generate: false,
            biome_tag: "minecraft:is_overworld",
            vein_size: 8,
            veins_per_chunk: 4,
            max_y: 32
        })
        .rawMetal("metallic")
        .defaultRecipes()
      }
    )
  }

  createFullMaterial("Molybdenum", "molybdenum",  0x326F78, "hard")
  createFullMaterial("Thorium", "thorium",  0x78804A, "average") // thorium is a fuel, but it's done differently
  createFullMaterial("Vanadium", "vanadium",  0x315F82, "hard")
  createFullMaterial("Palladium", "palladium",  0x91B1C8, "average")
  createFullMaterial("Cobalt", "cobalt",  0x28558A, "hard")
  createFullMaterial("Bismuth", "bismuth",  0x684A86, "soft")
  createFullMaterial("Lithium", "lithium",  0xC47F99, "soft")
  createFullMaterial("Zinc", "zinc",  0x5D8AA8, "soft")
  createFullMaterial("Osmium", "osmium",  0x263D4D, "hard")
  createFullMaterial("Arsenic", "arsenic",  0x527B86, "soft")
})

// Voltage capacity of the coils is only 2^x while tiers are 4^x
// Which means that every tier allows more and more total machines and overclocks
// Some tiers have 2 coils though, to even it out
MIMachineEvents.addEbfTiers(event => {
  event.add("kubejs:nichrome_coil", 256, "Nichrome")
  event.add("kubejs:tpv_alloy_coil", 512, "TPV Alloy")
})

MIRegistrationEvents.registerFluidNeutronInteractions(event => {
  //public void register(
  //  Fluid fluid,
  //  double heatConduction,
  //  double density,
  //  String scatteringString,
  //  // Isotope params
  //  double thermalAbsorption,
  //  double fastAbsorption,
  //  double thermalScattering,
  //  double fastScattering,
  //  // Products
  //  Fluid productFluid,
  //  long productPerNeutron,
  //  double productProbability)

  // not quite what I want
  //event.register('mekanism:sodium', 0.5, 1, 'ultra_light', 0.05, 0.01, 0.15, 0.65, 'mekanism:superheated_sodium', 1, 1.0)
})
