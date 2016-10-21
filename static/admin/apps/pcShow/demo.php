<?php
/*echo "<p>这是相对路径</p>" ;
include('./page1.php');
echo "<p>这是绝对路径</p>" ;
include (__DIR__."\page1.php");*/
//ini_set('display_errors',0);
//ini_set('error_log','myerror.txt');
//ini_set('error_log','syslog');
//ini_set('error_reporting',E_WARNING);
//
/*set_error_handler(error_handler);
function error_handler($errCode,$errMsg,$errFile,$errLine){
	echo "<p>{$errCode}</p>";
	echo "<p>{$errMsg}</p>";
	echo "<p>{$errFile}</p>";
	echo "<p>{$errLine}</p>" ;
};
echo "<br/>主文件位置A";
include "./page2.php";
$v1=require "./page2.php";
echo "<br/>{$v1}";*/

/*function GetStr($e){
	$t=decbin($e);
	$s=str_pad($t,6,"0",STR_PAD_LEFT);
	return $s;
}
echo "<br/>E_ERROR".E_ERROR.",其对应的二进制位".GetStr(E_ERROR);
echo "<br/>E_WARNING".E_WARNING;
echo "<br/>E_NOTICE".E_NOTICE;
echo "<br/>E_STRICT".E_STRICT;*/

/*$arr=array('E_ERROR','E_WARNING','E_PARSE','E_NOTICE','E_CORE_ERROR','E_CORE_WARNING','E_COMPILE_ERROR','E_COMPILE_WARNING','E_USER_ERROR','E_USER_WARNING','E_USER_NOTICE','E_STRICT','E_ALL');

echo "<table border='1'>";
echo "<thead><tr><th>错误代号</th><th>十进制</th><th>二进制</th></tr></thead>";
echo "<tbody>";
foreach ($arr as $key => $value) {
	echo "<tr>";
	echo "<td>{$value}</td>";
	$dec=constant($value);
	$bin=GetStr($dec);
	echo "<td>{$dec}</td>";
	echo "<td>{$bin}</td>";
	echo "</tr>";
}
function GetStr($s){
	$str=decbin($s);
	$str1=str_pad($str,16,"0"xSTR_PAD_LEFT);
	$str2=str_replace('1',"<font color='red'>1</font>",$str1);
	return $str2;
};
echo "</tbody>";
echo "</table>";*/
/*if(!empty($_POST['num'])){
	$num=$_POST['num'];
	$c=0;
	for($i=1;$i<=$num;$i++){
		if($num%$i==0){
			$c++;
		}
	} 
	echo "$c"; 
}*/
/*function f1($a,&$b){
	$v1=$a*$a;
	$v2=$b*$b;
	return $v1+$v2;
};
$b=3;
$a=2;
echo f1($a,$b);*/

/*function f1(){
	$arr=func_num_args();
	return $arr;
};
var_dump(f1('a','b','c'));	
echo "<hr>";
print_r(f1(1,2,3,4,5));*/

/*function jpg(){
	echo "处理jpg";
};
function png(){
	echo "处理png";
};
function gif(){
	echo "处理png";
};
$str="abs.d.png";
$str2=substr(strrchr($str,'.'),1);

$str2();*/

/*$v1=function($m1,$m2){
	$n=$m1*$m2;
	return 1;
};
function ef($x,$y,$z){
	$s=$x+$y;
	$t=$x-$y;
	$z($s,$t);
}
var_dump(ef(3,4,function($m1,$m2){
	return $m1;
}));*/
/*function c2($z){
	echo $z();
}
c2(function(){
	return 'addd';
});*/
/*dump($_FILES);
function dump($a){
	echo "<pre>";
	print_r($a);
	echo "</pre>";
}*/
//c2(3,4,$v1);
//
/*function func(){
	static $c1=0;
	$c1++;
	$d=0;
	$d++;
	echo "<br/>c1=$c1,d=$d";
}
func();
func();
func();*/
/*$v1=3;
function fun(){
	global $v1;
	echo "v1=$v1<hr>";
	$v1=4;
	unset($v1);
}
fun();
echo $v1;*/
/*$v1=3;
function fun(){
	
	echo "v1=".$GLOBALS['v1'];
	$GLOBALS['v1']=44;
	//$v1=4;
	unset($GLOBALS['v1']);
}
fun();
echo "<br/>v1=$v1";*/
/*function link2(){
	$arr=func_get_args();
	$num=func_num_args();
	foreach($arr as $key => $value) {
		$res.=$value.$arr[0];
	}
	$q=substr($res,0,-1);
	$z=substr(strstr($q,$arr[0]),2);
	echo "$z";
};

echo "作业一:<br/><br/>";
link2('-','aa','bb');
echo "<br/><br/>";
link2('-','aa','bb','cc');
echo "<br/><br/>";
link2('%','aa','bb','cc','ee');
echo "<hr>";
echo "作业二:递归算法：<br/>";
function fn($a){
	if($a==1){
		return 1;
	}
	$res=$a*fn($a-1);
	return $res;
}
echo fn(5);
echo "<hr>";
echo "作业二:递推算法：<br/>";
function f2($num){
	$qian=1;
	for($i=2;$i<=$num;$i++){
		$res=$qian*$i;
		$qian=$res;

	}
	return	$res;
	
}
echo f2(3);
echo "<hr>";
echo "作业三:递归算法：<br/>";
function f3($n){
	if($n===1){
		return 1;
	}
	else if($n===2){
		return 2;
	}
	$res=f3($n-2)*3;
	return $res;
}
echo f3(20);
echo "<hr>";
echo "作业三:递退算法：<br/>";
function f4($n){
	$a=1;
	$b=2;
	if($n===1){
		return 1;
	}
	if($n===2){
		return 2;
	}
	for($i=3;$i<=$n;$i++){
		$res=3*f4($i-2);
		if($i%2==0){
			$b=$res;
		}else{
			$a=$res;
		}
	}
	return $res;
}
echo f4(20);
echo "<hr>";
echo "作业四:递归算法：<br/>";
function f5($n){
	if($n===10){
		return 1;
	}
	$res=(f5($n+1)+1)*2;
	return $res;
}
echo f5(6);
echo "<hr>";
echo "作业四:递归算法：<br/>";

echo "<hr>";
echo "<hr>";
echo "<hr>";*/

/*$v1=current($arr);
$v2=key($arr);

echo "$v1";
echo "<br/>$v2";
$v3=next($arr);
$v4=end($arr);
$v5=key($arr);
echo "$v4";
echo "<br/>$v5";*/
/*$v1=each($arr);
print_r($v1);*/
/*$arr=array(
	0=>8,
	4=>11,
	3=>'ssd',
	1=>'f',
);
$c=array(0=>'aa','ddf'=>'bb','f'=>'ff','d'=>6);
list($v1)=$c;
list($m1,$m2)=$c;
list($s1,$s2,$s3)=$c;
echo "<br/>$v1";
echo "<br/>$m1,$m2";
echo "<br/>$s1,$s2,$s3";*/
/*echo "<pre>冒泡排序";
$arr=array(9,3,5,8,2,7);
$num=count($arr);//6
for($i=0;$i<($num-1);$i++){
	for($k=0;$k<$num-$i-1;$k++){
		if($arr[$k]>$arr[$k+1]){
			$t=$arr[$k];
			$arr[$k]=$arr[$k+1];
			$arr[$k+1]=$t;
		}
	}
}
echo "<pre>";
print_r($arr);
echo "<hr>";
echo "<pre>选择排序";
$a=array(1,3,2,6,10,11,20,9,5,4,12);
$num2=count($a);//11
for($i=0;$i<$num2-1;$i++){
	$max=$a[0];
	$pro=0;
	for($k=0;$k<$num2-$i;$k++){
		if($a[$k]>$max){
			$max=$a[$k];
			$pos=$k;
		}
	}
	$t=$a[$pos];
	$a[$pos]=$a[$num2-$i-1];
	$a[$num2-$i-1]=$t;
}
echo "<pre>";
print_r($a);*/
echo "<hr>";
echo "<pre>作业一";
$a= array(
	array(11,12, 13),
	array(21,22,23, 24, 25),
	array(31,32,33, 35),
	array(41,42,43)
);
$len=count($a);
$sum=0;
$c=0;
for($i=0;$i<$len;$i++){
	$temp=$a[$i];
	$len2=count($temp);
	for($k=0;$k<$len2;$k++){
		$sum+=$temp[$k];
		$c++;
	}
}
echo "<br/>".($sum/$c);
echo "<hr>";
echo "<pre>作业二";
$a2=array(
	1,
	array(21,22,23, 24, 25),
	3,
	array( 41, 42, 43,array(50,  51, 52) )
);
$len=count($a2);
$sum=0;
$c1=0;
for($i=0;$i<$len;$i++){
	if(is_array($a2[$i])){
		$len2=count($a2[$i]);
		for($k=0;$k<$len2;$k++){
			if(is_array($a2[$i][$k])){
				$len3=count($a2[$i][$k]);
				for($z=0;$z<$len2;$z++){
					$sum+=$a2[$i][$k][$z];
					$c1++;
				}
			}else{
				$sum+=$a2[$i][$k];
				$c1++;
			}
			
		}
	}else{
		$sum+=$a2[$i];
		$c1++;
	}
}
echo "$sum/$c1";
echo "<hr>";

/*function func($a){
	$len=count($a);
	$sum=0;
	$c=0;
	for($i=0;$i<$len;$i++){
		if(!is_array($a[$i])){
			$sum+=$a[$i];
			$c++;
		}else{
			$a=$a[$i];
			func($a);
		}
		return $a[i];
	}
	
}
$a3=array(
	1,
	array(21,22,23, 24, 25),
	3,
	array( 41, 42, 43,array(50,  51, 52) )
);
var_dump(func($a3));*/
echo "<hr>";
$arr=array(20,70,9,41,6,8,33,13,7,5);
function fn($arr){
	$kong=array();
	for($i=0;$i<count($arr);$i++){
		if(($arr[$i]%2)==1){
			array_push($kong,$arr[$i]);
			$min=$kong[0];
			for($k=0;$k<count($kong);$k++){
				if($kong[$k]<$min){
					$min=$kong[$k];
					$c++;	
				}
			}
		}else{
			$min="没有奇数";
		}
	}
	echo "<br/>$min";
}
fn($arr);
?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<form action="" method="POST"
	<input type="text" name="num"/>
	<input type="submit" value="提交"/>
</form>
<script>

</script>
</body>
</html> -->