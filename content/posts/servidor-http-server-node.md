---
date: "2020-11-15"
title: "http-server, herramienta de servidor http"
cover: "command_line.png"
categories: ['Node', 'herramientas','servidor']
---
http-server es un servidor http de línea de comandos simple y sin configuración. Es lo suficientemente simple y lo suficientemente adaptable como para usarse para pruebas, desarrollo local y aprendizaje.

## Prerequisitos
* Tener node.js y npm instalados de forma global en nuestro equipo

## Objetivos
* Conseguir un servidor http de pruebas de forma rápida en un directorio dado

## Instalación a través de NPM
  Globalmente a través de npm
  ````
npm install --global http-server
````
Esto se instalará http-server globalmente para que pueda ejecutarse desde la línea de comandos en cualquier lugar.

## Uso
En la carpeta de ejecución
````
http-server
````

Ahora podemos visitar http://localhost:8080 en el navegador para ver la respuesta de http en nuestro servidor

Para ver más opciones: https://www.npmjs.com/package/http-server , entre las que están cambiar de puerto, cambiar de carpeta ...
