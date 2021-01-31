---
layout: "2020-12-26"
title: "Qué es y cómo Instalar  con npm"
cover: "command_line.png"
categories: ['node', 'herramientas']
---
# Iniciar proyectos con NPM
## Qué es NPM
NPM son las siglas de Node Package Manager, es decir, gestor de paquetes de NodeJS, un entorno de ejecución multiplataforma para ejecutar Javascript no sólo en un navegador web (como se concibió originalmente) sino fuera de él, y poder utilizarlo en sistemas de escritorio o servidores web.

Este gestor de paquetes (muy similar al concepto de apt-get en GNU/Linux), nos permitirá instalar de forma muy sencilla y automática paquetes Javascript (tanto de Node como Javascript para el navegador) y utilizarlo para nuestros fines.

## Instalación
Instalamos Node globalmente   en nuestra máquina y tendremos npm disponible.

Comprobamos por consola la versión de npm
´´´´
$ npm --version
6.14.8
´´´´
## Usos de npm
Hay 2 formas principales para instalar con NPM:
- A nivel de proyecto: Probablemente la modalidad más utilizada es la de usar NPM como un gestor de dependencias de un proyecto, esto es, un sistema con el que controlamos que paquetes o librerías Javascript están instalados (y que versión), de modo que quedan asociados al proyecto en sí. Esto facilita que si un usuario diferente se descarga el proyecto, pueda gestionarlo fácil y rápidamente (instalar paquetes, actualizarlos, etc...)

- A nivel global: Existen algunas situaciones específicas, en las que los paquetes son realmente utilidades que no se utilizan en proyectos, muy común en aplicaciones de línea de comandos (CLI) que usamos desde terminal. En esta modalidad, los paquetes se instalan a nivel del sistema (no en la carpeta del proyecto), por lo que están disponibles siempre que el usuario quiera utilizarlos, sin necesidad de tenerlo en cada proyecto.
````
npm install -g parrotsay
````
## Instalar un paquete
Con npm init, generamos el archivo  /**package.json** que controlará las dependencias de nuestro proyecto
´´´´
npm init -y
´´´´
Iniciamos npm con la opción -y para que nos cree el archivo package.json  automáticamente.
Podemos instalar bootstrap por ejemplo
´´´´
npm install bootstrap@next
´´´´
Si ponemos solo lo siguiente se nos intalará la última versión...
´´´´
npm install bootstrap
´´´´
O desinstalarlo
´´´´
npm uninstall bootstrap
´´´´

