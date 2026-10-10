ServerEvents.recipes(event => {
  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 100,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 8,
        "item": "modern_industrialization:wood_pulp"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "minecraft:oak_planks"
      }
    ]
  }).id("kubejs:wood_compressing")

  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 200,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "item": "create:brass_ingot"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:brass_sheet"
      }
    ]
  }).id("kubejs:brass_sheet_compressing")

  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 200,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "item": "create:zinc_ingot"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "createaddition:zinc_sheet"
      }
    ]
  }).id("kubejs:zinc_sheet_compressing")

  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 300,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "item": "create:rose_quartz"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:polished_rose_quartz"
      }
    ]
  }).id("kubejs:rose_quartz_compressing")

  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 300,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "item": "create_redstone_additions:cyan_quartz"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create_redstone_additions:polished_cyan_quartz"
      }
    ]
  }).id("kubejs:cyan_quartz_compressing")

  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 200,
    "eu": 16,
    "item_inputs": [
      {
        "amount": 4,
        "item": "minecraft:blaze_powder"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "minecraft:blaze_rod"
      }
    ]
  }).id("kubejs:blaze_rod_compressing")

  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 100,
    "eu": 16,
    "item_inputs": [
      {
        "amount": 1,
        "item": "create:experience_block"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create_enchantment_industry:enchanting_template"
      }
    ]
  }).id("kubejs:enchanting_template_compressing")

  event.custom({
    "type": "modern_industrialization:compressor",
    "duration": 100,
    "eu": 16,
    "item_inputs": [
      {
        "amount": 1,
        "item": "create_enchantment_industry:super_experience_block"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create_enchantment_industry:super_enchanting_template"
      }
    ]
  }).id("kubejs:super_enchanting_template_compressing")
})