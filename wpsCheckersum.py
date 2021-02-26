 
import sys
  
VERSION    = 0
SUBVERSION = 2
  
def usage():
    print "[+] WPSpin %d.%d " % (VERSION, SUBVERSION)
    print "[*] Usage : python WPSpin.py 123456"
    sys.exit(0)
  
def wps_pin_checksum(pin):
    accum = 0
  
    while(pin):
        accum += 3 * (pin % 10)
        pin /= 10
        accum += pin % 10
        pin /= 10
    return  (10 - accum % 10) % 10
  
try:
    if (len(sys.argv[1]) == 8):
        p = int(sys.argv[1][:7] , 16) % 1000000000
        print "[+] WPS pin is : %d" % (wps_pin_checksum(p))
    else:
        usage()
except Exception:
    usage()
