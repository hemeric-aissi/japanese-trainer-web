<?php
/**
 * Connexion PDO à MariaDB
 * Les credentials viennent exclusivement des variables d'environnement
 * injectées par Docker via le fichier .env — jamais en dur dans le code.
 */

declare(strict_types=1);

function getDB(): PDO
{
    static $pdo = null;

    if ($pdo !== null) {
        return $pdo;
    }

    $host = getenv('DB_HOST') ?: 'mariadb';
    $port = getenv('DB_PORT') ?: '3306';
    $name = getenv('DB_NAME');
    $user = getenv('DB_USER');
    $pass = getenv('DB_PASSWORD');

    if (!$name || !$user || !$pass) {
        // Ne jamais exposer les détails en production
        error_log('DB config manquante — vérifier les variables d\'environnement');
        http_response_code(500);
        exit(json_encode(['error' => 'Erreur serveur']));
    }

    $dsn = "mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4";

    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,  // requêtes préparées réelles
    ];

    try {
        $pdo = new PDO($dsn, $user, $pass, $options);
    } catch (PDOException $e) {
        error_log('Connexion BDD échouée : ' . $e->getMessage());
        http_response_code(500);
        exit(json_encode(['error' => 'Erreur serveur']));
    }

    return $pdo;
}
