<?php
include_once('db.php');
 $username = $_POST['username'];
 $password = $_POST['password'];

 $fet=$conn->query("SELECT COUNT(*) as one from tab where username='$username' and pass='$password'");
 $stm=$fet->fetch_object();
    if( $stm->one==1){
        echo "successful login";
    } 
    else {
         "Incorrect password;";
    }   
?>