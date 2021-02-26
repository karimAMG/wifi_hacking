function zeroPad(num, places) {
		var zero = places - num.toString().length + 1;
		return Array(+(zero > 0 && zero)).join("0") + num;
	}
	function wpsgen(form){
	if(!/(([A-Fa-f0-9]{2}[:]){5}[A-Fa-f0-9]{2}[,]?)+/gi.test(form.mac.value))
	{
	    alert('Invalid Mac Address');
	    return 0;
	}

    var accum = 0;
    var pin = parseInt(form.mac.value.replace(/:/g,'').slice(-6), 16) % 10000000;
    var p=pin;
    while(pin)
        accum = (((accum + (3 * (pin % 10)))|0)+(((pin/10)|0) % 10))|0,pin = ((pin/100) | 0);
    accum = ((10 - accum % 10) % 10);
	form.pin.value = (zeroPad(p,7)+""+accum);
    }
var input = document.getElementById("pin");
var copy = document.getElementById("copy");
copy.addEventListener("click",function(k){
k.preventDefault();
input.select();
document.execCommand("copy");
}

);