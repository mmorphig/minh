#! /usr/bin.bash

#clear old builds

rm -rf ./build/minh*

mkdir -p build/minh/overrides/mods

#copy in manual overrides

cp -r src/* build/minh/overrides/

#create packs

cd scripts
sh create-full-packs.sh
cd ..

mv scripts/minh-data.zip build/minh/overrides/kubejs/data
mv scripts/minh-resources.zip build/minh/overrides/kubejs/assets

#get external mods (non-modrinth)

cd build/minh/overrides/mods

wget -i ../../../../external.txt

cd ../../

#zip to mrpack

zip -r ../minh.mrpack .

cd ../..