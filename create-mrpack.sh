#! /usr/bin/bash

#clear old builds

rm -rf ./build/minh*

mkdir -p build/minh/overrides/mods

#copy in manual overrides

cp -r src/overrides/* build/minh/overrides/

#generate optional datapacks

cd src/datapacks

cd seablock

7z a ../../../build/minh/overrides/datapacks/seablock.zip *

cd ../

cd ../../

#generate & copy in generated kubejs scripts

cd scripts
python3 ./generate-material-startup-js.py

#create packs

sh create-full-packs.sh
cd ..

#move generated files into place

mv build/materials-generated.js build/minh/overrides/kubejs/startup_scripts

mv scripts/minh-data.zip build/minh/overrides/kubejs/data
mv scripts/minh-resources.zip build/minh/overrides/kubejs/assets

#add modrinth index

cp ./modrinth.index.json build/minh/

#get external mods (non-modrinth)

cd build/minh/overrides/mods

wget -i ../../../../external-mods.txt

cd ../../

#zip to mrpack 0 compression because it's not THAT big

zip -0 -r ../minh.mrpack .

cd ../..