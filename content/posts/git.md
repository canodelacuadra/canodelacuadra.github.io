---
date: "2020-11-28"
title: "Git, y los sistemas de control de versiones"
cover: "command_line.png"
tags: ['git', 'herramientas']
---
# Git, Sistema de Control de versiones

## Git y los Sistemas de control de versiones
Los Sistemas de Control de Versiones permiten gestionar los cambios realizados en el código fuente de programas o documentos. 

En los años 90 la mayoría de VCS era sistemas centralizados, en el que un servidor central guarda toda la información y los clientes se conectan al servidor. En el mundo del software libre, el sistema más popular fue CVS (Concurrent Versions System), sustituido a partir del 2004 por Subversion.

En el año 2000 apareció BitKeeper, un sistema de control de versiones distribuido, en el que cada cliente mantiene su propia copia completa del repositorio y puede trabajar sin estar conectado al servidor. BitKeeper era un programa comercial, pero permitía su uso en proyectos de software libre. Entre 2002 y 2005, BitKeeper se utilizó en el desarrollo del kernel Linux, pero en 2005 BitKeeper revocó la licencia que había concedido a los programadores del kernel. Aunque para entonces ya había sistemas de control de versiones distribuidos libres (Monotone, darcs), Linus Torvalds decidió crear un nuevo programa, Git, que se publicó en abril de 2005.
## Git
Git se ha convertido en el sistema de control de versiones más utilizado.

El desarrollo de Git está dirigido desde 2005 por Junio Hamano, empleado de Google.

Actualmente (junio de 2020), la última versión publicada de Git for windows es la versión 2.29, publicada el 19 de octubre de 2020.
## Git y Github
GitHub es una empresa de alojamiento de proyectos de software basados en git fundada en 2008. El alojamiento es gratuito para los proyectos libres y públicos y de pago para el resto. GitHub se ha convertido en el mayor repositorio de proyectos de software libre.

En junio de 2018 Microsoft compró GitHub por 7500 millones de dólares [post de Satya Nadella, CEO de Microsoft].

Octocat, la mascota de GitHubGitHub tiene una mascota llamada Octocat.


##  Instalación de Git
1. Instalamos git en nuestro equipo local
2. Configuramos con una cuenta de correo y un nombre de usuario
````
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
````
## Flujos básicos con Git
### Creación de Repositorio Local


3. Iniciar respositorio
````
git init
````
4. Añadir archivos al control de git`
````
git add --all
````
5. Realizamos commit 
````
git commit  -m 'string para el commit'
````

### Creación de repositorio en github

6. Añadmos repositorio remote en github o en otro
````
git add remote ruta-repositorio.git
git remote add origin nombre
````

7. Empujamos (o publicamos) al repositorio
````
git push origin master
````
### Descargar repositorio en github
Si aún no tenemos el repositorio en nuestro sitrio
````
git clone 'url repositorio'
````

### Actualizar repositorio
````
git pull origin

````