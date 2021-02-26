#!/bin/bash



cap=$1
dic=$2

echo $cap Pin Found! $dic : >> Pins.log;aircrack-ng $cap -w $dic | grep -i 'key found' >> Pins.log
