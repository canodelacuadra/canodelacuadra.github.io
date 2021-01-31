---
layout: "post"
date: "2020-7-05"
title: "un script de shell con bash (V)"
cover: "shell-bash.png"
categories: ['LíneaDeComandos']
tags: ['consola']
---


Los scripts de Bash son una heramienta poderosa para la administración y el desarrollo del sistema.  Al principio puede ser aterrador pero puede ser sencillo.

Bash es un shell de Unix, que es una interfaz de línea de comandos (CLI) para interactuar con un sistema operativo (SO). **Cualquier comando que pueda ejecutar desde la línea de comandos** puede usarse en un script bash. Las secuencias de comandos se utilizan para ejecutar una serie de comandos.

Bash está disponible por defecto en los sistemas operativos Unix: Mac y Linux. En windows 10 se puede habilitar o podemos disponer de él al instalar el control de versiones de  Git

Esto no pretende ser una guía exhaustiva para hacer script de bash, pretende tan solo realizar un primer script y aplicar los conceptos más básicos.

#### Prerrequisitos

- Se requiere un conocimiento básico de la línea de comandos.
- Tener instalago el shell Bash (o bien activarlo en windows10 o bien instalar Git pues viene acompañado del mismo)

#### Objetivos

Vamos a aprender a:

- Crear un script de bash que pueda ser ejecutado en cualquier directorio de la computadora.
- Aprender uso de  variables, conditionales, looping, y entrada de datos de usuario con bash.
- Crear un simple script para implementar con Git.
- Crear un script que cree una estructura de archivos para empezar a hacer web
- Crear un comando personalizado que lance un script

## 1. Crear un directorio bin

El primer paso es crear un directorio `bin` . [`bin`](http://www.linfo.org/bin.html) es el nombre por convención del directorio  o subdirectorio  para incluir archivos ejecutables en  en unix.

You can make sure you're in the main user directory by navigating to `~` (which is a shortcut for current user home directory, or `/Users/tania`). This will also be the default directory Terminal always opens in. Typing `pwd` will confirm the location, as well.

Create `bin` in that folder, or wherever you want your bash scripts to live.

```bash
cd ~      # this takes us to /Users/tania
mkdir bin # this creates /Users/tania/bin
```

## 2. Exportar la ruta de tu directorio bin

Open `.bash_profile`, which will be located at `/Users/tania/.bash_profile`, and add this line to the file. If `.bash_profile` doesn't exist, create it.

```bash
export PATH=$PATH:/Users/tania/bin
```

If you don't see hidden files and directories, or those that begin with a `.`, press Command + SHIFT + ..
If Terminal.app is open, quit and reopen it so the PATH gets updated.

## 3. Crear un archivo script y hacerlo ejecutable

Go to your `bin` folder located in `/Users/tania`.

```bash
cd bin
```

Create a file called `hello-world` (no extension) in this folder.

```bash
touch hello-world
```

Open the file in your text editor of choice and type the following.

<div class="filename">hello-world</div>

```bash
#!/bin/bash
```

A bash script must always begin with `#!/bin/bash` to signify that the script should run with bash as opposed to any other shell. This is called a "shebang". You can confirm where the bash interpreter is located with `which bash`.

```bash
which bash
/bin/bash
```

As is tradition, we'll make a "Hello, World!" example to get this working.

hello-world

```bash
#!/bin/bash

echo Hello, World!
```

Now, you can try to run the file in the terminal.

```bash
hello-world
```

But it won't work.

```terminal
-bash: hello-world: command not found
```

We have to make it an executable file by changing the permissions.

```bash
chmod u+x hello-world
```

Now when you run the command, it will output the contents of the `echo`.

```terminal
tania@computer:~$ hello-world
Hello, World!
```

Congrats, you just got your first bash script up and running. You can also run this script from anywhere on the computer, not just in the `bin` directory.

> Strings do not need to use single or double quotes by default. However, single and double quoted strings work as well. A single quoted string will not interpolate variables, but a double quoted string will.

## Variables

A variable is declared without a `$`, but has a `$` when invoked. Let's edit our `hello-world` example to use a variable for the entity being greeted, which is `World`.

hello-world

```bash
#!/bin/bash

who="World"

echo Hello, $who!
```

```terminal
tania@computer:~$ hello-world
Hello, World!
```

Note that `who = "World"` is not valid - there must not be a space between variable and value.

## Toma de datos

Hemos creado una variable en el último ejemplo, but we can also have the user set the value of a variable dynamically. For example, instead of just having the script say `Hello, World!`, we can make it ask for the name of the person calling the script, then output that name. We'll do this using the `read` command.

<div class="filename">hello-world</div>

```bash
#!/bin/bash

echo Who are you?

read who

echo Hello, $who!
```

```terminal
tania@computer:~$ hello-world
Who are you?
Tania
Hello, Tania!
```

## Condicionales

`if` statements use the `if`, `then`, `else`, and `fi` keywords. The condition goes in square brackets.

check-id

```bash
#!/bin/bash

echo How old are you?

read age

if [ "$age" -gt 20 ]
then
    echo You can drink.
else
    echo You are too young to drink.
fi
```

```terminal
tania@computer:~$ check-id
How old are you?
28
You can drink.
```

Operators are slightly different in bash than what you might be used to.

| Bash Operator | Operator  | Description       |
| ------------- | --------- | ----------------- |
| `-eq`         | `==`      | Igual             |
| `-ne`         | `!=`      | No Igual          |
| `-gt`         | `>`       | Mayor que         |
| `-ge`         | `>=`      | Mayor o igual que |
| `-lt`         | `<`       | Menor que         |
| `-le`         | `<=`      | Menor o igual que |
| `-z`          | `== null` | es null           |

## Haciendo bucles

Bash usa los loops  `for`, `while`, and `until` . In this example, I'll use the `for...in` loop to get all the files in a directory and list them.

```bash
#!/bin/bash

FILES=/Users/tania/dev/*

for file in $FILES
do
    echo $(basename $file)
done
```
## Script de ejemplo esqueleto_web
Este script creará un directorio con una estructura de archivos y subdirectorios determinada.
Comprobamos que estamos ejecutando bash en el directorio bin,
``` terminal
Jose@Asus MINGW64 ~/bin
$ pwd
/c/Users/Jose/bin
```
Creamos un archivo llamado esqueleto_web
``` terminal
Jose@Asus MINGW64 ~/bin
$ touch esqueleto_web
```
Abrimos con un editor de texto y lo iniciamos 
```bash
#!/bin/bash
echo nombre de directorio del proyecto: #pedimos  el nombre del proyecto sobre el que se creará el directorio
read directorio
mkdir $directorio
cd $directorio
touch index.html
mkdir css js images
touch css/style.css
touch js/script.js
```
Ahora sólo nos falta abrir la terminal bash en el directorio que queremos iniciar el proyecto y ejecutar esqueleto_web
## Script de ejemplo git-deploy

As I mentioned previously, a bash script can use any commands you can use on the command line. An example of a script you might make for yourself is the one below, where the user is prompted for a git commit message and the process of adding, committing, and pushing to origin is all done with a single `git-deploy` command.

<div class="filename">git-deploy</div>

```bash
#!/bin/bash

read -r -p 'Commit message: ' desc  # prompt user for commit message
git add .                           # track all files
git add -u                          # track deletes
git commit -m "$desc"               # commit with message
git push origin master              # push to origin
```

> If you've never used Git, check out [Getting Started with Git](/getting-started-with-git/) for a primer.

Then just run the command.

```terminal
tania@computer:$ git-deploy
Commit message: Making some vague updates
[master 0b0caaa] Making some vague updates
    3 files changed, 44 insertions(+), 1 deletion(-)
    create mode 100644 file.js
    create mode 100644 file2.js
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 823 bytes | 823.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/me/repo.git
    79f061b..0b0caaa  master -> master
```


## Conclusion

I hope this article has been helpful for you to get started with bash scripting. The concept of having a script that has complete access to anything on my computer was initially a frightening thought for me, but once I got accustomed to it I learned how useful and efficient it can be.

### Referencias
- https://www.taniarascia.com/how-to-create-and-use-bash-scripts/
- https://likegeeks.com/es/script-de-bash-tutorial/
- https://bioinf.comav.upv.es/courses/unix/scripts_bash.html