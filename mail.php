<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['mobile'];
$message= $_POST['message'];

$to = "sanjayamigo9941@gmail.com";

$subject = "Mail From sanjayWeb Developer";
$txt ="Name = ". $name . "\r\n  Email = " . $email ."\r\n phone =" .$phone. "\r\n Message =" . $message;
$headers = "From: sanjaykumarqweas@gmail.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>