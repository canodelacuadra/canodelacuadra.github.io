---
layout: "post"
date: 2020-1-15
title: "Librería curl"
tags: ['LíneaDeComandos','api', 'herramientas']
---
**Curl**  
Permite realizar peticiones HTTP con el objetivo de transferir información con sintaxis de URL.

En el contexto de PHP, permite armar un script que literalmente se comporte como un navegador para así realizar una petición a otro servidor remoto.
Su utilidad es muy similar al objeto XMLHttpRequest de JavaScript en el sentido de comunicarse con un servidor distinto para la obtención de recursos, datos u otra información.

Curl es una librería de funciones para conectar con servidores y trabajar con ellos (transferir datos: enviar o recibir datos) mediante línea de comandos. El trabajo se realiza con formato URL.

 Es decir, sirve para realizar acciones sobre archivos que hay en URLs de Internet, soportando los protocolos más comunes, como http, ftp, https, smpt, pop etc.

 Está disponible en la mayoría de los sistemas basados ​​en Unix. Es una abreviatura de “Client URL”. Podemos instalar curl en windows. Curl para windows [enlace](https://curl.haxx.se/windows/)

 > Si tenemos Xampp instalado, puede que la tengamos instalada y activada, si no está activada, podemos activarla la librería en php.ini  descomentando la línea (es decir, quitándole el punto y coma ) y reiniciando apache
 ````
 ;extension=php_curl.dll

 ````

Los comandos de Curl están diseñados para funcionar como una forma de verificar la conectividad a las URL y como una gran herramienta para transferir datos.

> Nosotros vamos a hacer los ejemplos utilizando curl en windows mediante el cli git bash (que es un shell que se instala  instalando git) auuque podría ser con otra interfaz cli como powershell -aunque en este caso puede que varíe algo la sintaxis.

Primero, verifiquemos qué versión de Curl está disponible con el siguiente comando:
````
curl --version
````
La salida mostrará la versión Curl una lista de protocolos compatibles. Ahora podemos ver algunos ejemplos de comandos de Curl.
````
$ curl --version
curl 7.73.0 (x86_64-w64-mingw32) libcurl/7.73.0 OpenSSL/1.1.1h (Schannel) zlib/1.2.11 brotli/1.0.9 zstd/1.4.5 libidn2/2.3.0 libssh2/1.9.0 nghttp2/1.41.0
Release-Date: 2020-10-14
Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps mqtt pop3 pop3s rtsp scp sftp smb smbs smtp smtps telnet tftp
Features: AsynchDNS brotli HTTP2 HTTPS-proxy IDN IPv6 Kerberos Largefile libz Metalink MultiSSL NTLM SPNEGO SSL SSPI TLS-SRP zstd

````

## Sintaxis básica del comando Curl
 La sintaxis básica de Curl es la siguiente:
````
curl [OPTIONS] [URL]
````
## Recuperar un recurso o página web
El uso más simple de Curl es mostrar el contenido de una página por la consola. El siguiente ejemplo mostrará la página de inicio de elpais.com. (sin ningún options)
````
curl elpais.com
````
Bueno, realmente no lo hizo porque si no se especifica ningún protocolo, curl lo interpretará a HTTP. 
````
curl https://elpais.com
````
Esto generará el código fuente completo de la página de inicio del dominio. 

## Guardar datos a un archivo
Los comandos Curl pueden guardar los datos descargados en archivos   con la opción -o (output):
> -o permite especificar un nombre de archivo o ubicación diferente de donde estamos por consola.
````
curl http://SERVER_ADDRESS/FILENAME -o FILENAME
````
Este sería un ejemplo:

````
curl -o curriculum.html https://canodelacuadra.github.io/curriculum/

````
El comando anterior guardará la descarga como curriculum.html

### Archivos protegidos por usuario y contraseña
Si tenemos una autenticación básica en nuestro servidor debemos utilizar la siguiente sintaxis utilizando la opción -u o --user

````
curl -u USERNAME:PASSWORD http://SERVER_ADDRESS -o FILENAME
````
o
````
curl --user name:password http://www.example.com
````

### Solicitudes http
Una solicitud HTTP típica siempre contendrá un encabezado. El encabezado HTTP envía información adicional sobre el servidor web remoto junto con la solicitud real. Si bien a través de las herramientas de desarrollador de un navegador puedes verificar la información del encabezado, puedes verificarla utilizando un comando curl.

A continuación se muestra un ejemplo de cómo recuperar la información del encabezado de un sitio web.
````
curl -I https://canodelacuadra.github.io
````
````
HTTP/2 200
content-type: text/html; charset=utf-8
server: GitHub.com
last-modified: Wed, 16 Dec 2020 12:18:16 GMT
access-control-allow-origin: *
etag: "5fd9fb08-1976"
expires: Sun, 03 Jan 2021 10:59:44 GMT
cache-control: max-age=600
x-proxy-cache: MISS
x-github-request-id: 259C:9F5D:18ECED5:1AE29A5:5FF1A147
accept-ranges: bytes
date: Sun, 03 Jan 2021 10:49:44 GMT
via: 1.1 varnish
age: 0
x-served-by: cache-mad22051-MAD
x-cache: MISS
x-cache-hits: 0
x-timer: S1609670984.958844,VS0,VE122
vary: Accept-Encoding
x-fastly-request-id: c2b22163c041789d306dd5697e9eb4ccbf15e410
content-length: 6518

````
### Solicitud get
Usando curl, puedes hacer una solicitud GET y una POST. Una solicitud GET será así:
````
curl http://mydomain.com
````
### solicitud post
Una muestra de una solicitud POST será como esta:
`````
curl –data “text=Hello” https://myDomain.com/firstPage.php
`````
Aquí text=Hello es el parámetro de solicitud POST. Este comportamiento sería similar a los formularios HTML.
### varias solicitudes
También puedes especificar varios métodos HTTP en un solo comando curl. Hazlo usando la opción –next, así:
````
curl –data “text=Hello” https://myDomain.com/firstPage.php --next https://myDomain.com/displayResult.php
````
Esta contiene una solicitud POST seguida de una solicitud GET.

Cada solicitud HTTP tendrá un agente de usuario que se envía como parte de la solicitud. Esto indica los detalles del navegador web del cliente. Por defecto, una solicitud curl contiene curl y el número de versión como los detalles del agente usuario. Una salida de esto se vería así:
````
“GET / HTTP/1.1” 200 “_” ”curl/7/29/0”
````
Puedes cambiar esta información de agente usuario predeterminada utilizando el siguiente comando:
````
curl -I http://mydomain.com –-user-agent “My new Browser”
````
Ahora el resultado modificado será:

“GET / HTTP/1.1” 200 “_” ”My new Browser”
### Curl para Cookies
Los comandos Curl se pueden usar para verificar qué cookies se descargan en cualquier URL. Entonces, si estás accediendo a https://www.samplewebsite.com, puedes enviar a un archivo, guardar las cookies y acceder a ellas usando cat o un editor VM.

La siguiente es una muestra de dicho comando:
````
curl --cookie-jar Mycookies.txt https://www.samplewebsite.com /index.html -O
````
Del mismo modo, si tienes las cookies en un archivo, puedes enviarlo al sitio web. Un ejemplo de dicho comando es el que se muestra a continuación:
````
curl --cookie Mycookies.txt https://www. samplewebsite.com
````
#### Curl para FTP
¡El comando Curl es compatible con FTP! Puedes usarlo para descargar archivos de un servidor remoto.
````
curl -u username:password -O ftp://sampleftpserver/testfile.tar.gz
````
En el comando anterior, ftp://sampleftpserver es un servidor FTP que acepta conexiones. El nombre de usuario y la contraseña se pueden omitir para conexiones FTP anónimas. Escribe el comando y observa cómo avanza la barra de progreso.

También puedes subir archivos con el siguiente comando:
````
curl -u username:password -T testfile.tar.gz ftp://sampleftpserver

````
Obviamente, podemos omitir el nombre de usuario y la contraseña para conexiones FTP anónimas.

#### Limitar la salida de Curl
Mientras usas Curl, no puedes saber que tamaño tendrá el resultado. Puedes restringir el ancho de banda para asegurarte de que no seas desbordado por curl.

El siguiente comando restringe el ancho de banda a 100K:
````
curl --limit-rate 100K http://testdomain.com/samplefile.tar.gz -O
````
#### Curl con php
 PHP soporta libcurl, Se implementa como un conjunto de funciones, las que más se usan son:
-   curl_init – Inicia una nueva sesión cURL
-   curl_setopt – Define opciones para nuestra sesion cURL
-   curl_getinfo – Obtiene información de la última transferencia
-   curl_exec – Ejecuta la petición HTTP
-   curl_close – Cierra la sesión CURL


Ejemplo :
````php
<?php
	$cliente = curl_init();
	curl_setopt($cliente, CURLOPT_URL, "http://educacionit.com");
	curl_setopt($cliente, CURLOPT_HEADER, 0);
	curl_exec($cliente);
	curl_close($cliente);
?>
````
Ejemplos : https://blog.educacionit.com/2017/08/16/guia-sobre-como-utilizar-curl-en-php/

#### Conclusión
Curl es una librería poderosa y ampliamente utilizada.

Recuerda, si quieres aprender algunos comandos avanzados, puedes utilizar en window,  git bash
````
curl help 
````
que daría como salida
````
Usage: curl [options...] <url>
 -d, --data <data>   HTTP POST data
 -f, --fail          Fail silently (no output at all) on HTTP errors
 -h, --help <category> Get help for commands
 -i, --include       Include protocol response headers in the output
 -o, --output <file> Write to file instead of stdout
 -O, --remote-name   Write output to a file named as the remote file
 -s, --silent        Silent mode
 -T, --upload-file <file> Transfer local FILE to destination
 -u, --user <user:password> Server user and password
 -A, --user-agent <name> Send User-Agent <name> to server
 -v, --verbose       Make the operation more talkative
 -V, --version       Show version number and quit
````

Podemos leer también
https://www.taniarascia.com/making-api-requests-postman-curl/
