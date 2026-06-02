FROM nginx:1.27-alpine

# Supprime la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copie notre config
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Nginx tourne en tant qu'utilisateur nginx (non-root)
RUN chown -R nginx:nginx /var/cache/nginx /var/log/nginx

EXPOSE 80
