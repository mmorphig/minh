#! /usr/bin/bash

rm -rf ./minh-resources
rm -rf ./minh-data
rm -rf ./materialset

sh ./fetch-assets.sh

# resource pack
mkdir minh-resources
echo "{
  \"pack\": {
    \"description\": \"minh resources\",
    \"pack_format\": 34,
  }
}
" > minh-resources/pack.mcmeta

python3 ./generate-textures.py
python3 ./generate-models.py
python3 ./create-material-tags.py

7z -r a minh-resources.zip ./minh-resources

# data pack
mkdir minh-data
echo "{
  \"pack\": {
    \"description\": \"minh data\",
    \"pack_format\": 48,
  }
}
" > minh-data/pack.mcmeta

python3 ./create-material-recipes.py

7z -r a minh-data.zip ./minh-data