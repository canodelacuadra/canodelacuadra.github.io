---
date: "2020-11-22"
title: "Cómo crear un vitualhost en Xampp Windows"
cover: ""
tags: ['herramientas']
---

# Crear Virtualhost en Xampp con windows
* Hay diversas formas, proponemos una sencilla y rápida. (xampp para windows ya viene con Apache configurado para poder crear virtualhost)
* Lo hacemos pensando en un proyecto que contenga una aplicación escrita con php y mysql

1. Creamos el Directorio del proyecto dentro de htdocs Ej: app-pedidos
2. Creamos un directorio public (que contendrá las páginas accesibles desde internet)
3. Dentro de public, creamos un index.php para un Hola Mundo

4. Creamos un virtualhost para app-pedidos que le llamaremos app-pedidos.site

Para crear un virtualhost vamos a 
````cmd
C:\xampp\apache\conf\extra\httpd-vhosts.conf
````
Este es el documento especial que tiene xammp para poder poner ordenadamente nuestros virtualhost

y configuramos el virtualhost por el puerto 80 con la extensión .site (.dev chrome no lo admite) apuntando la directiva root a la carpeta public, y dando permiso de archivo al directorio app-pedidos
````
# VirtualHost para app-pedidos.site

<VirtualHost app-pedidos.site:80>
  DocumentRoot "C:\xampp\htdocs\app-pedidos\public"
  ServerAdmin app-pedidos.site
  <Directory "C:\xampp\htdocs\app-pedidos">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
  </Directory>
</VirtualHost>
````
5. Ahora nos falta decirle a nuestro equipo que eschuche este domínio local en localhost por el puerto 80

Vamos al archivo hosts que está en la siguiente ruta 
````
C:\Windows\System32\drivers\etc\hosts
````
y añadimos el host`
````
127.0.0.1	app-pedidos.site
````

