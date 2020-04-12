<?php
include_once('db.php');
class Recipe {
var $recipeid;
var $recipename;
var $type;
var $imurl;
var $rcategory;
 }

$smt=$conn->prepare("Select * from recipes");
$smt->bind_result($t1,$t2,$t3,$t4,$t5);
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
    $ar[$i]=$r;
    $i++;
}

echo json_encode($ar)
 ?>