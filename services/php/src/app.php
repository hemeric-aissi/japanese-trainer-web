<?php
declare(strict_types=1);
require_once __DIR__ . '/includes/auth.php';
require_once __DIR__ . '/includes/db.php';

requireAuth();    // redirige vers login.php si non connecté

// Charger la progression de l'utilisateur
$db     = getDB();
$userId = currentUserId();

$stmt = $db->prepare('SELECT section_id, score, total FROM progress WHERE user_id = ?');
$stmt->execute([$userId]);
$rows = $stmt->fetchAll();

// Construire un tableau indexé par section_id pour le JS
$progress = [];
foreach ($rows as $row) {
    $progress[(int)$row['section_id']] = [
        'score' => (int)$row['score'],
        'total' => (int)$row['total'],
    ];
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>日本語 — Entraînement</title>
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

<header>
  <h1>日本語 — Entraînement</h1>
  <p>Exercices de grammaire japonaise</p>
  <div class="user-bar">
    <span><?= htmlspecialchars($_SESSION['email']) ?></span>
    <a href="/logout.php" class="logout-link">Déconnexion</a>
  </div>
</header>

<div class="progress-bar">
  <div class="progress-fill" id="progressFill" style="width:0%"></div>
</div>

<nav id="mainNav"></nav>

<main>
  <!-- Les sections sont injectées dynamiquement par main.js -->
  <div id="sections-container"></div>
</main>

<!-- Progression initiale injectée depuis PHP → disponible en JS -->
<script>
  const INITIAL_PROGRESS = <?= json_encode($progress, JSON_THROW_ON_ERROR) ?>;
  const CSRF_TOKEN = <?= json_encode($_SESSION['csrf'], JSON_THROW_ON_ERROR) ?>;
</script>

<!-- JS séparé par responsabilité -->
<script src="/assets/js/data.js"></script>
<script src="/assets/js/render.js"></script>
<script src="/assets/js/check.js"></script>
<script src="/assets/js/main.js"></script>

</body>
</html>
