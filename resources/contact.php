<?php
include_once('db.php');
$name=$_POST['txtName'];
$email=$_POST['txtEmail'];
$phone=$_POST['txtPhone'];
$message=$_POST['txtMsg'];

if($conn->query("insert into contact values('$name','$email','$phone','$message')")){
    echo "<center>successful submission <center>";

echo "<script> alert('Successfully Submitted,our team will be get back to you')</script>" ;
}
else {
    echo "<center>internal server error </center>";
}
?>