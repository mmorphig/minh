ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:rotary",
    chemical_input: {
      chemical: "kubejs:proton",
      amount: 1
    },
    fluid_output: {
      id: "kubejs:proton_plasma",
      amount: 1
    },
    fluid_input: {
      fluid: "kubejs:proton_plasma",
      amount: 1
    },
    chemical_output: {
      id: "kubejs:proton",
      amount: 1
    }
  })

  event.custom({
    type: "mekanism:rotary",
    chemical_input: {
      chemical: "kubejs:neutron",
      amount: 1
    },
    fluid_output: {
      id: "kubejs:neutron_plasma",
      amount: 1
    },
    fluid_input: {
      fluid: "kubejs:neutron_plasma",
      amount: 1
    },
    chemical_output: {
      id: "kubejs:neutron",
      amount: 1
    }
  })

  event.custom({
    type: "mekanism:rotary",
    chemical_input: {
      chemical: "mekanismelements:aqua_regia",
      amount: 1
    },
    fluid_output: {
      id: "kubejs:aqua_regia",
      amount: 1
    },
    fluid_input: {
      fluid: "kubejs:aqua_regia",
      amount: 1
    },
    chemical_output: {
      id: "mekanismelements:aqua_regia",
      amount: 1
    }
  })

  event.remove({ id: "mekanismelements:/condensentrating/rotary/nitrogen" })
  event.custom({
    type: "mekanism:rotary",
    chemical_input: {
      chemical: "mekanismelements:nitrogen",
      amount: 1
    },
    fluid_output: {
      id: "modern_industrialization:nitrogen",
      amount: 1
    },
    fluid_input: {
      fluid: "modern_industrialization:nitrogen",
      amount: 1
    },
    chemical_output: {
      id: "mekanismelements:nitrogen",
      amount: 1
    }
  })

  event.custom({
    type: "mekanism:rotary",
    chemical_input: {
      chemical: "mekmm:uu_matter",
      amount: 1
    },
    fluid_output: {
      id: "modern_industrialization:uu_matter",
      amount: 1
    },
    fluid_input: {
      fluid: "modern_industrialization:uu_matter",
      amount: 1
    },
    chemical_output: {
      id: "mekmm:uu_matter",
      amount: 1
    }
  })

  event.remove({ id: "mekanism_extras:chemical_conversion/radiance/from_enriched" })
  event.remove({ id: "mekanism_extras:chemical_conversion/radiance/from_dust" })
  event.remove({ id: "mekanism_extras:oxidizing/radiance/from_enriched" })
  event.remove({ id: "mekanism_extras:oxidizing/radiance/from_dust" })
  event.remove({ output: "mekanism_extras:dust_radiance" })
  event.custom({
    type: "mekanism:rotary",
    chemical_input: {
      chemical: "mekanism_extras:radiance",
      amount: 1
    },
    fluid_output: {
      id: "modern_industrialization:helium_plasma",
      amount: 1
    },
    fluid_input: {
      fluid: "modern_industrialization:helium_plasma",
      amount: 1
    },
    chemical_output: {
      id: "mekanism_extras:radiance",
      amount: 1
    }
  })
})