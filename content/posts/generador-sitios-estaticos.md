---
date: "2020-12-16-"
title: "SSG Generador de sitios estaticos"
cover: "command_line.png"
tags: [ 'ssg', 'cms']
---


# ¿Qué es un generador de sitios estáticos?
Un generador de sitios estáticos crea un sitio web creando archivos HTML simples.


![Generador de sitios estáticos](/images/ssg.png)
 Cuando un usuario visita un sitio web creado por un generador de sitios estáticos,  se carga de de la misma forma que si hubieramos creado un sitio web con HTML simple. 
 ![Generador de sitios estáticos](/images/ssg-flow.png)
 
 Por el contrario, un sitio dinámico que se ejecuta en un lenguaje del lado del servidor, como PHP, se construye cada vez que un usuario visita el sitio.

## Uso de SSG como CMS simple
Se puede utilizar un generador de sitios estáticos como un tipo muy simple de CMS (sistema de gestión de contenido). En lugar de tener que incluir todo el encabezado y pie de página en cada página, por ejemplo, podemos crear un header.html y footer.html y cargarlos en cada página. En lugar de tener que escribir en HTML, podemos escribir en Markdown, que es mucho más rápido y eficiente.

Estas son algunas de las principales ventajas de los generadores de sitios estáticos sobre los sitios dinámicos:

* Velocidad : su sitio web funcionará mucho más rápido, ya que el servidor no necesita interpretar ningún contenido. Sólo necesita leer HTML sin formato.
* Seguridad : su sitio web será mucho menos vulnerable a los ataques, ya que no hay nada que pueda explotarse del lado del servidor.
* Simplicidad : no hay bases de datos ni lenguajes de programación con los que lidiar. Un simple conocimiento de HTML y CSS es suficiente.
* Flexibilidad : sabe exactamente cómo funciona su sitio, ya que lo hicimos desde cero.

Por supuesto, los sitios dinámicos también tienen sus ventajas. 
* La adición de un panel de administración facilita la actualización, especialmente para aquellos que no son expertos en tecnología. 
* Generalmente, un generador de sitios estáticos no sería la mejor idea para hacer un CMS para un cliente. 
* Los generadores de sitios estáticos tampoco tienen la posibilidad de actualizarse con contenido en tiempo real. 

Es importante comprender cómo funcionan ambos para saber qué funcionaría mejor para su proyecto en particular.

## Algunos ssg usandos como cms simple
* Jeckyll. Auspiciado por Github. Funciona con Ruby
* Hugo. Auspiciodo por Google. Funciona con Go
* Eleven. Competencia de Jeckyll utilizando javascript
* Vuepress. Basado en Vue.js  para crear documentación de forma simple





