FROM php:8.3-fpm-alpine

# Extensions nécessaires uniquement
RUN docker-php-ext-install pdo pdo_mysql

# Dépendances système minimales
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Europe/Paris /etc/localtime && \
    echo "Europe/Paris" > /etc/timezone && \
    apk del tzdata

# Config PHP sécurisée
COPY php.ini /usr/local/etc/php/conf.d/security.ini

# Créer un utilisateur non-root dédié
RUN addgroup -g 1001 appgroup && \
    adduser -u 1001 -G appgroup -s /bin/sh -D appuser

WORKDIR /var/www/html

# PHP-FPM tourne en tant qu'appuser
RUN sed -i 's/user = www-data/user = appuser/' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/group = www-data/group = appgroup/' /usr/local/etc/php-fpm.d/www.conf

USER appuser

EXPOSE 9000
