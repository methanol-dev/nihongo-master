FROM nginx:alpine

# Copy static web files to nginx html root
COPY ./web /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
