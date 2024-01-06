#!/bin/bash

echo "Installing MagicMirror...\n"
echo "Installing dependencies...\n"
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

echo "Clone MagicMirror...\n"
cd ~
git clone https://github.com/MichMich/MagicMirror
cd MagicMirror/
echo "npm installing MagicMirror...\n"
echo "ATTENTION: This will take a while (~10 minutes)"
npm run install-mm

cd "${0%/*}"
sudo npm install -g pm2
pm2 startup
cp ./resources/mm.sh ~/mm.sh
chmod +x ~/mm.sh

pm2 start ~/mm.sh
pm2 save

cp ./resources/config.js ~/MagicMirror/config/config.js

modules=`cat ./modules.txt`
for module in $modules
do
    echo "Installing $module...\n"
    cd ~/MagicMirror/modules/
    git clone $module
done

echo "MagicMirror installation complete!\n"
echo "Restarting MagicMirror...\n"
pm2 restart mm

echo "Important: Please edit the config.js file to add your API keys and other information.\n"

echo "To set up Spotify, please follow the instructions here: https://github.com/raywo/MMM-NowPlayingOnSpotify\n"

echo "\n"
echo "Script complete!\n"