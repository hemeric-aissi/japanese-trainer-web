# Japanese Trainer — PHP / MariaDB / Docker

Application web d'entraînement à la grammaire japonaise avec système de comptes et progression persistante.

## Stack

- **Nginx** — reverse proxy, security headers
- **PHP 8.3-FPM** — logique applicative
- **MariaDB 11** — stockage utilisateurs et progression
- **Docker Compose** — orchestration microservices

## Lancement

```bash
# 1. Copier et remplir les variables d'environnement
cp .env.example .env
# Éditer .env avec des valeurs fortes pour les mots de passe

# 2. Copier les fichiers JS et CSS depuis le projet HTML existant
# data.js, render.js → services/frontend/js/
# style.css → services/frontend/css/

# 3. Lancer les services
docker compose up -d

# 4. Accéder à l'application
open http://localhost:8080
```

## Structure

```
├── docker-compose.yml
├── .env.example              # template — ne jamais commiter .env
├── .gitignore
└── services/
    ├── nginx/
    │   ├── Dockerfile
    │   └── nginx.conf        # security headers, CSP, reverse proxy
    ├── php/
    │   ├── Dockerfile        # PHP 8.3-FPM, utilisateur non-root
    │   ├── php.ini           # config sécurisée
    │   └── src/
    │       ├── index.php     # redirect login/app
    │       ├── register.php  # inscription (bcrypt)
    │       ├── login.php     # connexion (timing-safe)
    │       ├── app.php       # application principale
    │       ├── logout.php
    │       ├── api/
    │       │   ├── save_score.php    # POST — sauvegarde progression
    │       │   └── get_progress.php  # GET  — récupère progression
    │       └── includes/
    │           ├── db.php    # connexion PDO (credentials via env)
    │           └── auth.php  # session, CSRF, helpers
    ├── mariadb/
    │   └── schema.sql        # tables users + progress
    └── frontend/
        ├── css/style.css
        └── js/
            ├── data.js       # données des exercices
            ├── render.js     # fonctions de rendu
            ├── check.js      # correction + appel API sauvegarde
            └── main.js       # init, navigation, progression
```

## Sécurité appliquée

| Mesure | Détail |
|---|---|
| Secrets | Variables d'environnement via `.env`, jamais dans le code |
| Mots de passe | `password_hash()` bcrypt, coût configurable |
| SQL | PDO + requêtes préparées uniquement |
| Sessions | `HttpOnly`, `SameSite=Strict`, regénération à la connexion |
| CSRF | Token aléatoire 32 bytes, vérifié sur chaque POST |
| Headers HTTP | CSP, X-Frame-Options, X-Content-Type-Options via Nginx |
| Réseau Docker | MariaDB sur réseau interne uniquement, port non exposé |
| Conteneurs | Utilisateurs non-root dans chaque service |
| PHP | `disable_functions`, `expose_php=Off`, `display_errors=Off` |
| Rehash | Rehachage automatique si le coût bcrypt augmente |

## À faire pour la production

- Activer HTTPS (Let's Encrypt via Certbot ou Traefik)
- Passer `session.cookie_secure = On` dans php.ini
- Passer `APP_ENV=production`
- Ajouter rate limiting sur `/login.php` et `/register.php` dans Nginx
