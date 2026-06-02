<?php
/**
 * API : récupère la progression complète de l'utilisateur
 * GET /api/get_progress.php
 */
declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';

header('Content-Type: application/json');

startSession();
if (empty($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['error' => 'Non authentifié']));
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    exit(json_encode(['error' => 'Méthode non autorisée']));
}

$db   = getDB();
$stmt = $db->prepare('SELECT section_id, score, total FROM progress WHERE user_id = ?');
$stmt->execute([currentUserId()]);

$progress = [];
foreach ($stmt->fetchAll() as $row) {
    $progress[(int)$row['section_id']] = [
        'score' => (int)$row['score'],
        'total' => (int)$row['total'],
    ];
}

exit(json_encode(['progress' => $progress]));
