import re
import sys

ORDER_0  = [6,2,3,8,5,1,7,4]
ORDER_1  = [1,2,3,8,5,1,7,4]
ORDER_2  = [1,2,3,8,5,6,7,4]
#ORDER_3  = [6,2,3,8,5,6,7,4] # Out after v1.4

CHARSET  = '024613578ACE9BDF' # B
charset  = '944626378ace9bdf'

charsets = [CHARSET,charset]
orders   = [ORDER_0,ORDER_1,ORDER_2]
KEYS     = []

mac = "944452f686aa"

def generateKey(wmac,charset=charset,order=ORDER_0):
    try:
        k = ''.join([wmac[order[i]-1] for i in xrange(len(wmac))])
        
        return ''.join([charset[int(c,16)] for c in k])
        
    except IndexError:
        sys.exit("[!] Use real bssids :)")


KEYS.append(generateKey(mac[4:],charset))
print KEYS
#KEYS = ['34fe86c3']

#mac = re.sub(r'[^a-fA-F0-9]', '', mac)
#mac = "944452f686aa"
#wmac = mac[4:]
#wmac
'52f686aa'
#order=ORDER_0
#[wmac[ORDER_0[i]-1] for i in xrange(len(wmac))]
#for i in range(len(wmac)):
# order[i]
#
#k = ''.join([wmac[ORDER_0[i]-1] for i in xrange(len(wmac))])
#k
'62fa85a6'
#for c in k:
#  print c
#charset  = '944626378ace9bdf'
#for c in k:
#  charset[int(c,16)]
#
#
# ''.join([charset[int(c,16)] for c in k ])
'34fc86c3'


#
#k = ''.join([wmac[ORDER_0[i]-1] for i in xrange(len(wmac))])
'62fa85a6'
#
#
#
#for i in range(8):
#    re= f[i]-1
#    print wmac[re]
#6
#2
#f
#a
#8
#5
#a
#6

#
#''.join([wmac[i] for i in m])
'62fa85a6'
#
#
