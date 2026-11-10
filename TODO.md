# Pack stuff:

Put the MIT License notice in relevant files.<br>
Create a proper name for the project.<br>
Change seablock island generation to only give needed items, remove once there are no needed items.<br>
Add skyblock and/or nothing optional datapack.<br>
Add caching for non-modrinth mods.<br>
Remove all .disabled entries in modrinth index.<br>

# KubeJS:

Add missing coil tiers using the new coils.<br>
Clear out unneeded files in the kubejs data directory.<br>
Fix battery creation.<br>
Add missing ore processor recipes.<br>
Add all the raw material to useful item recipes.<br>
Remove recipes for and hide duplicates of materials.<br>
Add missing music disc packer recipes.<br>
Add iron bucket recipe (bender?).<br>
Make some Biomes O' Plenty blocks drop sensible items instead of nothing (ex: sea oats drop Pam's oats).<br>

# Progression

Filling in all the quest book entries for the tiers.<br>
Properly figuring out progression through the tiers.<br>
Create EV+ batteries.<br>
Create EV+ circuits.<br>
Adding more tiered cables & removing mekanism cables, IE/SA wires.<br>
Add way to exit the Minestuck Medium.<br>
Set up proper steam and pre-steam non-seablock progression.<br>
Fix titanium progression? Does it need fixing? idk<br>

# Materials:

Manual tantalum carbide recipe, EBF Ta with carbon powder at 1024 EU/t.<br>
HSS-G ingot production. Mixing steel with chromium, molybdenum, tungsten and vanadium.<br>
Chaos ingot production.<br>
Adding breeding U-238 fuel rods to autogen.<br>
Probably some recipe autogen is missing, fill those in wherever needed.<br>
Move kubejs MI materials to be MI-generated (ex: alumina).<br>
Add some missing ores.<br>
Add certus quartz ore.<br>
Change ore generation to be less realism and more proper game balance.<br>
Implement more complex ore processing trees for higher yield and byproducts.<br>
Maybe add more custom parts for materials?<br>
Remove expression and pneumaticcraft oil generation.<br>
Make raw material centrifuging take into account the weight, so one dust doesn't turn into 30 or whatever.<br>
Add palladium obtaining from platinum-group stuff maybe nuclear cell reprocessing.<br>
Add osmium obtaining from platinum-group stuff (oh so I understand why the platline exists).<br>
Add naquadah as a trace material in some veins? non-overworld?<br>
Add trace promethium obtaining from uraninite, native promethium on new planet?<br>
Add extra-terrestrial ore veins.<br>
Bees...<br>

# Assets

Make own texture for molds (I've been using GTCEu's but not putting those here).<br>
Creating textures and recipes for EV+ machine casings and hulls.<br>
Make pure gold dust more yellow, I've given up tuning it for now.<br>
Add some custom panoramas to the menu, or static pictures, just something.<br>
Make some materials more unique, cobalt more blue, hematite more black, etc.<br>

# Machines

Adding more special multiblocks.<br>
Adding multiblock upgrades of singleblock machines (might need more Java modding).<br>
Processing arrays should eventually be disabled with enough alternative multiblocks, not the machine chainer though.<br>

# Bugs

Fixing that fluid slot issue with the particle accelerator.<br>
Add checks to make sure sh files don't go into directories they shouldn't go into (happened before, needs proper fix).<br>
GTMogs vein prospecting data does not stay on reload (issue with GTMogs).<br>
GTMogs veins also don't properly hide in JourneyMap, which is not a problem with just it those two mods (and deps).<br>
Fix "cannot get config value before config is loaded" on world join, right now do /reload on join to fully load all kubejs scripts properly.<br>

# Mods

Could remove Ars Nouveau, or have it be optional to automate.<br>
Remove Ars Meteorites, Neo Vitae's meteors might work better.<br>
Add something that removes the experimental settings warning?<br>
Disable giving the player the forestry documentation book.<br>

# General Minecraft Stuff

Add default settings file that unbinds a lot of keys because of the overlapping ones.<br>
