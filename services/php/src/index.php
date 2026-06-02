<?php
declare(strict_types=1);
require_once __DIR__ . '/includes/auth.php';

startSession();

// Redirige selon l'état de connexion
if (!empty($_SESSION['user_id'])) {
    header('Location: /app.php');
} else {
    header('Location: /login.php');
}
exit;
