<?php

$recepient = "molot.mc@mail.ru";
$siteName = "SK VC";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$msg = trim($_POST["msg"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nE-mail: $email \nТелефон: $phone \nСообщение: $msg";

$pagetitle = "Сообщение с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>