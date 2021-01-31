---
date: "2020-12-06"
title: "Laravel III Los Controladores"
cover: "command_line.png"
tags: ['laravel', 'php', 'frameworks']
---



Laravel implementa el patrón de diseño MVC para desarrollar las aplicaciones web.

Cuando un usuario realiza la petición de un recurso, la aplicación se le asigna a un controlador, que será el responsable  de solicitar a un modelo unos datos
Una vez que el modelo retorna los datos, el controlador acopla esos datos a una vista
y se los manda al usuario

Un controlador es un archivo php que esta dentro de app/http/controllers

Laravel nos permite crear un controlador con el código básico desde la terminal con la herramienta artisan

````
php artisan make:controller HomeController
````