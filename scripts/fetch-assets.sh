#! /usr/bin/bash

git clone --depth 1 --filter=blob:none --sparse --branch 1.21.x https://github.com/AztechMC/Modern-Industrialization.git

cd Modern-Industrialization

git sparse-checkout set src/main/resources/assets/modern_industrialization/textures/materialsets

cd ..
mv -f Modern-Industrialization/src/main/resources/assets/modern_industrialization/textures/materialsets .

cp new-textures/double_ingot.png materialsets/common/
cp new-textures/gem.png materialsets/common/
cp new-textures/crystal.png materialsets/common/
cp new-textures/crystal_block.png materialsets/blocks/

wget -nc -O materialsets/stone.png https://assets.mcasset.cloud/1.21.1/assets/minecraft/textures/block/stone.png
wget -nc -O materialsets/deepslate.png https://assets.mcasset.cloud/1.21.1/assets/minecraft/textures/block/deepslate.png

rm -rf ./Modern-Industrialization