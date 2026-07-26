<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

$recipientEmail = 'kurt1643@icloud.com';

/*
 * Idealerweise eine existierende Adresse deiner Domain verwenden.
 * Beispiel: kontakt@enes-kurt.de
 */
$senderEmail = 'kontakt@enes-kurt.de';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);

    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed'
    ]);

    exit;
}

$json = file_get_contents('php://input');
$params = json_decode($json, true);

if (!is_array($params) || json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'error' => 'Invalid JSON'
    ]);

    exit;
}

$name = trim($params['name'] ?? '');
$email = trim($params['email'] ?? '');
$userMessage = trim($params['message'] ?? '');

if (
    $name === '' ||
    $userMessage === '' ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'error' => 'Invalid input data'
    ]);

    exit;
}

if (
    mb_strlen($name) > 100 ||
    mb_strlen($email) > 254 ||
    mb_strlen($userMessage) > 5000
) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'error' => 'Input data is too long'
    ]);

    exit;
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(
    htmlspecialchars($userMessage, ENT_QUOTES, 'UTF-8')
);

$subject = 'Neue Nachricht über das Kontaktformular';

$mailBody = "
<!DOCTYPE html>
<html lang=\"de\">
<body>
    <p><strong>Name:</strong> {$safeName}</p>
    <p><strong>E-Mail:</strong> {$safeEmail}</p>
    <p><strong>Nachricht:</strong></p>
    <p>{$safeMessage}</p>
</body>
</html>
";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Website Kontakt <' . $senderEmail . '>',
    'Reply-To: ' . $email
];

$success = mail(
    $recipientEmail,
    $subject,
    $mailBody,
    implode("\r\n", $headers)
);

if (!$success) {
    http_response_code(500);

    echo json_encode([
        'success' => false,
        'error' => 'Mail delivery failed'
    ]);

    exit;
}

echo json_encode([
    'success' => true
]);