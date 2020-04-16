<?php
include_once('db.php');
class Recipe {
var $recipeid;
var $recipename;
var $type;
var $imurl;
var $rcategory;
var $ingredrients;
var $steps;
var $duration;
 }

$smt=$conn->prepare("Select * from recipes");
$smt->bind_result($t1,$t2,$t3,$t4,$t5,$t6,$t7,$t8);
$smt->execute();
$ar=array();
$i=0;
while($smt->fetch()){
    $r= new Recipe();
    $r->recipeid= $t1;
    $r->recipename= $t2;
    $r->type= $t3;
    $r->imurl= $t4;
    $r->rcategory= $t5;
    $r->ingredrients =$t6;
    $r->steps=$t7;
    $r->duration=$t8;
    $ar[$i]=$r;
    $i++;
}

echo json_encode($ar)
 ?>