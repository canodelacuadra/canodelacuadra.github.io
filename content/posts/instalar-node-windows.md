---
date: 2020-11-14"
title: "Instalar Node JS en Windows"
cover: "command_line.png"
tags: ['Node', 'Javascript']
---
> Node.js es un popular entorno de ejecución de código abierto que puede ejecutar JavaScript fuera del navegador mediante el motor JavaScript V8, que es el mismo motor que se utiliza para ejecutar JavaScript en el navegador web Google Chrome . El tiempo de ejecución de Node se usa comúnmente para crear herramientas de línea de comandos y servidores web

## Por qué aprender y usar node.js y npm

Para usar casi cualquier herramienta de desarrollo basada en JavaScript, necesitará saber cómo usar npm y Node.js. Webpack , Vue.js, React.js, Angular... son algunos ejemplos de tecnologías populares de las que puede haber oído hablar y que requieren un conocimiento del ecosistema de Node.

Saber cómo configurar una instalación de node js de forma local y usar npm para instalar dependencias es una parte esencial de ser un desarrollador de JavaScript.


## Prerrequisitos
* Competencia básica en la línea de comandos . ¡No omita este paso! Si no sabemos cómo usar la línea de comandos, estaremos librando una batalla muy cuesta arriba. 
  
## Objetivos
* Descubrir  qué es Node.js y npm
* Configurar Node.js y npm en Windows 
* Instalar bootstrap con npm
## ¿Qué es Node.js?
JavaScript es un lenguaje de programación del lado del cliente , lo que significa que se procesa en el navegador. Con la llegada de Node.js , JavaScript también se puede utilizar como lenguaje del lado del servidor .

##  ¿Qué es npm?
npm  significa Node Package Manager, lo que significa que es la herramienta para conectarse al repositorio que contiene todos los programas, complementos, módulos, etc. de Node.js.

##  Local vs. Global con npm

Este es un concepto más confuso de entender al principio, por lo que es importante tenerlo claro de inicio. Estamos acostumbrados a instalar globalmente cualquier tipo de programa o software en nuestra computadora. Si desea Spotify, descargará Spotify y luego estará disponible desde cualquier sitio de nuestra máquina.

Con npm, tendremos algunas instalaciones globales (el propio Node, un servidor...), pero la mayoría de las veces se hará en un proyecto local, lo que significa que tendrá que instalar todo lo que necesita para cada proyecto en su propio directorio. Si desea tener un proyecto que ejecute Sass o instalar bootstrap, crearemos un directorio con una nueva instalación de npm.

Para tener una referencia clara, cualquier instalación global tendrá el flag -g o --global en la línea de comandos.

# Instalación en Windows
Instalar todo en Windows es muy sencillo.


Node.js y npm se pueden instalar desde un enlace de descarga. Vaya a la página de instalación de Node y descargue el instalador de Node. Tengo un sistema operativo Windows 10 de 64 bits, así que elegí ese.

 ![node](../images/node.jpg) 

Una vez hecho esto, puede probar para ver el funcionamiento de node y npm abriendo PowerShell (o cualquier shell) y escribiendo node -v y npm -v, que verificará el número de versión.
````
node -v
npm -v
````






## Crear un proyecto
En este punto, está listo para comenzar a instalar Webpack, Browserify o cualquiera que sea su objetivo. También podemos crear un proyecto simple para probar que todo funciona correctamente.

### Inicializar un proyecto con npm
Navegue hasta el directorio en el que desea que exista su proyecto, en mi caso, sites / node-test .
````
cd prueba-node
````
Ahora inicie un nuevo proyecto con npm.
````
npm init
````
Aparecerá lo siguiente en la terminal y le pedirá algunos datos


Primero, le pedirá un nombre de paquete. (si no ponemos nada pone la sugerencia)
````
prueba-node
````
Número de versión.
````
1.0.0
````
Descripción.
````
Creando  "Hello, World!" en un proyecto Node.
````
El resto puede presionar enter y saltar. Ahora notará que tenemos un archivo package.json que contiene toda la información que ingresamos.
````
package.json
{
  "name": "prueba-node",
  "version": "1.0.0",
  "description": "creando mi primer \"Hello, World!\" en un proyecto node",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "José Antonio Cano",
  "license": "ISC"
}
````
Un package.json es un archivo que contiene metadatos sobre el proyecto y maneja las dependencias (software y módulos adicionales) del proyecto.

## Ejecutar Node hacia la consola
Vamos a crear index.js en la raíz de nuestro directorio.
Este index.js va a ser la entrada de nuestra aplicación web  en node
````
console.log('Hola Mundo');
````
Ahora vamos a consola y ejecutamos
````
node index.js
````

## Instalar dependencias o módulos
En Node.js, un módulo es un conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar

Para instalar una dependencias  en un proyecto  con npm, usamos el comando 
````
npm install nombre-dependencia
````

Ahora, simplemente ejecutar npm install descargará la dependencia, pero no la guardará en el proyecto. 
 

Como ya creamos nuestro package.json , usaremos la bandera --save para instalar la dependencia y agregarla a package.json .
````
npm install bootstrap --save
````
Siempre que ejecute este comando dentro del directorio del proyecto, instalará correctamente la dependencia mediante la creación de un directorio node_modules . También creará un archivo package-lock.json , que podemos ignorar. Finalmente, actualizó nuestro archivo package.json con una nueva línea.
````
 "dependencies": {
    "bootstrap": "^4.5.3"
  }
````
Podríamos instalar jquery.
````
npm install jquery --save
````
Ahora el proyecto reconoce la dependencia del de las dos librerías

También puede ejecutar npm install --save-dev para especificar que la dependencia solo se utilizará con fines de desarrollo (no de producción).

Para una referencia futura, no nos molestamos  en buscar en la carpeta de node_modules pues esta se volverá realmente abrumadora con proyectos más grandes.




