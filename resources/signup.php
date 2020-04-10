<?php
include_once('db.php');
// $conn = mysqli_connect('localhost','Aniket_1','aniket','recipe');
 $username = $_POST['username'];
 $password = $_POST['password'];


    if($conn->query("insert into tab values('$username','$password')")){
        echo "<center>successful submission <center>";
    
    echo "<script> alert('Successfully Submitted')</script>" ;
    }
    else {
        echo "<center>internal server error </center>";
    }
?>
