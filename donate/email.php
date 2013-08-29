<?php
$name = $_POST['send-user'];
$email = $_POST['send-email'];

mail('debmcnally@comcast.net,scott.p.donaldson@gmail.com','Donation Submitted through Facebook',

$name.' ('.$email.') sent a donation through Facebook!

Check with Razoo (https://www.razoo.com/story/Hand-In-Hand-For-Literacy/donations) that the donation was received correctly.'); 
?>