---

date: "2020-7-04"
title: "Archivos batch (IV)"
cover: "cmd-herramienta.PNG"
categories: ['LíneaDeComandos']
---


Un archivo de texto con extensión *.bat que contiene una secuencia de órdenes para ser ejecutadas en los sistemas sistemas DOS, OS/2 y Microsoft Windows.Se trata de archivos de texto sin formato, guardados con la extensión .BAT que contienen un conjunto de instrucciones MS-DOS. Cuando se ejecuta este archivo, las órdenes contenidas son ejecutadas en grupo, de forma secuencial, permitiendo automatizar diversas tareas. Cualquier orden reconocible por MS-DOS puede ser utilizado en un archivo batch.

Esta es la forma de automatizar procesos (copiar, pegar, renombrar y enviar datos) en MS-DOS. De este modo, evitamos procesos rutinarios y monótonos, acelerando los mismos. Tiene la funcionalidad de conectarse con otras interfaces por línea de comandos.

En resumen un archivo batch es un archivo de texto en el que se a escrito un conjunto de códigos que van a ser ejecutados de forma lineal (ya lo irán entendiendo con ejemplos mas adelante) y ese archivo de texto debe ser guardado con la extensión .bat, es decir un nombre cualquiera.bat  o nombre.cmd ej: nombredelarchivo.bat nombredelarchivo.cmd

Por ejemplo, al ejecutar el siguiente script (.bat) se eliminará C:\Archivo.txt y se abrirá el navegador web predeterminado en http://www.pagina.com.:
````
del C:\Archivo.txt
start http://www.pagina.com
````
 Cuando es iniciado (mediate consola o con doble click), un programa shell —típicamente en windows, cmd.exe— lo lee y ejecuta, generalmente línea a línea. De este modo, se emplea para ejecutar series de comandos automáticamente. 

> El hecho de que funcione solo para MS-DOS lo hace muy limitado. Su extensión es .bat o .cmd

### Crear archivos por lotes o batch
Los archivos batch son ideales para varias funciones, por ejemplo hacer copias, extraer y listar información, eliminar virus, planificar tareas, ejecutar limpiezas en el sistema, hacer respaldos de datos e información, automatizar descargas de internet, en fin infinidad de aplicaciones.
Un ejemplo, la manera más eficiente actualmente de descargar archivos de internet es mediante WGET, para eso se utiliza un batch que tiene solo el siguiente código:
````
wget -c -S -r dirección url.
````
#### un script de prueba
En un nuevo directorio de prueba vamos a crear nuestro  primer archivo .bat. En la mayoría de las circunstancias, no es necesario crear ningún archivo o directorio  en la línea de comandos, pero aún así es bueno entender cómo se crean los archivos.

 1.  Nos colocamos en el escritorio de nuestro usuario
 2. crearmos un directorio
 3. nos movemos a ese directorio
 4. creamos un archivo

````
cd C:\Users\Jose\Desktop\ 
mkdir archivos-bat
cd archivos-bat
copy con test.bat
````


Otra opción es crear un archivo nuevo con el Bloc de Notas. Para esto, tendrías que escribir lo siguiente:

````
start notepad test.bat
````
El comando anterior abre una nueva ventana en blanco en test.bat. 
En el archivo test.bat, escribe las siguientes tres líneas, que limpian la pantalla con el comando cls y luego ejecutan el comando dir.
````bash
@echo off
cls
dir

````
Después de estas tres líneas escritas, guarda y sal del editor. Después de guardar el archivo y volver a la línea de comandos, al escribir “dir” verás el archivo test.bat en el directorio.

Ahora ejecuta el archivo por lotes para obtener una mejor comprensión de lo que hace este tipo de archivo. Para ejecutar este archivo recién creado, tipea “test” en la pantalla y dale al intro.  Lo que hará este archivo será borrar la pantalla y hacer un listado de los archivos del directorio 

````bash
cd C:\Users\Jose\Desktop> test

````

#### Estructura de un archivo batch

Para crear un archivo batch solo es necesario un editor de texto plano, que puede ser el Notepad++, Visual Studio, Brackets, Atom,o hasta el simple Bloc de notas de Windows.

La estructura de un archivo batch es sencilla:
- Una primera línea: @ECHO OFF (no es imprescindible para que funcione)
- Las instrucciones que pueden constar de una simple línea o de varias, todas se irán ejecutando en su orden.
- Al final generalmente se emplea EXIT o EOF que cierra la ventana de la consola.
- .Al hacer tus primeros batch siempre emplea PAUSE después de las instrucciones, su uso como la palabra indica, pausa y permite ver mensajes de error, en caso de que exista alguno, de otra forma la consola se cerrará y será imposible conocer lo que lo ha causado.
La estructura de un archivo batch
````bash
@echo off

pause

exit
````


### Un script sencillo

Crear un archivo batch, método paso por paso.
  - Comenzaremos creando un Simple y clásico "Hola Mundo", escribiendo en tu plantilla el siguiente código:
````
@echo off
echo Hola Mundo
pause
exit
````
-   Guardamos el archivo como nombre.cmd y lo ejecutamos, el archivo tomará el icono de una rueda dentada y nos aparecerá una pantalla negra que dirá "Hola Mundo", luego una línea abajo mostrará "Presione una tecla para continuar"
  
La explicación:

- echo
Muestra un texto en pantalla, que es el texto que viene después, en este caso es: Hola Mundo.

- pause
Como bien se lee, pausa la ejecución del código. Además muestra el texto: "Presione una tecla para continuar".

- exit
Cierra la ventana de comandos.

#### Ejemplos prácticos de archivos batch

Cargar una página de internet
El comando START permite iniciar una aplicación.
Al usarlo con la dirección URL de una página web de internet, inicia el navegador web predeterminado y carga la página solicitada.
Por ejemplo:
````
@echo off
START https://norfipc.com
````
Se pueden incluir varias líneas con direcciones diferentes, incluso usar un navegador determinado, especificando el nombre de su ejecutable justo antes de la dirección.

### Copiar, mover y eliminar archivos
Con el siguiente código podemos crear un archivo batch que copie un archivo, luego lo mueva a otro directorio, borre el original y vuelva a copiar el copiado.
En la carpeta donde crearás el archivo batch, crea un archivo de texto llamado copiame.txt. En él, escribe lo que quieras. Este será el archivo que copiaremos.

Código:
````
@echo off
echo Hola, Copiaremos un archivo
pause
COPY copiame.txt copiado.txt
MOVE copiado.txt C:\copiado.txt
DEL copiame.txt
CD C:\
COPY copiado.txt copiado2.txt
EXIT
````
Guárdalo en la carpeta como prueba.cmd, y ejecútalo. Después, si vamos al Disco C, veremos que hay dos nuevos archivos de texto, uno llamado: copiado.txt y otro: copiado2.txt.
También si vamos a la carpeta del batch, comprobaremos que no está el archivo de texto original, copiame.txt.

Crear nuevos archivos
Usando archivos batch podemos crear otros archivos diferentes, para eso podemos usar algo como lo siguiente:
````
echo TEXTO DE PRIMERA LINEA > nombre.extensión
echo TEXTO SEGUNDA LINEA >> nombre.extensión
echo TEXTO SIGUIENTE LINEA >> nombre.extensión
````
Al escribir ECHO seguido de un texto y el signo > creamos un archivo con el nombre que siga.
Si ocupamos un ECHO seguido de un texto y el doble signo >> se escribirá en la siguiente linea vacía del archivo que prosiga.
Hagamos la prueba:

````
echo Creando un Archivo de texto > nuevo.txt
echo Esta es la Segunda linea >> nuevo.txt
echo Y esta es la Siguiente >> nuevo.txt
echo Esto esta genial >> nuevo.txt
````
Aj ejecutarlo, la pantalla negra se abrirá y cerrará, pero en la carpeta en la que está nuestro batch, se habrá creado un nuevo archivo nuevo.txt que si lo abrimos, dentro tendrá escrito lo que especificamos anteriormente.
Además se puede jugar con los caracteres. Un ejemplo, donde se cambiaron los colores, los caracteres y el pause: imagen de la ventana de msdos
El código empleado es el siguiente:
````
@echo off
color 30
echo ==================================
echo = =
echo = Personalizado =
echo = =
echo ==================================
echo.
echo.
echo Para salir presiona una tecla.
pause>nul
exit
````
Vale mencionar que ECHO, seguido de un punto, sirve para saltarse una línea.

#### Usar variables en los archivos batch

Las variables son muy importantes y prácticas en los archivos batch, aprende como crearlas.
``
SET NOMBREVARIABLE = VALOR
``
Para mostrar el valor de una variable creada anteriormente, debemos escribir su nombre entre los signos %%


Por ejemplo:
````
@echo off
set Nombre = Norfi Carrodeguas
echo %Nombre%
pause
````
En el caso anterior primero creamos la variable llamada Nombre y le dimos un valor, posteriormente mostramos su valor.
También podemos crear variables dinámicas y dar la opción que el usuario la defina, se hace de la siguiente forma:
````
@echo off
SET /P Nombre = Escriba su Nombre:
````
En este caso al ejecutar el archivo batch, solo se mostrará en la consola el mensaje: "Escriba su Nombre:"
Al usuario ingresar los caracteres que decida y oprimir la tecla Enter, el batch ejecutará la acción contenida en el código, usando como valor de la variable el texto que el usuario ingresó.
#### crear variables y variables de entorno set
https://norfipc.com/inf/variables-entorno.html
SABER LAS VARIABLES DE ENTORNO DEL SISTEMA

````
SET
````
usar una variable de entorno
````
ECHO %PUBLIC%
````
#### Realizar operaciones matemáticas con archivos batch

Mediante archivos batch también podemos realizar operaciones como multiplicar, sumar, dividir, etc. usando el modificador /A, por ejemplo de la siguiente forma hacemos la operación: 2 + 43 = 45.
````
SET numero1 = 2
SET numero2 = 43
SET /A suma = %numero1% + %numero2%
echo %suma%
pause
exit
````
Usando el modificador /A, lo que quede a la derecha del signo igual (=). se consideran expresiones numéricas a evaluar. Su pueden usar los siguientes caracteres como operadores matemáticos:
````
+ - * / %
````
Consejos y tips para la creación y uso de los archivos batch

### Tips y consejos
- Para comentar, es decir escribir comentarios dentro del código de tus batch, antepone REM al comienzo de la línea, esta no será interpretada por la consola.
- También es posible utilizar dos puntos dobles "::"(sin las comillas).
- Cuando al ejecutar un batch, este se cierre y te quedas con la duda de lo que sucedió, agrega PAUSE antes del final del código, lo que te permitirá saber si hay algún error, también puedes insertar varios en diferentes líneas, e ir ejecutándolo por partes.
- Al igual que PAUSE puedes utilizar PAUSE>NUL, entonces no se mostrará el famoso mensaje "Presione una tecla para continuar…."

### Como usar redireccionadores en los archivos batch
-   Puedes combinar varios comandos en un archivo batch intercalando el signo |, esto indica que se ejecutará el segundo comando utilizando el resultado del primero, un ejemplo es:
  ````
ipconfig|FINDSTR /C:"Máscara de subred"
````
Esta línea abre IPCONFIG y a continuación busca la cadena Mascara de subred y si existe muestra el resultado.
-   Si empleas dos barras el segundo comando se ejecutará solo si el primero falla, por ejemplo:
````
COPY D:\NOEXISTE C:\ || ECHO No se pudo copiar el archivo
````
Para redireccionar un primer comando a un segundo, intercala un amspersand entre ambos, pero si usas dos caracteres estas condicionando la ejecución del segundo al éxito del primero, es como insertar la frase "Si es así, entonces", por ejemplo:
````
START calc.exe && ECHO La calculadora se inicio con éxito
````
Para direccionar el resultado de un comando a un archivo de texto utiliza:
````
Comando > archivo.txt
````

Si deseas seguir agregando datos al mismo archivo creado utilizando otro comando utiliza:
````
Comando2 >> archivo.txt
````
 Para pasar el contenido de un archivo de texto a un comando usa:
````
Comando < archivo.txt
````
Para mostrar un archivo de texto en pantalla usa:
TYPE texto.txt

Algunos ejemplos, se explican solos:

DIR C:\ >Lista_de_C.txt & DIR D:\ >Lista_de_D.txt

FIND /i "Alberto" < texto.txt > resultado.txt

MEM /C >> MemLog.txt

DATE /T >> MemLog.txt

TYPE texto.txt > texto.html

Donde quiera que haya una cadena que tenga espacios tienes que utilizar las comillas, en las rutas a los archivos también es recomendado utilizarlas.

Cuando la ruta a un archivo determinado es muy complicada, lo más fácil es dar clic en las Propiedades del archivo y copiar la ruta que allí aparece.

 

También para eso puedes instalar una clave del registro que agrega al menú contextual del mouse la facilidad de que al hacer clic en un archivo del explorador y seleccionar "Copiar Ruta" puedes pegarla en tu batch.

Agregar en el menú contextual la opción de Copiar la ruta del archivo o carpeta

Para crear un mensaje en un batch, es decir una ventana que muestra una indicación o comentario al usuario, escribe en el batch lo siguiente:
````
MSG * Este Es Mi Mensaje
````
 Para que se muestre en el batch la fecha y la hora utiliza las variables DATE y TIME de la siguiente forma:
````
@echo off
echo Fecha:%date%
echo Hora:%time%
````
Para detener un proceso o programa determinado averigua su nombre o identidad exacta en el Administrador de tares y utiliza:
taskkill /im /f programaespecifico.exe
taskkill /f /im wmplayer.exe
taskkill /f /im explorer.exe

En el caso del explorer se utiliza mucho para poder solucionar los bloqueos del explorador de Windows, al cerrarse el explorador para iniciarlo abre el administrador de tareas, selecciona Nueva tarea y escribe:
Start explorer.exe

Para ejecutar los comandos no siempre es necesario abrir la consola, puedes ejecutarlos introduciéndolos directamente en el cuadro que se encuentra en Inicio, solo anteponiendo CMD o CMD.EXE de las siguientes dos formas:
Introduce CMD /K comando+ opción y oprime Enter.
Se ejecutará el comando con la opción y dejara abierta la ventana de cmd.
Introduce CMD /C comando+ opción y oprime Enter.
Se ejecutará el comando con la opción y cerrará la ventana de cmd al terminar.
Dos sencillos ejemplos:

CMD /K IPCONFIG /ALL
CMD /C START http://google.com
 
Ojala que este artículo le haya interesado y le haya servido de alguna ayuda y estímulo para introducirse en este mundo tan interesante y práctico.



#### Fuentes:
- https://norfipc.com/utiles/tutorialbatch1.html
- https://todohacker.com/tutoriales/lenguaje-batch
- http://www.cristalab.com/tutoriales/programacion-batch-con-archivos-.bat-c48410l/
- http://www.cristalab.com/tutoriales/programacion-avanzada-de-archivos-en-lotes-.bat-c49576l/




