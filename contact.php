<?php

header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed."
    ]);
    exit;
}

function clean($value)
{
    return htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
}

$nome = clean($_POST["nome"] ?? "");
$cognome = clean($_POST["cognome"] ?? "");
$telefono = clean($_POST["telefono"] ?? "");
$email = clean($_POST["email"] ?? "");
$azienda = clean($_POST["azienda"] ?? "");
$obiettivo = clean($_POST["obiettivo"] ?? "");
$fatturato = clean($_POST["fatturato"] ?? "");
$privacy = $_POST["privacy"] ?? "";
$website = clean($_POST["website"] ?? ""); // Honeypot

// Honeypot
if (!empty($website)) {
    echo json_encode([
        "success" => false
    ]);
    exit;
}

// Validation

if (
    empty($nome) ||
    empty($cognome) ||
    empty($telefono) ||
    empty($email) ||
    empty($obiettivo) ||
    empty($fatturato) ||
    empty($privacy)
) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid email."
    ]);
    exit;
}

$mail = new PHPMailer(true);

try {

    // SMTP

    $mail->isSMTP();

    $mail->Host = 'smtp.hostinger.com';

    $mail->SMTPAuth = true;

    $mail->Username = 'info@webovatelabs.com';

    $mail->Password = 'webovate2026@Info';

    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTSSL;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';

    // Sender

    $mail->setFrom('info@webovatelabs.com', 'ConnextUp Website');

    $mail->addAddress('info@webovatelabs.com');

    $mail->addReplyTo($email, "$nome $cognome");

    $mail->isHTML(true);

    $mail->Subject = "New Contact Request - ConnextUp";

    $mail->Body = "

    <h2>New Contact Form Submission</h2>

    <table cellpadding='8' cellspacing='0' border='1' style='border-collapse:collapse;font-family:Arial;'>

        <tr>
            <td><strong>Nome</strong></td>
            <td>{$nome}</td>
        </tr>

        <tr>
            <td><strong>Cognome</strong></td>
            <td>{$cognome}</td>
        </tr>

        <tr>
            <td><strong>Telefono</strong></td>
            <td>{$telefono}</td>
        </tr>

        <tr>
            <td><strong>Email</strong></td>
            <td>{$email}</td>
        </tr>

        <tr>
            <td><strong>Azienda</strong></td>
            <td>{$azienda}</td>
        </tr>

        <tr>
            <td><strong>Obiettivo</strong></td>
            <td>{$obiettivo}</td>
        </tr>

        <tr>
            <td><strong>Fatturato</strong></td>
            <td>{$fatturato}</td>
        </tr>

    </table>

    ";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully."
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo
    ]);

}

?>