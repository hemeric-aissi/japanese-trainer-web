<?php
declare(strict_types=1);
require_once __DIR__ . '/includes/auth.php';
require_once __DIR__ . '/includes/db.php';

startSession();

// Déjà connecté → app
if (!empty($_SESSION['user_id'])) {
    header('Location: /app.php');
    exit;
}

$error   = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Vérification CSRF
    verifyCsrf();

    $email    = sanitizeEmail($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $confirm  = $_POST['confirm'] ?? '';

    // Validations
    if (!$email) {
        $error = 'Adresse email invalide.';
    } elseif (strlen($password) < 8) {
        $error = 'Le mot de passe doit faire au moins 8 caractères.';
    } elseif ($password !== $confirm) {
        $error = 'Les mots de passe ne correspondent pas.';
    } else {
        $db = getDB();

        // Vérifier si l'email existe déjà
        $stmt = $db->prepare('SELECT id FROM users WHERE email = ?');
        $stmt->execute([$email]);

        if ($stmt->fetch()) {
            $error = 'Cette adresse email est déjà utilisée.';
        } else {
            // Hachage bcrypt avec coût configurable
            $cost = (int)(getenv('BCRYPT_COST') ?: 12);
            $hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => $cost]);

            $stmt = $db->prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
            $stmt->execute([$email, $hash]);

            $success = 'Compte créé ! Tu peux maintenant te connecter.';
        }
    }

    // Régénérer le token CSRF après chaque POST
    $_SESSION['csrf'] = generateCsrfToken();
}

// Générer le token CSRF si absent
if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = generateCsrfToken();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>日本語 — Inscription</title>
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="auth-page">

<div class="auth-card">
  <div class="auth-header">
    <h1>日本語</h1>
    <p>Créer un compte</p>
  </div>

  <?php if ($error): ?>
    <div class="alert alert-error"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>
  <?php if ($success): ?>
    <div class="alert alert-success"><?= htmlspecialchars($success) ?></div>
  <?php endif; ?>

  <form method="POST" action="/register.php">
    <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($_SESSION['csrf']) ?>">

    <div class="form-group">
      <label for="email">Adresse email</label>
      <input type="email" id="email" name="email" required
             value="<?= htmlspecialchars($_POST['email'] ?? '') ?>"
             autocomplete="email">
    </div>

    <div class="form-group">
      <label for="password">Mot de passe <span class="hint">(8 caractères min.)</span></label>
      <input type="password" id="password" name="password" required
             autocomplete="new-password" minlength="8">
    </div>

    <div class="form-group">
      <label for="confirm">Confirmer le mot de passe</label>
      <input type="password" id="confirm" name="confirm" required
             autocomplete="new-password" minlength="8">
    </div>

    <button type="submit" class="btn-auth">Créer le compte</button>
  </form>

  <p class="auth-link">Déjà un compte ? <a href="/login.php">Se connecter</a></p>
</div>

</body>
</html>
