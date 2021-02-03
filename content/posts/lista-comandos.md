---
layout: "post"
date: "2020-7-06"
title: "Tablas de comandos CLI, CMD y bash (Anexo)"
tags: ['LíneaDeComandos']
---

Depende en el entorno del sistema operativo que nos movamos pueden variar los comandos de la CLI. Esta tabla pretende ser un anexo de ayuda por si queremos que nos sirva de referencia y tenerlos ordenados y comparados.

> Se puede ir actualizando y mejorando porque son muchos... ¡Hay que probarlos! Y si alguno no funciona, buscar alternativas

### shell Bash o cmd
**CMD** es  la CLI  habitual de  Windows . Te permite, por ejemplo, usar todas las funciones de Git a través de la línea de comandos. Útil si ya está familiarizado con cmd de Windows y solo trabaja en Windows.

**Git Bash** emula un entorno de *shell bash de Unix* en Windows. Le permite usar todas las funciones de git en la línea de comandos más la mayoría de los comandos estándar de Unix . Útil si estás acostumbrado a Linux y quieres mantener los mismos hábitos o si por ejemplo quieres utilizar el sistema de rutas estilo UNIX que es el habitual en los servidores web.

Depende de nosotros decidir cuál se quiere usar. Si no sabes cuál elegir entre Git Bash y Git CMD, elegiría Git Bash ya que bash es una herramienta realmente útil para aprender para creación de scripts por ejemplo o porque muchos tutoriales en la web nos aparecen en este entorno.




## lista comandos más habitules comparando unix con windows

| **Acción**                                                  | **Linux** | **Windows** | **Ejemplo Linux**                     |
| ----------------------------------------------------------- | --------- | ----------- | ------------------------------------- |
| Cambiar a un directorio superior con una direccion relativa | cd ..     | cd ..       | cd ..                                 |
| Cambiar a un directório con ruta absoluta                   | cd        | cd          | cd /directory/directory               |
| Crear un directório                                         | mkdir     | mkdir       | mkdir directory                       |
| Listar los ficheros de un directorio                        | ls        | dir         | ls                                    |
| Visualiza la posición actual en el sistema de archivos      | pwd       | chdir       | pwd                                   |
| Copiar ficheros                                             | cp        | copy        | cp thisfile.txt /home/thisdirectory   |
| Mover ficheros                                              | mv        | move        | mv thisfile.txt /home/thisdirectory   |
| Borra ficheros                                              | rm        | del         | rm thisfile.txt                       |
| Compara los contenidos de ficheros                          | diff      | fc          | diff file1 file2                      |
| Busca una cadena de texto en un fichero                     | grep      | find        | grep this word or phrase thisfile.txt |
| Visualiza contenido de un fichero                           | more      | less        | more thisfile.txt                     |
| Edita ficheros con un editor sencillo                       | pico      | notepad     | pico thisfile.txt                     |
| Visualiza la ayuda de comando                               | man([c])  | command/?   | man command                           |

### Comandos windows (orden alfabético)
Para sabe mas nombre de comnado: comando/?

| **comando**  | **descripción**                                                                                  | **ejemplo** |
| ------------ | ------------------------------------------------------------------------------------------------ | ----------- |
| ASSOC        | Muestra o modifica las asociaciones de las extensiones de archivos.                              |             |
| AT           | Planifica comandos y programas para ejecutarse en un equipo.                                     |             |
| ATTRIB       | Muestra o cambia los atributos del archivo.                                                      |             |
| BREAK        | Establece o elimina la comprobación extendida de Ctrl+C.                                         |             |
| CALCS        | Muestra o modifica las listas de control de acceso (ACLs) de archivos.                           |             |
| CALL         | Llama a un programa por lotes desde otro.                                                        |             |
| CD           | Muestra el nombre del directorio actual o cambia a otro directorio.                              |             |
| CHCP         | Muestra o establece el número de página de códigos activa.                                       |             |
| CHDIR        | Muestra el nombre del directorio actual o cambia a otro directorio.                              |             |
| CHKDSK       | Comprueba un disco y muestra un informe de su estado.                                            |             |
| !CHKNTFS     | Muestra o modifica la comprobación de disco al iniciar.                                          |             |
| CLS          | Borra la pantalla.                                                                               |             |
| CMD          | Inicia una nueva instancia del intérprete de comandos de Windows                                 |             |
| COLOR        | Establece los colores de primer plano y fondo predeterminados de la consola.                     |             |
| COMP         | Compara el contenido de dos archivos o un conjunto de archivos.                                  |             |
| COMPACT      | Muestra o cambia el estado de compresión de archivos en particiones                              |             |
| NTFS.CONVERT | Convierte volúmenes FAT a volúmenes NTFS. No puede convertir la unidad actual                    |             |
| COPY         | Copia uno o más archivos a otro lugar.                                                           |             |
| DATE         | Muestra o establece la fecha.                                                                    |             |
| DEL          | Elimina uno o más archivos.                                                                      |             |
| DIR          | Muestra una lista de archivos y subdirectorios en un directorio.                                 |             |
| DISKCOMP     | Compara el contenido de dos disquetes.                                                           |             |
| DISKCOPY     | Copia el contenido de un disquete en otro.                                                       |             |
| DOSKEY       | Edita líneas de comando, memoriza comandos y crea macros.                                        |             |
| ECHO         | Muestra mensajes, o activa y desactiva el eco.                                                   |             |
| ENDLOCAL     | Termina la búsqueda de variables de entorno del archivo por lotes.                               |             |
| ERASE        | Elimina uno o más archivos.                                                                      |             |
| EXIT         | Sale del programa CMD.EXE (interfaz de comandos).                                                |             |
| FC           | Compara dos archivos o conjunto de archivos y muestra las diferencias entre ellos.               |             |
| FIND         | Busca una cadena de texto en uno o más archivos.                                                 |             |
| FINDSTR      | Busca cadenas de texto en archivos.                                                              |             |
| FOR          | Ejecuta un comando para cada archivo en un conjunto de archivos.                                 |             |
| FORMAT       | Da formato a un disco para usarse con Windows.                                                   |             |
| FTYPE        | Muestra o modifica los tipos de archivo utilizados en una asociación de archivos.                |             |
| GOTO         | Direcciona el intérprete de comandos de Windows a una línea en un programa por lotes.            |             |
| GRAFTABL     | Permite a Windows mostrar un conjunto de caracteres extendidos en modo gráfico                   |             |
| HELP         | Proporciona información de ayuda para los comandos de Windows.                                   |             |
| IF           | Ejecuta procesos condicionales en programas por lotes.                                           |             |
| LABEL        | Crea, cambia o elimina la etiqueta del volumen de un disco.                                      |             |
| MD           | Crea un directorio.                                                                              |             |
| MKDIR        | Crea un directorio.                                                                              |             |
| MODE         | Configura un dispositivo de sistema.                                                             |             |
| MORE         | Muestra la información pantalla por pantalla.                                                    |             |
| MOVE         | Mueve uno o más archivos de un directorio a otro en la misma unidad.                             |             |
| PATH         | Muestra o establece una ruta de búsqueda para archivos ejecutables.                              |             |
| PAUSE        | Suspende el proceso de un archivo por lotes y muestra un mensaje.                                |             |
| POPD         | Restaura el valor anterior del directorio actual guardado por PUSHD.                             |             |
| PRINT        | Imprime un archivo de texto.                                                                     |             |
| PROMPT       | Cambia el símbolo de comandos de Windows.                                                        |             |
| PUSHD        | Guarda el directorio actual y después lo cambia.                                                 |             |
| RD           | Elimina un directorio.                                                                           |             |
| RECOVER      | Recupera la información legible de un disco dañado o defectuoso.                                 |             |
| REM          | Graba comentarios en archivos por lotes o CONFIG.SYS.                                            |             |
| REN          | Cambia el nombre de uno o más archivos.                                                          |             |
| RENAME       | Cambia el nombre de uno o más archivos.                                                          |             |
| REPLACE      | Reemplaza archivos.                                                                              |             |
| RMDIR        | Elimina un directorio.                                                                           |             |
| SET          | Muestra, establece o elimina variables de entorno de Windows.                                    |             |
| SETLOCAL     | Inicia la localización de cambios del entorno en un archivo por lotes.                           |             |
| SHIFT        | Cambia posición de modificadores reemplazables en archivos por lotes.                            |             |
| SORT         | Ordena las entradas.                                                                             |             |
| START        | Inicia otra ventana para ejecutar un programa o comando.                                         |             |
| SUBST        | Asocia una ruta de acceso con una letra de unidad.                                               |             |
| TIME         | Muestra o establece la hora del sistema.                                                         |             |
| TITLE        | Establece el título de la ventana de una sesión de CMD.EXE.                                      |             |
| TREE         | Muestra gráficamente la estructura de directorios de una unidad o ruta de acceso.                |             |
| TYPE         | Muestra el contenido de un archivo de texto.                                                     |             |
| VER          | Muestra la versión de Windows.                                                                   |             |
| VERIFY       | Comunica a Windows si debe comprobar que los archivos se escriben de forma correcta en un disco. |             |
| VOL          | Muestra la etiqueta del volumen y el número de serie del disco.                                  |             |
| XCOPY        | Copia archivos y árboles de directorios.                                                         |             |

