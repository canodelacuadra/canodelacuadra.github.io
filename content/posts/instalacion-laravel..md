---
date: "2020-11-30"
title: "Laravel 1 Instalación de Laravel 8 en Xampp"
cover: "command_line.png"
categories: ['laravel', 'php', 'frameworks']
---

# Laravel I

Instalamos laravel en el entorno de desarrollo que nos procura xampp

## Pasos

  1. Instalar Xampp
  2. Intalar Composer
  3. Crear Virtual Host
  4. Instalar Laravel



## Instalar XAMPP
Primero que nada, necesitamos xampp, vamos a descargarlo desde la pagina oficial:

[Descargar XAMPP](https://www.apachefriends.org/es/index.html)

Podemos comprobar ahora los requerimientos mínimos de laravel (a día de hoy xampp los trae instalados y activados)
### Requerimientos
* PHP >= 7.3
* BCMath PHP Extension
* Ctype PHP Extension
* Fileinfo PHP Extension
* JSON PHP Extension
* Mbstring PHP Extension
* OpenSSL PHP Extension
* PDO PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension

Podemos comprobar los requerimientos mediante un archivo en httdocs ejecutando la función de php  
```php
<?php
phpinfo(); 

````

 e ir viendo si están isntalados y acitvados, o mediante línea de comandos
````shell
php --version
php -m #lista de modulos instalados
php --ri nombre_modulo #comprueba si están activados
````

## Instalar Composer

Despues de instalar XAMPP, nosotros necesitaremos instalar composer.

Composer es un gestor de dependencias o paquetes de php que se complementa muy bien con Laravel. En windows es facil de instalar solo ingrese al link y descargue el instalador.

[Descargar Composer](https://getcomposer.org/download/)

Despues de instalar, abre una terminal en windows o git bash  y escribe ``composer `` . Se deberia mostrar algo parecido a lo siguiente:

![Ejemplo de Composer instalado](../images/composer.png)

## Xampp Virtual Host

Podemos configurar un host virtual en Xampp para un proyecto de Laravel, y en este ejemplo, vamos a configurar el dominio laravel.site para nuestro proyecto. Vamos a instalar laravel en un directorio de htdocs de xampp que podemos llamar simplemente laravel

Tenemos que editar **httpd-vhosts.conf** que se encuentra en **C:\xampp\apache\conf\extra\httpd-vhosts.conf** y agregar las siguientes líneas al final del archivo para crear el virtual host y dar al directorio permisos:

```apache
# VirtualHost for LARAVEL.SITE

<VirtualHost laravel.site:80>
  DocumentRoot "C:\xampp\htdocs\laravel\public"
  ServerAdmin laravel.site
  <Directory "C:\xampp\htdocs\laravel">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
  </Directory>
</VirtualHost>
```

Después de esto, Apache está escuchando laravel.site pero tenemos que configurar nuestro archivo de hosts que permite redirigir laravel.site al localhost. Este archivo  se encuentra en **C:\Windows\System32\drivers\etc**

**¡IMPORTANTE!:** Para editar este archivo, debemos hacerlo como administrador. 
Edite el archivo hosts agregando nuestro localhost para laravel.site:

```
# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost

127.0.0.1	laravel.site
```

**NOTA:** Puede ser que con el dominio **.dev** tengamos problemas. Por eso usamos **.site** o podríamos usar **.test** .

Guardamos el archivo y estamos listos para instalar laravel.

## Instalar Laravel 
Estamos preparados para instalar y configurar  Laravel Framework. En primer lugar, tenemos que navegar por terminal a la carpeta htdocs para instalarlo y ejecutar el siguiente comando:

```
composer create-project laravel/laravel laravel
```

En este caso nuestro proyecto se llama laravel, el nombre se especifica al final como por  ejemplo:
```
composer create-project laravel/laravel mipagina
```

Aunque ahora lo haremos con el nombre de laravel porque así lo determinamos al crear el virtualhost, Si lo cambiamos también debemos hacerlo en el virtualhost

Cuando termine, observaremos el siguiente esquema de directorio dentro de laravel: 


![Ejemplo de directorio laravel](../images/directorio-laravel.png)

Finalmente, inicia apache y MySql desde el panel de control de Xampp. Ejecuta laravel.site en tu navegador y Laravel debe estar instalado.

![Ejemplo de directorio laravel](../images/laravel-site.PNG)

### Configuración de la Base de datos

Abra el archivo .env en su IDE o editor de texo- Cambie DB_DATABASE por el nombre de su base de datos y si ha establecido un nombre de usuario y contraseña para su phpmyadmin, especifíquelo; de lo contrario, deje el nombre de usuario como root y la contraseña en blanco.

La fuente original es esta. Estaba escrito para laravel 5 
[Fuente original](https://www.codementor.io/magarrent/how-to-install-laravel-5-xampp-windows-du107u9ji)
