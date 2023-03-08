<?php
// Файлы phpmailer
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';
require 'mailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$secondName = $_POST['secondname']
$surName = $_POST['surname']
$business = $_POST['business']
$email = $_POST['email'];
$text = $_POST['text'];

// Формирование самого письма
$title = "Heading";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Email:</b> $email<br><br>
<b>Message:</b><br>$text
<b>Message:</b><br>$secondName
<b>Message:</b><br>$surName
<b>Message:</b><br>$business
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'denispopovmaksimovich'; // Логин на почте
    $mail->Password   = 'yesqidrgyhoqdaoe'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('denispopovmaksimovich@gmail.com', 'Nameless'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('denispopovmaksimovich@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);