---
date: "2020-12-05"
title: "Laravel II:Rutas"
cover: "command_line.png"
tags: ['laravel', 'php', 'frameworks']
---

# Las rutas en Laravel 
En informática, una ruta (path, en inglés) es la forma de referenciar un archivo informático o directorio en un sistema de archivos de un sistema operativo determinado.

Para referenciar recursos dentro de nuestra aplicación en Laravel usamos las routes.
Las rutas de Laravel más básicas aceptan una URI y una Closure (una función anónima), proporcionando un método muy simple y expresivo para definir rutas:
````php
Route::get('foo', function () {
    return 'Hello World';
});
````
Las rutas en laravel se basan en un patrón: El patrón FrontController ( Es "un controlador que maneja todas las solicitudes de un sitio web "). Es decir, que vamos a tener un sólo archivo de la entrada a nuestra aplicación. El archivo public/index.php .

Los archivos a los que se accede desde el exterior son los que están dentro del directorio o carpeta public. Por seguridad, el resto de directorios de nuestra instalación estarán fuera del acceso

Y mediante el patrón frontController resolveremos todas las solicitudes que tengamos
Estas rutas podemos encontrarlas en el directorio routes/web.php

> Hay otros archivos además de web pero nos centramos ahora en web

En este archivo veremos definidas todas las rutas de nuestro proyecto
La sintaxis es la siguiente: 

.

````php
Route::get('/', function () {
    return view('welcome');
});
````
Accedemos al método estático  get de Route que es una clase Trait que nos proporciona Laravel. Un trait es similar a una clase, pero su objetivo es agrupar funcionalidades específicas. Un trait, al igual que las clases abstractas, no se puede instanciar, simplemente facilitan comportamientos a las clases sin necesidad de ser instanciadas



````php
Route::get('/', function () {
    return view('welcome');
});
````
Definimos una raiz  y retorna una vista.
El método get, tiene dos parámetros: la ruta en sí y el segundo es una función anónima (en el ejemplo anterior viene con una vista. Aun no sabemos lo que es una vista pues se cambia y ponemos simplemente un string)

````php
Route::get('/contacto', function () {
    return 'Soy la página de contacto';
});
````
Podemos generar una ruta para devolver por ejemplo un listado de productos
````php
Route::get('/productos', function () {
    return 'Aqui irá  mi listado de productos';
});
````
Se pueden pasar valores por url  que se recogen  parámetros en la función anónima y que luego se pueden utilizar como variables en nuestra función de respuesta
````php
Route::get('/productos/{producto}', function ($producto) {
    return "Soy el $producto";
});
````
> Nota: Laravel snippets es una extensión de visual studio code qeu nos puede ayudar a escribir codigos repetitivos...

También puede haber rutas con varios parámetros y con parámetros opcionales 
````php
Route::get('/productos/{producto}/{categoria?}', function ($producto,$categoria='general') {
    return "Soy el $producto de categoria $categoria" ;
});
````
Pero las rutas deben tender a ser sencillas... si empiezan a ser complejas es mejor crear controladores externos...




