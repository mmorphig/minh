MIRecipeEvents.customCondition(event => {
  event.register('cleanroom',
    (context, recipe) => {
      const be = context.getBlockEntity()
      if (!be)
        return false

      const machinePos = be.getBlockPos()
      const level = be.getLevel()

      // It only counts non-full blocks as having non-ambient temp and oxygen, even with northstar:air_passes_through
      const allPos = [
        machinePos.west(),
        machinePos.east(),
        machinePos.north(),
        machinePos.south(),
        machinePos.above(),
        machinePos.below()
      ]

      const temperatureHandler = level.northstar$temperature()
      const oxygenHandler = level.northstar$oxygen()

      return allPos.some(pos => {
        const temperature = temperatureHandler["getTemperatureAt(net.minecraft.core.Vec3i)"](pos)

        const oxygen = oxygenHandler["hasOxygen(net.minecraft.core.Vec3i)"](pos)

        return oxygen && temperature >= 10 && temperature <= 15
      })
    },
    Text.of('Requires a Cleanroom')
  )

  event.register('advCleanroom',
    (context, recipe) => {
      const be = context.getBlockEntity()  
      if (!be)
        return false

      const machinePos = be.getBlockPos()
      const pos = machinePos.above()
      const level = be.getLevel()

      const temperatureHandler = level.northstar$temperature()
      const temperature = temperatureHandler["getTemperatureAt(net.minecraft.core.Vec3i)"](pos)

      const oxygenHandler = level.northstar$oxygen()
      const oxygen = oxygenHandler["hasOxygen(net.minecraft.core.Vec3i)"](pos)

      return !oxygen && temperature > 0 && temperature <= 5
    },
    Text.of('Requires an Advanced Cleanroom')
  )
})

BlockEvents.leftClicked(event => {
  const player = event.player

  if (player.mainHandItem.id !== 'minecraft:bedrock')
    return

  const level = event.level

  const hit = player.rayTrace(16)

  if (!hit || !hit.block)
    return

  const pos = hit.block.pos

  const temperatureHandler = event.level.northstar$temperature()
  const temperature = temperatureHandler["getTemperatureAt(net.minecraft.core.Vec3i)"](pos)

  const oxygenHandler = event.level.northstar$oxygen()
  const oxygen = oxygenHandler["hasOxygen(net.minecraft.core.Vec3i)"](pos)

  const cleanroom = oxygen && temperature >= 10 && temperature <= 15 ? true : false;
  const advCleanroom = !oxygen && temperature > 0 && temperature <= 5 ? true : false;

  player.tell(
    `Temperature: ${temperature}°C | Oxygen: ${oxygen ? 'Y' : 'N'} | Cleanroom: ${cleanroom ? 'Y' : 'N'} | AdvCleanroom: ${advCleanroom ? 'Y' : 'N'}`
  )
})
