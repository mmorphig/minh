LootJS.modifiers(event => {
  const dust = 'moremekanismprocessing:dust_sapphire'
  const shard = 'northstar:lunar_sapphire_shard'

  const buds = [
    'northstar:small_lunar_sapphire_bud',
    'northstar:medium_lunar_sapphire_bud',
    'northstar:large_lunar_sapphire_bud'
  ]

  buds.forEach(block => {
    event.addBlockModifier(block)
      .removeLoot(block)
      .addLoot(dust)
      .randomChance(1)
  })
})