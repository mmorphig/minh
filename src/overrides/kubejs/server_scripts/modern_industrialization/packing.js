ServerEvents.recipes(event => {
  const records = [
    "minecraft:music_disc_13",
    "minecraft:music_disc_cat",
    "minecraft:music_disc_blocks",
    "minecraft:music_disc_chirp",
    "minecraft:music_disc_far",
    "minecraft:music_disc_mall",
    "minecraft:music_disc_mellohi",
    "minecraft:music_disc_stal",
    "minecraft:music_disc_strad",
    "minecraft:music_disc_ward",
    "minecraft:music_disc_11",
    "minecraft:music_disc_creator_music_box",
    "minecraft:music_disc_wait",
    "minecraft:music_disc_creator",
    "minecraft:music_disc_precipice",
    "minecraft:music_disc_otherside",
    "minecraft:music_disc_relic",
    "minecraft:music_disc_5",
    "minecraft:music_disc_pigstep",
    "create_connected:music_disc_elevator",
    "create_connected:music_disc_interlude",
    "ars_nouveau:music_disc_aria_biblio",
    "ars_nouveau:music_disc_thistle_the_sound_of_glass",
    "ars_nouveau:music_disc_firel_the_wild_hunt",
    "dimdoors:white_void_record",
    "dimdoors:they_stare_back_record",
    "dimdoors:creepy_record"
  ]

  records.forEach(record => {
    event.custom({
      "type": "modern_industrialization:packer",
      "duration": 400,
      "eu": 4,
      "item_inputs": [
        {
          "amount": 1,
          "item": record
        },
        {
          "amount": 1,
          "item": "kubejs:blank_record"
        }
      ],
      "item_outputs": [
        {
          "amount": 2,
          "item": record
        }
      ]
    })
  });
  
  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 100,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:stripped_logs"
      },
      {
        "amount": 1,
        "item": "minecraft:copper_ingot"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:copper_casing"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 100,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:stripped_logs"
      },
      {
        "amount": 1,
        "item": "create:brass_ingot"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:brass_casing"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 100,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 1,
        "tag": "c:stripped_logs"
      },
      {
        "amount": 1,
        "item": "create:andesite_alloy"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:andesite_casing"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 100,
    "eu": 4,
    "item_inputs": [
      {
        "amount": 1,
        "item": "create:brass_casing"
      },
      {
        "amount": 1,
        "item": "create:sturdy_sheet"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "create:railway_casing"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 800,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 2,
        "item": "modern_industrialization:breeder_uranium_238_fuel_rod"
      },
      {
        "amount": 1,
        "tag": "c:plates/nuclear_alloy"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:breeder_uranium_238_fuel_rod_double"
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 800,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 2,
        "tag": "c:plates/nuclear_alloy"
      },
      {
        "amount": 2,
        "item": "modern_industrialization:breeder_uranium_238_fuel_rod_double"
      }
    ],
    "item_outputs": [
      {
        "amount": 1,
        "item": "modern_industrialization:breeder_uranium_238_fuel_rod_quad"
      }
    ]
  })
})