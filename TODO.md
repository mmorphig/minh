# Pack stuff:

Testing (I haven't even tried to open this in-game, just testing that modrinth could open the .mrpack).<br>
Put the MIT License notice in relevant files.<br>
Create a proper name for the project.<br>
Change seablock island generation to only give needed items, remove once there are no needed items.<br>
Add skyblock optional datapack.<br>
Add caching for non-modrinth mods.<br>
Remove all .disabled entries in modrinth index.<br>

# KubeJS:

Properly switch from kubejs-generated coils and items to MI-generated ones that are already added.<br>
Adding more raw materials & raw material processing.<br>
Clear out unneeded files in the kubejs data directory.<br>
Fix battery creation.<br>

# Progression

Filling in all the quest book entries for the tiers.<br>
Properly figuring out progression through the tiers.<br>
Creating EV+ betteries.<br>
Adding more tiered cables & removing mekanism cables, IE/SA wires.<br>

# Materials:

Manual tantalum carbide recipe, EBF Ta with carbon powder at 1024 EU/t.<br>
HSS-G ingot production. Mixing steel with chromium, molybdenum, tungsten and vanadium.<br>
Chaos ingot production.<br>
Adding breeding U-238 fuel rods to autogen.<br>
Probably some recipe autogen is missing, fill those in wherever needed.<br>
Move kubejs MI materials to be MI-generated (ex: alumina).<br>
Maybe add more custom parts for materials?<br>

# Assets
Make own texture for molds (I've been using GTCEu's but not putting those here).<br>
Creating textures and recipes for EV+ machine casings and hulls.<br>
Make pure gold dust more yellow, I've given up tuning it for now.<br>

# Machines
Adding more special multiblocks.<br>
Adding multiblock upgrades of singleblock machines (might need more Java modding).<br>
Processing arrays should eventually be disabled with enough alternative multiblocks, not the machine chainer though.<br>

# Bugs
Fixing that fluid slot issue with the particle accelerator.<br>
Add checks to make sure sh files don't go into directories they shouldn't go into (happened before, needs proper fix).<br>

# Mods
Probably remove electrodynamics (and deps).<br>
Could remove Ars Nouveau, or have it be optional to automate.<br>
Remove Ars Meteorites, Neo Vitae's meteors might work better.<br>
Add some worldgen mods: Biomes O' Plenty, Tectonic, Terralith.<br>

# General Minecraft Stuff
Add default settings file that unbinds a lot of keys because of the overlapping ones.<br>
