---
layout: "post"
title: "Instalación de Vuepress y Publicación en Github Pages"
cover: "command_line.png"
categories: [ 'ssg', 'cms', 'spa']
---


# ¿Qué es Vuepress?

VuePress es un generador de sitios estáticos, originalmente pensado para escribir la documentación de los propios proyectos de Vue. Un sitio en VuePress es en realidad una SPA (Single-Page Application) que utiliza Vue, Vue Router y webpack como base.

## Instalar vuepress en Windows 10
Vamos a instalar vuepress en windows 10 y publicarlo como contenido estatico en un repositorio de github y visualizar el contenido estático aprovechandonos de gituhub pages. VuePress es una fantástica herrmienta para crear documentación en línea.

## Requisitos
* Node instalado para lanzar un servidor y para usar npm
* Git  Bash instalado (Git)
* Un repositorio de github creado con keys SSH
* 
### Paso 1 Instalar la aplicación en nuestro equipo
De las diferentes formas que se nos aconseja en vuepress, hemos seguido las opciones de intalación de forma manual con npm pues nos ha resultado más confiable. 
[Manual de Vuepress](https://vuepress.vuejs.org/guide/getting-started.html#quick-start). 

1. Creamos un directorio de trabajo y accedemos al mismo
   ````cmd
   mkdir apuntes-app-distribuidas
   cd apuntes-app-distribuidas
   ````
2. Inicializamos el administrador de paquetes npm que nos creará el package.json de inicio. Podemos dar intro para poner lo que pone por defecto. Luego podremos editarlo si queremos
     ````cmd
   npm init
   ````
3. Instalamos vuepress localmente (solo en este directorio)

   ````cmd
   npm install -D vuepress
   ````
4. Al package.json (archivo que se ha creado en la raiz de nuestro sitio) le añadimos dos scripts
    ````cmd
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    }
    }
    ````
5. Creamos una carpeta dentro de la raiz que se llame ````docs```` y dentro un archivo que se llame README.md que será el index del proyecto. Atención a las mayusculas en el nombre y minúsculas en la extensión: docs/README.md. Escribimos algo en el README.md. como '# hola mundo'
6.  ejecutamos por consola el script de nuestro package.json que se llama docs:dev, VuePress iniciará un servidor de desarrollo de recarga en vivo en http:// localhost:8080 (abre una nueva ventana).
 ````cmd
   npm run docs:dev
````
   Los cambios que hagas en README.md se irán viendo en en vivo cada vez que guardes los cambios.

### Paso 2 Agregar contenido y personalización
Vuepress sigue el criterio de convención por encima de configuración por lo que crearemos archivos y dirctorios según la convención que nos marcan
[directorio de archivos](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing)

1. Creamos un directorio dentro de docs que se llame .vuepress /docs/.vuepress
2. Creamos un archivo que se llame config.js dentro de  .vuepress /docs/.vuepress/config.js
   
   ````javascript
   module.exports = {
    title: 'Desarrollo de Aplicaciones Distribuidas',
    description: 'Apuntes para el desarrollo de aplicaciones distribuidas'
    }
    ````
  Cada vez que cambiamos el archivo de configuración debemos reiniciar el servidor de desarrollo Control+C para salir y npm run docs:dev para volver a iniciarlo

  Ahora debemos ver un  titulo en la pestaña de navegación, un título y una barra de busqueda en el header de nuestra documentación 
3. Ahora podemos crear todos los documentos que queramos dentro de la carpeta docs: por ejemplo api.md y webservice.md
4. Para darlos enlaces podemos activar los enlaces del sidebar en config.js en el objeto ThemeConfig, al que después podremos ir añadiéndole más cosas
   
````javascript
  module.exports = {
    title: 'Desarrollo de Aplicaciones Distribuidas',
    description: 'Apuntes para el desarrollo de aplicaciones distribuidas',
    themeConfig: {
        sidebar: [
            ['/webservice', 'Que es un webservice'],
            ['/api', 'Que es una API']  
        ]
    }
  }
 ````
### Paso 3 Generación de archivos estáticos
Para generar los archivos estáticos debemos ejecutar
 ````
npm run docs:build
 ````
 Esto nos creará los archivos estáticos dentro de docs/.vuepress/dist

Estos archivos deberán implementarse en un servidor, no funcionan ejecutándose en local
Podemos instalar http server y hacerlo
 ````
npm install --global http-server
 ````
y ejecutar dentro del directorio dist
 ````
http-server
 ````
 Ahora ya podremos ver los archivos ejecutándose convenientemente en servidor
### Paso 5 Implementación y Publicación automatizada en github
Creamos un repositorio en github y habilitamos credenciales llaves publicas ssh si no las tenemos.

Establecer la correcta base en docs/.vuepress/config.js.

Si está implementando en https://<USERNAME>.github.io/<REPO>/, por ejemplo, su repositorio está en https://github.com/<USERNAME>/<REPO>, configure baseen "/<REPO>/"
 ````javascript
module.exports = {
    title: 'Desarrollo de Aplicaciones Distribuidas',
    description: 'Apuntes para el desarrollo de aplicaciones distribuidas',
    lang: 'es',
    base: '/apuntes-app-distribuidas/',
    
  }
 ````
también el objeto de configuración del theme
 ````javascript
module.exports = {
    title: 'Desarrollo de Aplicaciones Distribuidas',
    description: 'Apuntes para el desarrollo de aplicaciones distribuidas',
    lang: 'es',
    base: '/apuntes-app-distribuidas/',
    themeConfig: {
        repo: 'canodelacuadra/apuntes-app-distribuidas',
        docsDir: 'gh-pages',
        sidebar: [
            ['/webservice', 'Que es un webservice'],
            ['/api', 'Que es una API']  
        ]
    }
  }

 ````
 Crear un deploy.sh. Este archivo nos servirá para automatizar una serie de línea de comandos.
  ````sh
 #!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:canodelacuadra/apuntes-app-distribuidas.git master:gh-pages

cd -
 ````
 y luego lanzamos el script en consola
  ````
 sh deploy.sh
  ````