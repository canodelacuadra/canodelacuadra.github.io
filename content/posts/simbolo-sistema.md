---
layout: "post"
date: "2020-1-7-02"
title: "Uso de la CLI en Windows (II)"
cover: "cmd-herramienta.PNG"
categories: ['LíneaDeComandos']
---
Conocer los comandos de la CLI y usar herramientas de calidad  puede hacernos más productivos y también pueden abrir las puertas a varios enfoques de la automatización que son mucho más prácticos con las interfaces textuales (CLI o editores de texto) que con las aplicaciones GUI.
Puede mejorar al realizar tareas repetitivas en GUI, hasta el punto de que sus múltiples clics se escuchen como uno solo. El problema es que esto no mejorará la eficiencia de un script especializado. Además, realizar las mismas operaciones de forma manual introduce tanto una carga cognitiva adicional como una mayor posibilidad de error humano. Como de costumbre, dependemos de computadoras para manejar tareas que los humanos pueden considerar aburridas, repetitivas o abrumadoras.
En este artículo nos centramos en dos que vienen con los sistemas operativos windows CMD y PowerShell

## Objetivos
 - introducirnos en el manejo de la línea de comandos
 - crear directorios y archivos con CMD o PowerShell
 - renombrar directorios y archivos, borrar, copiar y muchas cosas más. 
## El CMD o  Símbolo del sistema
Símbolo del sistema es una aplicación de intérprete de línea de comandos disponible en la mayoría de los sistemas operativos Windows. Se utiliza para ejecutar comandos ingresados en modo textual. A  veces también se lo denomina shell de comandos o indicador de cmd, o incluso por su nombre de archivo, cmd.exe.

El Símbolo del Sistema también es conocido como Command Prompt o CMD, pero a veces también se lo denomina Shell de Comandos o Símbolo del Sistema CMD, y está disponible en la mayoría de los sistemas operativos Windows.

## Funciones del CMD

El CMD es una forma de realizar acciones en nuestro equipo comandos de texto.
Esta herramienta puede servir para: 

- administración de archivos
- instalación de sofware
- Ejecución de software
- Eliminación de sofware
- Procesamiento por lotes en Batch
- Monitoreo y configuración del sistema operativo

El CMD se puede utilizar para escribir comandos y ejecutarlos, lo que puede ser especialmente útil para automatizar tareas mediante secuencias de comandos y archivos por lotes, así como para llevar a cabo funciones administrativas avanzadas y solucionar muchos problemas en Windows.
A veces se hace referencia incorrectamente al Símbolo del Sistema como “Símbolo del Sistema DOS” o como el propio MS-DOS. Es un programa de Windows que copia varias de las capacidades del CMD disponibles en MS-DOS, aunque en efecto no es MS-DOS.

### Ejecutar CMD como administrador
Para abrir esta herramienta, simplemente sitúate en el buscador Cortana (en Windows 10) y escribe “cmd”. En los resultados, haz click “Símbolo del Sistema”.

Lo ideal es que hagas click con el botón derecho del ratón en el icono “cmd” y selecciones “Ejecutar como administrador” para asegurarte de que dispones de los derechos necesarios para ejecutar los comandos que estás a punto de introducir.

La línea de comandos (prompt DOS) se muestra como una ventana negra que muestra la ruta del directorio actual si se está ejecutando como administrador), seguida de una flecha de verificación (signo >).
````
c:\Windows\System32 >

 ````
Es importante tener en cuenta que muchos comandos solo se pueden ejecutar si el Símbolo del Sistema se ejecuta como administrador.
También hay una opción de ingresar al CMD desde el Administrador de Tareas, pulsando:
``
Ctrl+Shift+Esc
``
Y a continuación, seleccionando Archivo > Ejecutar Nueva tarea, e ingresando “cmd” en el cuadro de diálogo.

### Cómo funciona la línea de comandos CMD
El Símbolo del Sistema funciona a un nivel más básico que Windows, pero esto no quiere decir que no sea potente, ni mucho menos. Esto significa que ganas más control sobre el PC y te comunicas con este de una manera más directa.

Aparte de los comandos comunes (dir, cd, copy, del), se pueden utilizar otros más avanzados para acceder a partes del sistema operativo que no están disponibles en la interfaz gráfica de usuario.

Esta aplicación se puede utilizar para realizar una amplia variedad de funciones, y a menudo utilizarla es más rápido o incluso la única manera de acceder a cierta información o funciones.

Además de los comandos mencionados anteriormente (que muestran listados de directorios de archivos, ingresan a directorios, copian archivos y los eliminan), existen otros comandos útiles como 
- ipconfig (que muestra la dirección IP de un equipo),
-  tracert (que muestra información sobre cada paso entre el equipo y un host de destino en otro lugar de internet, como un sitio web) 
-  y el comprobador de archivos del sistema (sfc), que encuentra los archivos dañados o perdidos y los reemplaza automáticamente mediante copias en caché guardadas por Windows.

Para utilizar el CMD, debes introducir un comando válido junto con cualquier parámetro opcional. El CMD ejecuta el comando tal y como se ha introducido y realiza cualquier tarea o función que esté diseñada para realizar en Windows.

Existe un gran número de comandos en el CMD, aunque su disponibilidad va a variar de un sistema operativo a otro.

Los comandos deben introducirse exactamente en el Símbolo del Sistema. Una sintaxis incorrecta o un error ortográfico podría causar que el comando falle o empeore, podría ejecutar el comando equivocado o ejecutar el comando adecuado pero de forma incorrecta.

### Windows Powershell es el sucesor
El CMD ha existido desde siempre, pero con Windows 10, Microsoft está intentando hacer de PowerShell la línea de comandos principal del sistema operativo.

Esto ofrece un conjunto muy rico de comandos (llamados cmdlets) que están más integrados con Windows y la mayoría de los productos de Microsoft. Estos cmdlets son funciones que existen dentro de DLLs (librerías del sistema) compiladas en un sistema. Su propósito principal es no solo reemplazar el Símbolo del Sistema, sino también los archivos por lotes y los scripts VB.(Visual Basic)

###  Disponibilidad del CMD y de Powershell
El Símbolo del Sistema se encuentra habilitado en todos los sistemas operativos basados en Windows NT, entre los que se encuentran Windows 10, Windows 8, Windows 7, Windows Vista, Windows 2000 y Windows Server 2012/2008/2003 y Windows XP.

Windows PowerShell, un intérprete de línea de comandos más avanzado disponible en las últimas versiones de Windows, complementa de diversas formas la ejecución de comandos disponibles en el Símbolo del Sistema. Es posible que Windows PowerShell sustituya al CMD en una versión futura.

### Cómo usar el CMD en Windows 10
Con estos comandos aprenderás a moverte por el CMD, buscar archivos, manipularlos y ejecutar diferentes comandos importantes. Ten en cuenta que hay más de 100 comandos diferentes que se han utilizado en MS-DOS y la línea de comandos de Windows.

### Entendiendo el CMD
Si abrimos el CMD sin declararnos administrador nos abre el cmd en el directorio del usuario

En el siguiente ejemplo, el usuario es Lucas, por lo que nuestro prompt es 
````
C:\Usuario\Lucas>
````

Este aviso nos dice que estamos en la unidad C: (la letra predeterminada del disco duro) y actualmente en el directorio Lucas, que es un subdirectorio del directorio Users.

Consideraciones previas:

- El CMD de Windows no distinguen entre mayúsculas y minúsculas.
- Los archivos y directorios mostrados en  el shell gráfico de Windows  se encuentran obviamente  en la línea de comandos.
- Cuando trabajes con un archivo o directorio  con un espacio, rodéalo entre comillas. Por ejemplo, el directorio Mis Documentos sería “Mis Documentos” cuando se escribe en la línea de comandos.
- Todos los comandos del Símbolo del Sistema tienen opciones, que son conmutadores y comandos adicionales que se pueden añadir después del comando.
### Ayuda con comandos /?
Si necesitas ayuda con cualquier comando, escribe /? después del comando. Por ejemplo, “dir /?” daría las opciones disponibles para el comando “dir”.

#### Listado de los archivos: comando dir
Escribe “dir” en el CMD para listar archivos en el directorio actual. Te aparecerá una lista con todos los archivos del directorio donde te encuentres.

Como se puede ver, la lista incluye mucha información útil incluyendo la fecha y hora de creación, directorios ``(<DIR>)``, y el nombre del directorio o archivo.

Como hemos dicho antes, todos los comandos  tienen opciones, que son conmutadores y comandos adicionales que se pueden añadir después del comando.

````
dir /?
````


Por ejemplo, con el comando “dir” puedes escribir “dir /p” para listar los archivos y directorios en el directorio actual en una página a la vez. Este conmutador es útil para ver todos los archivos y directorios de un directorio que tenga docenas o cientos de archivos.

El comando “dir” también puede usarse para buscar archivos y directorios específicos usando comodines. Por ejemplo, si solo deseas listar archivos o directorios que empiecen con la letra “M”, puedes escribir 

``
dir m*
``
siendo el asterisco cualquier cosa que empiece por m.

#### Cómo ingresar a un directorio: comando CD
Cd muestra el directorio actual o cambia de directorio. Sirve para saber dónde estamos. 

Para acceder al directorio superior 
````
cd ..
````
Para acceder al directorio inferior cd más el nombre de directorio o cd más la ruta. Movámonos a la siguiente ruta
````
cd C:\Windows
````
Para movernos a otro directorio debemos usar el comando “cd”, así que para movernos al directorio Windows escribimos “cd windows” y presionamos Enter. Una vez que te hayas movido a un nuevo directorio, el prompt debería cambiar, así que en nuestro ejemplo, el prompt es ahora`` C:\Windows>``. Ahora, en este directorio, podrás ver qué archivos se encuentran aquí tipeando el comando “dir” de nuevo.
En este directorio de Windows podrían 22 archivos y 73 directorios, que representan diferentes tipos de archivos. En la interfaz gráfica de Windows esto es igual, solo que está representado de manera más gráfica, con iconos que ayudan a identificar el tipo de archivo.

En la línea de comandos, lo mismo se logra con las extensiones de archivo. Por ejemplo, “contactos.txt” es un archivo de texto porque tiene la extensión txt. Time.mp3 es un archivo de música MP3 y minecraft.exe es un archivo ejecutable.

A la mayoría de los usuarios solo le interesarán los archivos ejecutables, que como se mencionó anteriormente, es un archivo que termina con .exe y también son archivos que terminan con .com y .bat.

Cuando el nombre de estos archivos se escribe en la línea de comandos, el programa se ejecuta, lo que es lo mismo que hacer doble click en un archivo desde la interfaz de Windows. Por ejemplo, si queremos ejecutar **explorer.exe** tecleando “explorer” en el prompt ejecutaremos ese programa.

Ten en cuenta que si el archivo ejecutable que estás intentando ejecutar no está en el directorio actual, obtendrás un error. A menos que hayas establecido una ruta para el directorio que contiene el archivo ejecutable, que es la forma en que la línea de comandos encuentra los comandos externos. (variables de entorno PATH)
Si deseas volver al directorio raíz, teclea “cd \” desde donde te encuentres para dirigirte a C:\>. irías al documento raiz
### Moverse de unidad de almacenamiento
En algunas circunstancias, es posible que desees copiar o listar archivos en otra unidad. Para cambiar de unidad en la línea de comandos de Windows, escribe la letra de la unidad seguida de do s puntos.

Por ejemplo, si la unidad de DVD es la unidad D, escribe “d:” y pulsa la tecla Enter. Si la unidad existe, el indicador cambiará a esa letra de unidad.
````
D:
````

#### Leer contenido de un archivo: Comando Type 
Si deseas ver el contenido de un archivo, podemos utilizar el comando ``type`` en las versiones de 64 bits  o  “edit” en las versiones de 32 bits . Aunque también podemos hacerlo mediante un programa intermedio ``start notepad`` 

Por ejemplo, si quisiéramos leer el contenido  del archivo de registro hijackthis.log escribiríamos  en el prompt
````
type hijackthis.log
````
 Para las versiones de 32 bits de Windows que no admiten este comando puedes utilizar ``edit``. También puedes usar el comando “start”, por ejemplo, escribe lo siguiente  para abrir el archivo en el Bloc de Notas.
````
start notepad archivo.txt
````


####  Creación de un directorio
Ahora ya estamos listos para comenzar a crear nuevos directorios. Para crear un directorio en el directorio actual vamos a usar el comando “mkdir”.

Por ejemplo, crea un directorio llamado “test” escribiendo “mkdir test” en el prompt. Si se ha creado correctamente, estarás en la consulta de comandos sin mensaje de error. Después de crear el directorio, puedes ingresar al mismo usando el comando “cd”.

#### Cómo crear un archivo en el CMD: comandos:  copy con y echo >
Aunque el comando copy es para copiar archivos en otra ubicación también podemos utilizar ``copy con`` para crearlos
Puedes crear un nuevo archivo desde la línea de comandos usando el comando “copy con”, seguidos por el nombre de archivo. 
````
COPY CON archivo1.txt
````
A continuación, será posible añadir el contenido de dicho archivo, y pulsando la combinación de teclas Ctrl+Z + enter  se finalizará. 
#### Cómo crear un archivo en el CMD: comandos:  echo * > archivo
También se puede hacer con echo, Echo muestra mensajes por impresora y luego podemos mediante > redirigirá la salida a un archivo
````
echo > index.html
````


### Mover  archivo
Para mover un archivo, debes usar el comando “move”. En este ejemplo, movemos el archivo test.txt al directorio ProfesionalReview.
Move "Dirección del archivo" "Nueva dirección"

````
move test.txt profesionalreview
````



#### copiar un un archivo comando: Copy
Sirve para copiar uno o más archivos a otro destino.
Su sintaxis es la siguiente:
Copy "Dirección del archivo" "Nueva dirección"
````
Copy "C:\archivo.txt" "C:\archivo2.txt"
````

#### Renombrar un archivo. Comando rename
Para esta acción se utiliza el comando “rename”. Si quieres cambiar el nombre al archivo test.txt, debes hacer lo siguiente:

````
rename test.txt test2.txt
````
De esta manera, ahora el archivo se llama test2.txt

Cuando cambies el nombre de un archivo, asegúrate de que tenga la misma extensión. Si tuvieras que renombrar el archivo.bat a un archivo.txt, ya no será un archivo ejecutable, sino solo un archivo de texto. Además, ten en cuenta que renombrar el archivo a una extensión diferente no hace la conversión a la nueva extensión del archivo. Por ejemplo, si vas a colocar la extensión mp3 a un archivo, en Windows parecerá que es un archivo de música mp3, pero no reproducirá ningún sonido.
#### Renombrar un directorio
Para esto se utiliza el mismo comando que para renombrar un archivo, quedando así la sintaxis:
````
rename windows office

````
Esto cambia el nombre del directorio Windows a Office.

#### Eliminar un archivo. Comando DEL
Para borrar un arhivo desde el Símbolo del Sistema usamos el comando “del”.
````
del test.txt
````
Si todo salió bien, regresarás a la línea de comandos sin errores, y el comando “dir” ya no mostrará ese archivo.

Además, al eliminar archivos, también puedes utilizar comodines para eliminar varios archivos a la vez. Por ejemplo, si el directorio contiene varios archivos de imagen JPG, puedes escribir:
````
del *.jpg

````
Esto eliminará todos los archivos que terminen con la extensión de archivo JPG.



#### Eliminar un directorio
Para eliminar un directorio desde el Símbolo del Sistema utilizamos el comando “rmdir”.
````
rmdir windows
````
Si el directorio que estás intentando eliminar contiene archivos o directorios, recibirás un error. Para evitar este error utiliza la opción /s. Así se elimina todo el contenido de este directorio.

````
rmdir /s windows
````
#### Ejecutar un programa
Cualquier archivo que sea un archivo ejecutable puede ejecutarse desde la línea de comandos escribiendo el nombre del archivo. Por ejemplo, si has listado archivos usando el comando dir y ves un archivo llamado “miarchivo.exe” escribiendo “miarchivo” en la línea de comandos se ejecuta ese programa.

#### Cómo listar los comandos disponibles
Después de obtener una buena comprensión del uso de la línea de comandos desde los pasos mostrados arriba, puedes pasar a otros comandos disponibles escribiendo ayuda en la línea de comandos.

Escribe “help” para ver una lista de los comandos disponibles con una breve descripción de cada uno de ellos.

#### Limpiar consola, comando  Cls

#### Cerrar o salir de la ventana de la línea de comandos
Una vez que hayas terminado con la línea de comandos de Windows, puedes escribir exit para cerrar la ventana.

Conclusión y palabras finales acerca del CMD 
Ahora ya tienes los conocimientos suficientes sobre el Símbolo del Sistema, cómo funciona y sus distintos comandos.










