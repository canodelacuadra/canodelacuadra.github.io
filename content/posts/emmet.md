---
date: "2020-6-9"
title: "Emmet"
tags: ['Visual Studio Code', 'herramientas']
---



Emmet (anteriormente Zen Codding) nos facilita escribir HTML y CSS,entre otros, por medio de abreviaturas, las cuales se expanden en código html o CSS, tras ejecutarse. 
Es un plugin que viene ( en algunos editores por defecto) con un buen número de editores de texto avanzados : ``Notepad++``, ``Visual Studio Code``, ``Brackets``, ``Atom``, ``Sublime Text``...

Por ejemplo, para escribir un div con id container sería esctibir
```html
div#container
```
y  al dar a la tecla intro se expandiría

Por ejemplo si escribimos 

```html
div#page>div.logo+ul#navigation>li*5>a
```
y se expandiría así

```html
<div id="page">
	<div class="logo"></div>
	<ul id="navigation">
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
	</ul>
</div>
```
También sirve para css, xml, xsl. Para CSS podría ser:
background

```css
bg
```
margin
```css
m
```




Podemos ver un CheetSheet

https://docs.emmet.io/cheat-sheet/