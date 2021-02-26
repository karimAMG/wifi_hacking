<?
if(isset($_GET["imei"]))
{
$imei=$_GET["imei"];
}
else
{
$imei="";
}
echo "<h4>HWCALC V1.1 - fixed 7- digit code bug<hr></h4>";
if(!$imei||!is_numeric($imei)||strlen($imei)!=15)
{
echo "IMEI: Wrong -> Please enter 15-digits IMEI without separator<br>";
echo "<br>(c) SERGEY/MKL 2010";
die();
}

echo "IMEI: ".$imei."<br><br>";

function calc($imei,$type)
{
if($type==1)
{
$const="97b7bc6be525ab44";
}
else
{
$const="5e8dd316726b0335"; 
}

//echo "CONST: ".$const."<br>";
$imei14=substr($imei,0,15);
//echo "IMEI14: ".$imei14."<br>";
$md5input=$imei14.$const;
//echo "IMEI14+CONST: ".$md5input."<br>";
$magic1=md5($md5input);
//echo "MD5(IMEI14+CONST): ".$magic1."<br>";
$magic2=pack("H*",$magic1);
$magic=str_split($magic2);
$hexcode[3]=array();
$hexcode[3]=ord((($magic[0]^$magic[4])^$magic[12])^$magic[8]);
$hexcode[2]=ord((($magic[1]^$magic[5])^$magic[13])^$magic[9]);
$hexcode[1]=ord((($magic[2]^$magic[6])^$magic[14])^$magic[10]);
$hexcode[0]=ord((($magic[3]^$magic[7])^$magic[15])^$magic[11]);
$hexcode[3]=(($hexcode[3]) & 0x01);
$hexcode[3]=(($hexcode[3]) | 0x02);
$hextemp=
str_pad(dechex($hexcode[3]),2,'0',0).
str_pad(dechex($hexcode[2]),2,'0',0).
str_pad(dechex($hexcode[1]),2,'0',0).
str_pad(dechex($hexcode[0]),2,'0',0);
$finalcode=hexdec($hextemp);
return $finalcode;
}
echo "Entsperren / Unlock: ".calc($imei,0)."<br>";
echo "Flashen / Flash:    ".calc($imei,1)."<br>";
//echo "<br><br>Algo extracted from v4mpire_unlocker.exe<br>";
echo "<br>(c) SERGEY/MKL 2010";
?>