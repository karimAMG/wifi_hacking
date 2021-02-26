function karim(){
select = document.getElementById("select").value;
mac = document.getElementById("text").value;



ORDER_0  = [6,2,3,8,5,1,7,4];
ORDER_1  = [1,2,3,8,5,1,7,4];
ORDER_2  = [1,2,3,8,5,6,7,4];
/ORDER_3  = [6,2,3,8,5,6,7,4] # Out after v1.4/
k =[]
orders   = [ORDER_0,ORDER_1,ORDER_2]



if (mac.length != 17){
alert("Error : Your bssid length looks wrong !!");
return 0;
}

mac = mac.replace(/:/g,'');

//mac = "94:44:52:f6:86:aa";//
//Copyright(c) Karim Amougay//
if (select == "(B)elkin: Belkin.xxx"){
charset  = '024613578ACE9BDF';

wmac = mac.slice(4);
for  (i=0;i<= wmac.length;i++){
k +=wmac[orders[0][i]-1];
k = k.replace("undefined","");
}
x =[];
f =[];
for(j=0;j<= k.length;j++){
   x =  k[j];
   f += charset[parseInt(x,16)];
   f = f.replace("undefined","");}

   
   
document.getElementById("output").innerHTML =f;
   
}

if (select == "(b)elkin: belkin.xxx"){
charset  = '944626378ace9bdf';
mac = (parseInt(mac,16)+1).toString(16);
if (mac.startsWith('944452')){
wmac = mac.slice(4);

for  (i=0;i<= wmac.length;i++){
k +=wmac[orders[0][i]-1];
k = k.replace("undefined","");
}
x =[];
f =[];
for(j=0;j<= k.length;j++){
   x =  k[j];
   f += charset[parseInt(x,16)];
   f = f.replace("undefined","");}

   
document.getElementById("output").innerHTML =f;

}else{
for  (i=0;i<= wmac.length;i++){
k +=wmac[orders[0][i]-1];
k = k.replace("undefined","");
}
x =[];
f =[];
for(j=0;j<= k.length;j++){
   x =  k[j];
   f += charset[parseInt(x,16)];
   f1 = f.replace("undefined","");}
  
  
for  (i=0;i<= wmac.length;i++){
k +=wmac[orders[1][i]-1];
k = k.replace("undefined","");
}
x =[];
f =[];
for(j=0;j<= k.length;j++){
   x =  k[j];
   f += charset[parseInt(x,16)];
   f2 = f.replace("undefined","");}
   
   
for  (i=0;i<= wmac.length;i++){
k +=wmac[orders[2][i]-1];
k = k.replace("undefined","");
}
x =[];
f =[];
for(j=0;j<= k.length;j++){
   x =  k[j];
   f += charset[parseInt(x,16)];
   f3 = f.replace("undefined","");}

   
mac = (parseInt(mac,16)+1).toString(16);
wmac = mac.slice(4);

for  (i=0;i<= wmac.length;i++){
k +=wmac[orders[0][i]-1];
k = k.replace("undefined","");
}
x =[];
f =[];
for(j=0;j<= k.length;j++){
   x =  k[j];
   f += charset[parseInt(x,16)];
   f4 = f.replace("undefined","");}
  
document.getElementById("output").innerHTML =f1+" OR "+f2+" OR  "+f3+" OR  "+f4;


  
}}
  
var input = document.getElementById("output");
var copy = document.getElementById("copy");
copy.addEventListener("click",function(k){
k.preventDefault();
input.select();
document.execCommand("copy");
}

);
}




