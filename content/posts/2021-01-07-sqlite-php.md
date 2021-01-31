---
layout: "post"
title: "Usa SQLite y PHP"
cover: "command_line.png"
categories: [ 'php', 'bases de datos', 'sqlite']
---

XAMPP viene con soporte integrado para SQLite, lo que facilita comenzar a crear aplicaciones basadas en bases de datos con PHP. 

Crearemos de una nueva base de datos SQLite usando XAMPP, luego accederá a los datos dentro de ella usando PHP.

Comience por crear y completar una nueva base de datos utilizando el cliente de línea de comandos SQLite, como se muestra a continuación:

1. Abra el símbolo del sistema de Windows haciendo clic en el botón "Shell" en el panel de control de XAMPP.

2. Cambie al subdirectorio htdocs \ de su directorio de instalación de XAMPP (normalmente C: \ xampp ) y cree un nuevo archivo de base de datos SQLite llamado mydb.sq3 con el cliente de línea de comandos SQLite:
````
cd C:\xampp\htdocs
sqlite3 mydb.sq3
````

Ahora debería ver un indicador SQLite.

En el indicador sqlite> , cree una nueva tabla para contener sus datos. En este ejemplo, la tabla se denomina artículos y contiene 3 columnas, para el ID del artículo, el nombre del artículo y el costo del artículo. Puede usar la sintaxis estándar CREATE TABLE para crear la tabla, y puede obtener más información sobre los tipos de datos integrados de SQLite aquí .
````sql
CREATE TABLE items (id INTEGER PRIMARY KEY, name TEXT, price REAL);
````
Agregue algunos datos a la nueva tabla de inventario usando los comandos INSERT, como se muestra a continuación:
````sql
INSERT INTO items VALUES ('1001', 'Salt', 3.15);
INSERT INTO items VALUES ('1002', 'Pepper', 2.75);
INSERT INTO items VALUES ('1003', 'Eggs', 2.00);
INSERT INTO items VALUES ('1004', 'Bacon', 7.25);
INSERT INTO items VALUES ('1005', 'Milk', 1.15);
INSERT INTO items VALUES ('1006', 'Strawberries', 8.73);
INSERT INTO items VALUES ('1007', 'Cereal', 2.65);
````
Ahora también puede ejecutar una consulta SELECT en los datos. Por ejemplo, la siguiente consulta devuelve todos los artículos que cuestan menos de $ 3:
````sql
SELECT * FROM items WHERE price < 3.00;
````
imagen2
Una vez que haya terminado de usar la base de datos, salga de ella escribiendo ````.quit```` en el  sqlite>prompt .

> El archivo de la base de datos (en este ejemplo, mydb.sq3 ) contiene todas sus tablas y datos, por lo que debe recordar hacer una copia de seguridad con regularidad.

Los pasos anteriores describieron cómo crear y usar una base de datos SQLite usando el cliente de línea de comandos. Sin embargo, la mayoría de las veces, utilizará una base de datos SQLite en combinación con una aplicación web impulsada por PHP. 
## Php SQLite
XAMPP incluye la extensión PHP SQLite, por lo que hacer esto no es nada difícil.

Para conectarse a su base de datos SQLite y ejecutar consultas en ella con PHP, use su editor de texto para crear un script de ejemplo llamado sqlite.php en el subdirectorio htdocs de su directorio de instalación de XAMPP y llénelo con el siguiente código:
````php
<?php
$db = new SQLite3('mydb.sq3');
$sql = "SELECT * FROM items WHERE price < 3.00";
$result = $db->query($sql);
while ($row = $result->fetchArray(SQLITE3_ASSOC)){
  echo $row['name'] . ': $' . $row['price'] . '<br/>';
}
unset($db)
````
1. La primera línea de código crea un nuevo objeto SQLite3, utilizando el archivo de base de datos mydb.sq3 que creó anteriormente.

2. Luego, el método query() del objeto creadp se usa para ejecutar una consulta SELECT en la base de datos, y el método fetchArray() del objeto  resultado se usa para iterar sobre el conjunto de resultados. 
3. Agregar el parámetro SQLITE3_ASSOC al método fetchArray() le dice a PHP que devuelva los resultados como una matriz asociativa, lo que facilita el acceso a los campos individuales del conjunto de resultados y los muestra en una página web.

Una vez hecho esto, guarde sus cambios y asegúrese de que su servidor Apache esté funcionando. Luego, vaya a http: //localhost/sqlite.php para ejecutar el script. Debería ver algo como esto:


Para obtener más información sobre las potentes funciones de SQLite , lea la documentación de SQLite .https://sqlite.org/index.html
