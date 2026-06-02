<?php
/**
 * API : sauvegarde la progression d'une section
 * POST /api/save_score.php
 * Body JSON : { section_id, score, total, csrf_token }
 */
declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';

header('Content-Type: application/json');

// Authentification requise
startSession();
if (empty($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['error' => 'Non authentifié']));
}

// Accepter uniquement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Méthode non autorisée']));
}

// Lire le body JSON
$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
    http_response_code(400);
    exit(json_encode(['error' => 'Body JSON invalide']));
}

// Vérification CSRF (token dans le body JSON)
$submittedCsrf = $body['csrf_token'] ?? '';
if (!$submittedCsrf || !hash_equals($_SESSION['csrf'] ?? '', $submittedCsrf)) {
    http_response_code(403);
    exit(json_encode(['error' => 'Token CSRF invalide']));
}

// Validation des données
$sectionId = filter_var($body['section_id'] ?? null, FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1, 'max_range' => 16]
]);
$score = filter_var($body['score'] ?? null, FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 0, 'max_range' => 9999]
]);
$total = filter_var($body['total'] ?? null, FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1, 'max_range' => 9999]
]);

if ($sectionId === false || $score === false || $total === false) {
    http_response_code(400);
    exit(json_encode(['error' => 'Données invalides']));
}

// Upsert : insert ou update si la section existe déjà
$db = getDB();
$stmt = $db->prepare('
    INSERT INTO progress (user_id, section_id, score, total)
    VALUES (?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE score = VALUES(score), total = VALUES(total)
');
$stmt->execute([currentUserId(), $sectionId, $score, $total]);

exit(json_encode(['success' => true]));
