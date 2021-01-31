---
layout: "post"
date: "2021-01-29"
title: "Comandos básicos de SQL"
cover: "command_line.png"
categories: [ 'sql', 'bases de datos']
tags: ["snipets"]
---

# Sintaxis SQL 
SQL (Structured Query Language) es un lenguaje que usamos para interactuar con un sistema de administración de bases de datos (DBMS).
 Una guía de los comandos SQL más utilizados
## SQL

### Create Database

```sql
CREATE DATABASE IF NOT EXISTS database_name
```

### Drop Database

```sql
DROP DATABASE IF EXISTS database_name
```

### Create Table

```sql
CREATE TABLE IF NOT EXISTS table_name (
  column_a Datatype Constraints,
  column_b Datatype Constraints,
);
```

#### Datatypes

**Datatype**|**Description**
-----|-----
`INT(n)`|Integer values
`FLOAT(n, d)`| Decimal values
`VARCHAR(n)`|String with max number of characters
`TEXT`|String with without set limit (max value of 65,535)
`DATE('YYYY-MM-DD')`|Year, month, and day
`DATETIME('YYYY-MM-DD HH:MI:SS')`|Year, month, day, hour, minute, and second
`TIMESTAMP('YYYY-MM-DD HH:MI:SS')`|Datetime corresponding to UNIX epoch time

#### Constraints

**Constraint**|**Description**
-----|-----
`PRIMARY KEY`|Unique identifier
`AUTO_INCREMENT`|Integer value is automatically added and incremented
`UNIQUE`|Value must be unique
`NOT NULL`|Value cannot be NULL
`DEFAULT`|Initialized with default value

### Modificar Tabla

```sql
 ALTER TABLE table_a
         ADD column_a DataType
ALTER COLUMN column_a DataType   
        DROP column_a
   RENAME TO table_b
```

### Drop Table

```sql
DROP TABLE IF EXISTS table_name
```

### Select Rows

```sql
   SELECT *, column_a, column_b, AggregateFunction(column_a)
       AS Alias
     FROM table_a
     JOIN table_b
       ON table_a.column_a = table_b.column_a
    WHERE Condition
      AND Condition
       OR Condition
      NOT Condition
 GROUP BY column_a
   HAVING Condition
 ORDER BY column_a
      ASC
     DESC
    LIMIT Count
   OFFSET Count
```

### Select Distint Rows

```sql
SELECT DISTINCT column_name
           FROM table_name
```

#### Joins

**Join**|**Description**
-----|-----
`(INNER) JOIN`|Returns only matches from both tables
`LEFT JOIN`|Returns all entries from left table, and matches from right table
`RIGHT JOIN`|Returns all entries from right table, and matches from left table
`FULL JOIN`|Returns all entries from both tables

#### Aggregate Functions

**Function**|**Description**
-----|-----
`COUNT(column)`|Counts number of rows
`SUM(column)`|Adds all values
`MIN(column)`|Find the smallest value
`MAX(column)`|Find the largest value
`AVG(column)`|Find the average value

#### Conditions

**Operator**|**Condition**
-----|-----
`=`, `!=`|Equal, not equal
`<`,  `>`, |Less than, greater than
`<=`, `>=`|Less/greater than or equal to
`BETWEEN ... AND ...`|Within range of two values
`NOT BETWEEN ... AND ...`|Not within range of two values
`IN (...)`|Exists in list
`NOT IN (...)`|Does not exist in list
`LIKE`|Case insensitive equality comparison
`NOT LIKE`|Case insensitive inequality comparison
`%`|Matches a sequence of characters
`\_`|Matches a single character
`IS NULL`|Value is null
`IS NOT NULL`|Value is not null
`ANY (...)`|If any values meet condition
`ALL`|If all values meet condition
`EXISTS`|If one or more records exist

### Insert Rows

```sql
INSERT INTO table_name (column_a, column_b)
     VALUES ("value_1", "value_2")
```

### Update Rows

```sql
UPDATE table_name
   SET column_a = "value_1"
       column_b = "value_2"
 WHERE Condition
```

### Delete Rows

```sql
DELETE FROM table_name
      WHERE Condition
```

