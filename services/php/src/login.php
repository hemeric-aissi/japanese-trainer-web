<?php
declare(strict_types=1);
require_once __DIR__ . '/includes/auth.php';
require_once __DIR__ . '/includes/db.php';

startSession();

if (!empty($_SESSION['user_id'])) {
    header('Location: /app.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verifyCsrf();

    $email    = sanitizeEmail($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if (!$email || !$password) {
        $error = 'Email et mot de passe requis.';
    } else {
        $db   = getDB();
        $stmt = $db->prepare('SELECT id, email, password_hash FROM users WHERE email = ?');
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        // password_verify() est constant-time : pas de timing attack
        if (!$user || !password_verify($password, $user['password_hash'])) {
            // Message volontairement générique pour ne pas divulguer l'existence du compte
            $error = 'Email ou mot de passe incorrect.';
        } else {
            // Rehash si le coût bcrypt a changé depuis la création du compte
            $cost = (int)(getenv('BCRYPT_COST') ?: 12);
            if (password_needs_rehash($user['password_hash'], PASSWORD_BCRYPT, ['cost' => $cost])) {
                $newHash = password_hash($password, PASSWORD_BCRYPT, ['cost' => $cost]);
                $db->prepare('UPDATE users SET password_hash = ? WHERE id = ?')
                   ->execute([$newHash, $user['id']]);
            }

            loginUser((int)$user['id'], $user['email']);
            header('Location: /app.php');
            exit;
        }
    }

    $_SESSION['csrf'] = generateCsrfToken();
}

if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = generateCsrfToken();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>日本語 — Connexion</title>
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="auth-page">

<div class="auth-card">
  <div class="auth-header">
    <h1>日本語</h1>
    <p>Entraînement</p>
  </div>

  <?php if ($error): ?>
    <div class="alert alert-error"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <form method="POST" action="/login.php">
    <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($_SESSION['csrf']) ?>">

    <div class="form-group">
      <label for="email">Adresse email</label>
      <input type="email" id="email" name="email" required
             value="<?= htmlspecialchars($_POST['email'] ?? '') ?>"
             autocomplete="email">
    </div>

    <div class="form-group">
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required
             autocomplete="current-password">
    </div>

    <button type="submit" class="btn-auth">Se connecter</button>
  </form>

  <p class="auth-link">Pas encore de compte ? <a href="/register.php">S'inscrire</a></p>
</div>

</body>
</html>
