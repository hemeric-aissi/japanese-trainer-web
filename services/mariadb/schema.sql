-- ── Schéma Japanese Trainer ────────────────────────────────────

CREATE DATABASE IF NOT EXISTS japanese_trainer
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE japanese_trainer;

-- ── Table utilisateurs ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email        VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,       -- bcrypt hash uniquement
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── Table progression ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS progress (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id    INT UNSIGNED NOT NULL,
    section_id TINYINT UNSIGNED NOT NULL,      -- 1 à 16
    score      SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    total      SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE KEY uq_user_section (user_id, section_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
