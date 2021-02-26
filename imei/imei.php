 
<?php
/**
* Huawei E303 | E369 | E357 Free Unlocker
* _Oami_Symbianize_
*
**/
class hw {
	public function calculate($imei, $mode){
			$arrayofbytes = array();
			$digesthash = md5($imei.$this->mode($mode));
			$arrayofbytes = $this->bytearray($digesthash);
			return $this->xorbytes($arrayofbytes);
	}
	private function mode($arg){
			$this->unlock = "5e8dd316726b0335";
			$this->flash = "97b7bc6be525ab44";
			if($arg == 'unlock'){
				return $this->unlock;
			}
			else{
				return $this->flash;
			}
	}
	private function bytearray($hash){
		$splitdigest = substr(chunk_split($hash,2,":"),0,-1);
		$arrdigest = explode(":",$splitdigest);
		return $arrdigest;
	}
	private function xorbytes($arr){
		foreach (range(0,3) as $i) {
			$code = dechex(hexdec($arr[$i]) ^ hexdec($arr[4+$i]) ^ hexdec($arr[8+$i])  ^ hexdec($arr[12+$i]));
			if(strlen($code)< 2) {
				$code = "0" . $code;
			}
			$codes = $codes . $code;
		}
		$tmpcdec = hexdec($codes);
		$tmp1dec = hexdec("1ffffff");
		$tmp2dec = hexdec("2000000");
		$c = $tmpcdec & $tmp1dec;
		$c = $c | $tmp2dec;
		return $c;
	}
}
if(isset($_POST['imei'])){
	$imei = htmlspecialchars($_POST['imei']);
	$hw = new hw();
	if(strlen($imei) == 15){
		$imei = htmlspecialchars($imei);
		echo "<em>Results:</em>";
		echo "<em>Unlock  </em>". $hw->calculate($imei,"unlock");
		echo "<em>Flash  </em>". $hw->calculate($imei,"flash");
		echo "<p/>";
	}
	else{
		if($imei < 15) {
			echo "<em>Your box is empty</em>";
		}
		else{
			echo "<em>Error : Invalid IMEI</em>";
		}
	}
}else{
	echo"Enter your IMEI Number";
}
?>