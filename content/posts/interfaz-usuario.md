---
date: "2020-7-01"
title: "Interfaces de usuario y  línea de comandos (I)"
cover: "interfaces-de-usuario.png"
categories: ["LíneaDeComandos", " usabilidad"]
---

Las **herramientas de línea de comandos** son útiles que _diseñador o desarrollador web_ debería conocer y manejar en mayor o menor medida y llevarlas consigo en su maletín profesional. A primera vista pueden parecernos herramientas anticuadas, complejas, diseñadas para expertos informáticos altamente cualificados pero un acercamiento y comprensión básica de las mismas puede demostrar qué fáciles, necesarias, potentes y útiles que pueden llegar a ser.

> Saber qué son exactamente, qué se puede hacer con ellas, en qué entornos son primordiales y cómo utilizarlas es el objeto de esta serie de artículos.

En este artículo nos introduciremos en algunos conceptos:

1.  El shell de los sistemas operativos
2.  Evolución de las interfaces de usuario Shell CLI y Shell Gui
3.  Las cli y las gui en Unix y Windows

## Introducción a los SHELL de los diferentes sistemas operativos

Cualquier dispositivo (ordenador, smartphone, smarttv...) o de red (routers...) conectado a Internet requieren un sistema operativo (SO) que los ayude a realizar sus funciones.

Al encender una computadora se carga el Sistema Operativo, por lo general desde una unidad de disco, en la RAM.

La parte del código del SO que interactúa directamente con el hardware de la computadora se conoce como **núcleo** o kernel.

La porción que interactúa con las aplicaciones y el usuario se conoce como **“shell”**.

> En informática , un shell es una **interfaz de usuario para acceder a los servicios de un sistema operativo** . En general, los shells del sistema operativo utilizan una interfaz de línea de comandos (CLI) o una interfaz gráfica de usuario (GUI), según el rol de la computadora y la operación particular. Se llama `shell`(cáscara) porque es la capa más externa, alrededor del núcleo del sistema operativo. https://en.wikipedia.org/wiki/Shell_(computing)

El usuario puede interactuar con el shell mediante la interfaz de línea de comandos (CLI, command-line interface) o la interfaz gráfica de usuario (GUI, graphical user interface).

![esquema shell de un sistema operativo](/images/esquema-shell.png)

Al emplear la CLI, el usuario interactúa directamente con el sistema en un entorno basado en texto introduciendo comandos con el teclado en una ventana de petición de entrada de comandos. El sistema ejecuta el comando y, por lo general, proporciona una respuesta en forma de texto.

![herrmienta cli de windows](/images/cmd-herramienta.PNG)

La interfaz GUI permite que el usuario interactúe con el sistema en un entorno que utiliza imágenes gráficas, formatos multimedia y texto. Las acciones se llevan a cabo al interactuar con las imágenes en la pantalla. La GUI es más fácil de usar y requiere un menor conocimiento de la estructura de comandos para utilizar el sistema. Por este motivo, muchas personas prefieren los entornos GUI.
![Herramienta Gui de windows](/images/herramienta-gui.png)

> Muchos sistemas operativos ofrecen tanto una GUI como una CLI.

A la mayoría de los sistemas operativos de los dispositivos finales, incluidos MS Windows, MAC OS X, Linux, Apple iOS y Android, entre otros, se accede mediante una GUI.

El sistema operativo de los routers domésticos generalmente se denomina “firmware”. El método más frecuente para configurar un router doméstico consiste en utilizar un explorador Web para acceder a una GUI fácil de usar. La mayoría de los routers domésticos habilitan la actualización del firmware a medida que se detectan nuevas características o vulnerabilidades de seguridad.

Los dispositivos de red de infraestructura utilizan un sistema operativo de red. El sistema operativo de red que se utiliza en los dispositivos Cisco se denomina Sistema operativo Internetwork (IOS, Internetwork Operating System). “Cisco IOS” es un término genérico para la colección de sistemas operativos de red que se utilizan en los dispositivos de red Cisco. Cisco IOS se utiliza en la mayoría de los dispositivos Cisco, independientemente del tamaño o el tipo de dispositivo. El método más frecuente para acceder a estos dispositivos consiste en utilizar una CLI.

## Evolución de las interfaces de usuario.

![Evolución de las interfaces de usuario](/images/interfaces-de-usuario.png)

Las interfaces podríamos distinguirlas si son de hardware o software:

- Interfaces de hardware: Serían el conjunto de dispositivos que permiten al usuario intercambiar datos con la máquina, ya sea introduciéndolos (pulsadores, botones, teclas, reguladores, palancas, manivelas, perillas) o leyéndolos (pantallas, altavoces, diales, medidores, marcadores, instrumentos).
- Interfaces de software: Son programas o aplicaciones, que permiten expresar las órdenes a la computadora o visualizar su respuesta.

Atendiendo a como el usuario puede interactuar con una interfaz, existen varios tipos de interfaces de usuario:

- Interfaz de línea de comandos (Command-Line Interface, CLI): Interfaces alfanuméricas (intérpretes de comandos) que solo presentan texto.
- Interfaces gráficas de usuario (Graphic User Interface, GUI): Permiten comunicarse con la computadora de forma rápida e intuitiva representando gráficamente los elementos de control y medida.
- Interfaz natural de usuario (Natural User Interface, NUI): Pueden ser táctiles, representando gráficamente un «panel de control» en una pantalla sensible al tacto que permite interactuar con el dedo de forma similar a si se accionara un control físico; pueden funcionar mediante reconocimiento del habla, como por ejemplo Siri; o mediante movimientos corporales, como es el caso de Kinect.

### Valoración de las interfaz

> ¿las interfaces NUI son el futuro?

El principal objetivo de una interfaz de usuario es que este pueda comunicar información a través de ella hacia algún tipo de dispositivo o sistema.
Conseguida esta comunicación, el siguiente objetivo es el que dicha comunicación se desarrolle de la forma más fácil y cómoda posible para las características del usuario que utiliza el servicio. **Pero también que sea eficaz y eficiente.**

La mayoría de los **shells del sistema operativo ** se dividen en dos categorías: línea de comandos y gráficos. Los shells de línea de comando proporcionan una interfaz de línea de comando (CLI) al sistema operativo, mientras que los shells gráficos proporcionan una interfaz gráfica de usuario (GUI).

Otras posibilidades, aunque no tan comunes, incluyen la interfaz de usuario de voz y diversas implementaciones de una interfaz de usuario basada en texto (TUI) que no son CLI.

Los **shells CLI** requieren que el usuario esté familiarizado con los comandos y su sintaxis de llamada , y que comprenda los conceptos sobre el `lenguaje de scripting específico del shell`(por ejemplo, bash ).

Los `shells gráficos` suponen una curva de aprendizaje baja para los usuarios principiantes de computadoras y se caracterizan por ser fáciles de usar. Dado que también vienen con ciertas desventajas, la mayoría de los sistemas operativos habilitados para GUI también proporcionan shells CLI.

Los méritos relativos de los shells basados ​​en CLI y GUI a menudo se debaten.

## Las CLI y GUI en los diferentes sistemas operativos

![Linux cli y linux gui](/images/Linux-Cli-vs-Gui.png)

Los diferentes sistemas operativos brindan diversos servicios a sus usuarios, incluidos

- **administración de archivos** (crear directorios, archivos, mover, borrar...),
- **administración de procesos** (ejecución de aplicaciones... )
- **procesamiento por lotes** (batch, script de shell...)
- **monitoreo y configuración** del sistema operativo.

Un dispositivo puede tener múltiples shells, No existe un shell exclusivo para un sistema operativo. Los shells son en realidad aplicaciones especiales que usan la API del kernel de la misma manera que lo usan otros programas de aplicación. Un shell gestiona la interacción usuario-sistema solicitando a los usuarios que ingresen información, interpretando sus entradas y luego manejando una salida del sistema operativo subyacente. Dado que el shell del sistema operativo es en realidad una aplicación, **puede reemplazarse fácilmente** con otra aplicación similar, para la mayoría de los sistemas operativos.

Además de los shells que se ejecutan en sistemas locales, existen diferentes formas de hacer que los sistemas remotos estén disponibles para los usuarios locales. Dichos enfoques suelen denominarse acceso remoto o administración remota. Inicialmente disponible en mainframes multiusuario , que proporcionaban Interfaz de usuario basadas en texto para cada usuario activo simultáneamente por medio de un terminal de texto conectado al mainframe (ordenador principal) a través de un módem o línea telefónica , el acceso remoto se ha extendido a sistemas tipo Unix y Microsoft Windows.

- En sistemas tipo Unix, el protocolo **Secure Shell** generalmente se usa con shells basados ​​en texto pero también los túneles **SSH** (**S**ecure **Sh**ell) se pueden usar con interfaces gráficas de usuario (GUI) basadas en el sistema de ventanas X.
- En Microsoft Windows, el `Protocolo de escritorio remoto`se puede usar para proporcionar acceso remoto mediante GUI, y desde Windows Vista , `PowerShell Remote` se puede usar para acceso remoto basado en texto .

## Interfaz de línea de comandos CLI

Una interfaz de línea de comandos (CLI) es un shell del sistema operativo que utiliza caracteres alfanuméricos escritos en un teclado para proporcionar instrucciones y datos al sistema operativo de forma interactiva. Por ejemplo, un teletipo puede enviar códigos que representan pulsaciones de teclas a un programa de intérprete de comandos que se ejecuta en la computadora; el intérprete de comandos analiza la secuencia de pulsaciones de teclas y responde con un mensaje de error si no puede reconocer la secuencia de caracteres, o puede llevar a cabo alguna otra acción del programa, como cargar un programa de aplicación, enumerar archivos, iniciar sesión en un usuario y muchos otros.

### variedad de programas shell

Los sistemas operativos como UNIX tienen una gran variedad de programas shell con diferentes comandos, sintaxis y capacidades. Algunos sistemas operativos tenían un solo estilo de interfaz de comando; Los sistemas operativos de productos básicos, como MS-DOS, venían con una interfaz de comando estándar, pero a menudo también estaban disponibles interfaces de terceros, que proporcionaban características o funciones adicionales como menús o ejecución remota de programas.

### herramientas cli

Los **programas de aplicación** también pueden implementar una interfaz de línea de comandos. Por ejemplo, en sistemas similares a Unix, el programa telnet tiene una serie de comandos para controlar un enlace a un sistema informático remoto. Dado que los comandos para el programa están hechos de las mismas teclas que los datos que se envían a una computadora remota, se requieren algunos medios para distinguirlos. Se puede definir una secuencia de escape , utilizando una pulsación de tecla local especial que nunca se transmite pero siempre es interpretada por el sistema local. El programa se convierte en modal, cambiando entre comandos de interpretación desde el teclado o pasando pulsaciones de teclas como datos para procesar.

### secuencias de comandos

Una característica de muchos shells de línea de comandos es la capacidad de **guardar secuencias de comandos** para su reutilización. Un archivo de datos puede contener secuencias de comandos que la CLI puede seguir para que los escriba un usuario. Se pueden aplicar características especiales en la CLI cuando se llevan a cabo estas instrucciones almacenadas. Tales archivos por lotes(archivos de script) se pueden usar repetidamente para automatizar operaciones de rutina, como inicializar un conjunto de programas cuando se reinicia un sistema.

### estructura de programación shell

El uso de **shells en modo lote** generalmente involucra estructuras, condicionales, variables y otros elementos de lenguajes de programación; algunos tienen los elementos esenciales necesarios para tal propósito, otros son lenguajes de programación muy sofisticados en sí mismos.

### lenguajes de programación interpretados

Por el contrario, algunos lenguajes de programación se pueden usar de forma interactiva desde un shell del sistema operativo o en un programa especialmente diseñado.

El shell de la línea de comandos puede ofrecer características como la ejecución de la línea de comandos , donde el intérprete expande los comandos en función de unos pocos caracteres ingresados ​​por el usuario.

### historial de línea de comandos

Un intérprete de línea de comandos puede ofrecer una función de historial, de modo que el usuario pueda recuperar comandos anteriores emitidos al sistema y repetirlos, posiblemente con alguna edición. Como el usuario tenía que escribir todos los comandos del sistema operativo, los nombres de comandos cortos y los sistemas compactos para representar las opciones del programa eran comunes. Los nombres cortos a veces eran difíciles de recordar para un usuario, y los primeros sistemas carecían de los recursos de almacenamiento para proporcionar una guía de instrucciones de usuario en línea detallada.

## Interfaz Gráfica de usuario(GUI)

Los shells gráficos (o shells de escritorio) proporcionan medios para manipular programas basados ​​en la interfaz gráfica de usuario (GUI), al permitir operaciones como abrir, cerrar, mover y cambiar el tamaño de ventanas , así como cambiar el foco entre ventanas. Los shells gráficos pueden incluirse con entornos de escritorio o venir por separado, incluso como un conjunto de utilidades poco acopladas.

La mayoría de las interfaces gráficas de usuario desarrollan la metáfora de un **"escritorio electrónico"** , donde los archivos de datos se representan como si fueran documentos en papel en un escritorio, y los **programas de aplicación** tienen representaciones gráficas en lugar de ser invocados por nombres de comandos.

### Sistemas tipo Unix

Las interfaces gráficas normalmente se construyen sobre un sistema de ventanas . En el caso de X Window System o Wayland , el shell consta de un administrador de ventanas X o un compositor de Wayland , respectivamente, así como de uno o varios programas que proporcionan la funcionalidad para iniciar aplicaciones instaladas, administrar ventanas abiertas y escritorios virtuales, y a menudo para soportar un motor de widgets.

## Microsoft Windows

Las versiones modernas del sistema operativo Microsoft Windows usan el `shell de Windows` como su shell. Windows Shell proporciona el entorno de escritorio familiar , el menú de inicio y la barra de tareas , así como una interfaz gráfica de usuario para acceder a las funciones de administración de archivos del sistema operativo. Las versiones anteriores también incluyen el Administrador de programas , que era el shell de la serie 3.x de Microsoft Windows, y que de hecho se entregó con versiones posteriores de Windows de los tipos 95 y NT al menos a través de Windows XP. Las interfaces de las versiones de Windows 1 y 2 eran marcadamente diferentes.

Las aplicaciones de escritorio también se consideran shells, siempre que utilicen un motor de terceros. Del mismo modo, muchas personas y desarrolladores insatisfechos con la interfaz de Windows Explorer han desarrollado un software que altera el funcionamiento y la apariencia del shell o lo reemplaza por completo. WindowBlinds de StarDock es un buen ejemplo del antiguo tipo de aplicación. LiteStep y Emerge Desktop son buenos ejemplos de esto último.

Los programas de interoperabilidad y el software diseñado específicamente permiten a los usuarios de Windows usar equivalentes de muchas de las diversas GUI basadas en Unix que se analizan a continuación, así como Macintosh. Un equivalente del OS / 2 Presentation Manager para la versión 3.0 puede ejecutar algunos programas OS / 2 bajo ciertas condiciones utilizando el subsistema ambiental OS / 2 en las versiones de Windows NT.
