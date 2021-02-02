---
layout: "post"
title: "Extensión PDO de PHP"
tags: ""
categories: [ 'php', 'bases de datos', 'pdo']
date: "2021-01-29"
---

# Operaciones SQL PDO con PHP
código para usar la clase PDO en PHP para conectarse de forma segura y trabajar con una base de datos.
Primero crearemos una base de datos con la consola mysql de xampp y luego haremos


### Crear Conexión

```php
$host       = 'localhost';
$username   = 'root';
$password   = '';
$dbname     = 'pdo';
$dsn        = "mysql:host=$host;dbname=$dbname";
$options    = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false
              ];

$connection = new PDO($dsn, $username, $password, $options);
```

#### Datatypes

**Datatype**|**Description**
-----|-----
`PDO::PARAM_BOOL`|Represents a boolean data type
`PDO::PARAM_NULL`|Represents the SQL NULL data type
`PDO::PARAM_INT`|Represents the SQL INTEGER data type
`PDO::PARAM_STR`|Represents the SQL CHAR, VARCHAR, or other string data type

### Seleccionar registros

```php
$sql = "SELECT * 
          FROM users
         WHERE location = :location";
         
$location = 'Chicago';

$statement = $connection->prepare($sql);
$statement->bindParam(':location', $location, PDO::PARAM_STR);
$statement->execute();

$rows = $statement->fetchAll(PDO::FETCH_ASSOC);

foreach ($rows as $row) {
  echo $row['location'];
} 
```

### Crear Registro

```php
$sql = "INSERT INTO users (username, email) 
             VALUES (:username, :email)";

$username = 'Tania';
$email = 'tania@example.com';

$statement = $connection->$prepare($sql);
$statement->bindValue(':username', $username, PDO::PARAM_STR);
$statement->bindValue(':email', $email, PDO::PARAM_STR);

$insert = $statement->execute();
```

### Modificar Registro

```php
$user = [
  'username'  => 'Tania',
  'email'     => 'tania@example.com',
  'location'  => 'Chicago',
];

$sql = "UPDATE users 
           SET username = :username, 
               email = :email, 
               location = :location, 
         WHERE id = :id";
        
$statement = $connection->prepare($sql);
$statement->execute($user);
```

### Borrar registro

```php
$sql = "DELETE FROM users 
              WHERE id = :id";

$statement = $connection->prepare($sql);
$statement->bindValue(':id', 5, PDO::PARAM_INT);
 
$delete = $statement->execute();
```

