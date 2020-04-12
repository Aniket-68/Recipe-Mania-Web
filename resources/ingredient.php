<?php
include_once('db.php');
class ingredientlist
 {
 var $ingredientid;
 var $ingredient;
 }

$smt=$conn->prepare("Select * from ingredlist");
$smt->bind_result($t1,$t2);
$smt->execute();
$ar=array();
$i=0;
while($smt->fetch()){
    $in= new ingredientlist();
    $in->ingredientid = $t1;
    $in->ingredient= $t2;
    $ar[$i]=$in;
    $i++;
    // echo "<Script>alert($ar)</Script>";
}

echo json_encode($ar);
?>