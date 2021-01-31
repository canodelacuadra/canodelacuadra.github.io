---
date: "2020-11-16"
title: "Creando una web con Webpack - Node"
cover: "command_line.png"
tags: ['Node', 'Javascript']
---


> Los modulos de Javascript permiten la importación y exportación de código entre diferentes ficheros Javascript. Webpack es una herramienta que  permite compilar módulos de JavaScript. Dada una gran cantidad de archivos, webpack, genera un solo archivo (o algunos archivos) que ejecutan su aplicación web.

En la actualidad, muchos sitios web ya no están escritos sólo HTML simple y un poco de JavaScript opcional. A menudo, están completamente creados por JavaScript. Para conseguirlo, tenemos que agrupar, minificar y transpilar el código en algo que todos los navegadores comprendan (html, css y javascript), que es donde entra Webpack. 

Webpack significa empaquetar módulos. Empaqueta todo el código ordenadamente para el navegador. Le permite escribir el más avanzado JavaScript (versión de Javascript aun no instalada en los navegadores) y traducirlo con **Babel** o usar **TypeScript** (superconjunto de Javascript creado por Microsoft), y compilarlo en algo compatible con todos los navegadores y perfectamente reducido (minificado). También le nos permite importar archivos estáticos (imágenes...) mediante  JavaScript.

Para el desarrollo, webpack también proporciona un servidor de desarrollo que puede actualizar módulos y estilos sobre la marcha mientras vamos elaborando el código. 

> Las aplicaciones vue.js y create-react-app se componen sobre  webpack.

## Instalación
Primero, creamos un directorio para alojar el proyecto e iniciamos un proyecto Node. Le podemos llamar  webpack-tutorial.
```` shell
mkdir webpack-tutorial
cd webpack-tutorial
npm init -y 
````
con ```` npm init -y ````  creamos un package.json  por defecto

Para comenzar, instalamos webpack y webpack-cli. 

Estas son las tecnologías centrales para la configuración.
````shell
npm i -D webpack webpack-cli
````
* webpack - Módulo y paquete de modulos base de webpack
* webpack-cli - Interfaz de línea de comandos para webpack

Crearemos una carpeta src  para contener todos los archivos del código fuente. (Luego los archivos compilados de producción los guardaremos en otra carpeta) Comenzaremos creando un archivo simple index.js.

src / index.js {: .file}
```` javascript
console.log('Maravilloso!');
````

Muy bien, ahora tenemos un proyecto Node con los paquetes base instalados y un archivo index.js para comenzar. Ahora crearemos el archivo de configuración.

## Configuracion de compilación  basica
Comencemos a configurar una compilación de Webpack. Creamos un ````webpack.config.js```` la raíz de tu proyecto.

### Entrada
La primera parte de la configuración de un paquete web es definir el punto de entrada de la aplicación , qué archivo o archivos buscará el paquete web para compilar. En este ejemplo, estableceremos el punto de entrada en src/index.js.


webpack.config.js {: .file}
```` javascript
const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
}
````
### Salida
La salida es donde se resolverá el archivo empaquetado. Lo tendremos en la carpeta  dist, que es donde se construye el código de producción. El [name]en la salida será main, como se especifica en el objeto de entrada.

webpack.config.js {: .file}
````javascript
module.exports = {
  /* ... */

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
}
````
Ahora tenemos la configuración mínima necesaria para construir un paquete. En package.json, podemos hacer un script build que ejecute el comando webpack.

package.json {: .file}
````javascript
"scripts": {
  "build": "webpack"
}
````
Ahora puedes ejecutarlo.
````shell
npm run build
asset main.bundle.js 19 bytes [emitted] [minimized] (name: main)
./src/index.js 18 bytes [built] [code generated]
webpack 5.1.0 compiled successfully in 152 mss
```` 
Verás que dist se ha creado una carpeta con main.bundle.js. 

Todavía no ha sucedido nada con el archivo, pero ahora hemos creado el paquete web con éxito en el directorio dist.

## Plugins

webpack tiene una interfaz de plugins que lo hace flexible. El código interno del paquete web y las extensiones de terceros utilizan plugins. Hay algunos principales que casi todos los proyectos de webbpack usarán.

### Archivo de plantilla HTML
Tenemos un archivo de webpack en dist, pero todavía no nos resulta muy útil. Si estamos creando una aplicación web, necesitamos una página HTML que cargue ese paquete de JavaScript como un script. Como queremos que el archivo HTML incorpore automáticamente el script, crearemos una plantilla HTML con html-webpack-plugin.

html-webpack-plugin - Genera un archivo HTML a partir de una plantilla.
Instalamos el complemento.
````bash
npm i -D html-webpack-plugin
````
Creamos un archivo template.html en la carpeta src. Podemos incluir otras variables de información personalizada en la plantilla. Agregaremos un un title personalizado al archivo personalizado y, por lo demás, se verá como un archivo HTML normal con un  div con id root.

src / template.html {:.file}
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
````
Cree una propiedad plugins en su configuración y agregará el complemento, el nombre del archivo a la salida ( index.html) y el enlace al archivo de template.html en el que se basará.

webpack.config.js {:.file}
````javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /* ... */

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
  ],
}
````
Ahora ejecute una compilación nuevamente. Verá que la carpeta  dist ahora contiene un index.htmlpaquete con el paquete cargado. ¡Éxito! Si carga ese archivo en un navegador, verá Interesting!en la consola.

Actualicémoslo para inyectar algo de contenido en el DOM. Cambie el  punto de entrada a este index.js  y ejecute el comando de compilación nuevamente.

src / index.js {:.file}
````javascript
// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)
````
Ahora, para probarlo, puede ir a la carpeta dist e iniciar un servidor. (Instale el servidor http globalmente si es necesario).
````
http-server
````
Verá nuestro JavaScript inyectado en el DOM, diciendo "¡Interesante!". También notará que el archivo del paquete está minimizado.
