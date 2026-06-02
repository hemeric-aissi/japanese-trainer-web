<?php
/**
 * Helpers d'authentification et de sécurité des sessions
 */

declare(strict_types=1);

/**
 * Démarre la session avec des paramètres sécurisés.
 * À appeler en tout début de chaque page PHP.
 */
function startSession(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    $lifetime = (int)(getenv('SESSION_LIFETIME') ?: 3600);

    session_set_cookie_params([
        'lifetime' => $lifetime,
        'path'     => '/',
        'secure'   => false,        // passer à true en production (HTTPS)
        'httponly' => true,         // inaccessible en JavaScript
        'samesite' => 'Strict',     // protection CSRF de base
    ]);

    session_start();
}

/**
 * Vérifie que l'utilisateur est connecté.
 * Redirige vers login.php sinon.
 */
function requireAuth(): void
{
    startSession();
    if (empty($_SESSION['user_id'])) {
        header('Location: /login.php');
        exit;
    }
}

/**
 * Connecte un utilisateur : régénère l'ID de session pour prévenir
 * la fixation de session, puis stocke les données en session.
 */
function loginUser(int $userId, string $email): void
{
    session_regenerate_id(true);    // nouveau ID à chaque connexion
    $_SESSION['user_id'] = $userId;
    $_SESSION['email']   = $email;
    $_SESSION['csrf']    = generateCsrfToken();
}

/**
 * Déconnecte l'utilisateur proprement.
 */
function logoutUser(): void
{
    $_SESSION = [];
    session_destroy();
    // Supprime le cookie de session
    setcookie(session_name(), '', time() - 3600, '/');
}

/**
 * Génère un token CSRF aléatoire sécurisé.
 */
function generateCsrfToken(): string
{
    return bin2hex(random_bytes(32));
}

/**
 * Vérifie le token CSRF soumis dans un formulaire POST.
 * Termine la requête si le token est invalide.
 */
function verifyCsrf(): void
{
    $submitted = $_POST['csrf_token'] ?? '';
    $stored    = $_SESSION['csrf'] ?? '';

    if (!$submitted || !$stored || !hash_equals($stored, $submitted)) {
        http_response_code(403);
        exit(json_encode(['error' => 'Token CSRF invalide']));
    }
}

/**
 * Retourne l'ID de l'utilisateur connecté.
 */
function currentUserId(): int
{
    return (int)($_SESSION['user_id'] ?? 0);
}

/**
 * Nettoie et valide une adresse email.
 */
function sanitizeEmail(string $email): string|false
{
    $email = trim(strtolower($email));
    return filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : false;
}
