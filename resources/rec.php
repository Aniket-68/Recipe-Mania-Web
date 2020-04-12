<?php
include_once('db.php');

// $rname='';
// $rImg='';
$rid = $_GET['rid'];

// $conn->query("SELECT recipes.Rname, recipes.RImg , Ingredients.ingredient from recipes inner join Ingredients on
// recipes.RecipeId=Ingredients.RecipeId where RecipeId= ?");

$smt=$conn->prepare("Select * from recipesprep where Recipeid =?");
$smt->bind_param("s",$rid);
$smt->bind_result($t1,$t2,$t3);
$smt->execute();
$ar= array();
$smt->fetch();
$ar[0]= $t1;
$ar[1]= $t2;
$ar[2]= $t3;
echo json_encode($ar);

// while($smt->fetch()){
//     $r= new Recipe();
//     $r->recipeid= $t1;
//     $r->recipename= $t2;
//     $r->type= $t3;
//     $r->imurl= $t4;
//     $ar[$i]=$r;
//     $i++;
// }
 ?>