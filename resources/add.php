<?php
$_SERVER["PHP_SELF"];
include_once('db.php');
$ingredient=$_POST['ingredient'];
$ingredient=trim($ingredient);
$num='';
$smt=$conn->prepare(" insert into ingredlist values (?,?)");
$smt->bind_param("ss",$num,$ingredient);
$smt->execute();
?>