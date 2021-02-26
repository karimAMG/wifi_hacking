#salt = "5e8dd316726b0335"      # sim:          hwe620datacard
#salt = "97b7bc6be525ab44"      # flash:        e630upgrade
import hashlib
karimm = "5e8dd316726b0335"
karimmm = "97b7bc6be525ab44"
def Amoug(ay,karim):
  digest = hashlib.md5((ay+karim).lower()).digest()
  code = 0
  for i in range(0,4):
    code += (ord(digest[i])^ord(digest[4+i])^ord(digest[8+i])^ord(digest[12+i])) << (3-i)*8
    code &= 0x1ffffff
    code |= 0x2000000
  return code
ay = raw_input("Insert UR IMEI Number Please: ")
if (ay == ""):
  print "Please Insert UR IMEI Number"
else:
  print "UR Modem Unlock code : %s " % Amoug(ay,karimm);
  print "UR Modem Flash code : %s " % Amoug(ay,karimmm);