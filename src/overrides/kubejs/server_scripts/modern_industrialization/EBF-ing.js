ServerEvents.recipes(event => {
  // Tiers
  const CUPRONICKEL = 32
  const KANTHAL = 64
  const NICHROME = 128
  const TPV = 256

  event.remove({ output: "modern_industrialization:monocrystalline_silicon" })
  event.custom({
    "type": "modern_industrialization:blast_furnace",
    "eu": KANTHAL,
    "duration": 1500,
    "item_inputs": [
      {
        "tag": "c:dusts/silicon",
        "amount": 32
      },
      {
        "item": "modern_industrialization:quartz_dust",
        "amount": 1
      }
    ],
    "fluid_inputs": {
      "fluid" : "modern_industrialization:argon",
      "amount": 1250
    },
    "item_outputs": {
      "item": "modern_industrialization:monocrystalline_silicon",
      "amount": 1
    },
    "process_conditions": [
      {
        "type": "modern_industrialization:custom",
        "custom_id": "cleanroom"
      }
    ]
  }).id("kubejs:mono_silicon_ebf")

  event.custom({
    "type": "modern_industrialization:blast_furnace",
    "eu": NICHROME,
    "duration": 600,
    "item_inputs": [
      {
        "item": "minecraft:cobblestone",
        "amount": 1
      }
    ],
    "fluid_outputs": {
      "fluid": "minecraft:lava",
      "amount": 50
    }
  }).id("kubejs:lava_ebf")

  event.custom({
    "type": "modern_industrialization:blast_furnace",
    "eu": CUPRONICKEL,
    "duration": 100,
    "item_outputs": [
      {
        "item": "kubejs:blank_record",
        "amount": 1
      }
    ],
    "fluid_inputs": {
      "fluid": "modern_industrialization:polyvinyl_chloride",
      "amount": 200
    }
  }).id("kubejs:blank_record_ebf")
})