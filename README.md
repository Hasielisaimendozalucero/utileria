# utileria.js

> Librería JavaScript **sin frameworks y sin componentes visuales** para validar y formatear los datos de un formulario de registro.

## Qué problema resuelve

En cada formulario web se escriben otra vez las mismas validaciones (correo, nombre, teléfono, contraseña, edad) y casi siempre con errores: se olvidan los acentos y la ñ, se calcula mal la edad cuando aún no llega el cumpleaños, o se aceptan contraseñas débiles.

`utileria.js` junta todo en un solo archivo. Son funciones pequeñas que reciben un dato y devuelven `true` / `false`, un número o un texto ya corregido.

* **Autor:** Hasiel Isai Mendoza Lucero — Instituto Tecnológico de Oaxaca
* **Materia:** Programación Web
* **Demo en vivo (GitHub Pages):** https://Hasielisaimendozalucero.github.io/utileria/


---

## Instalación

Copia el archivo `js/utileria.js` a tu proyecto e inclúyelo **antes** de tu propio código:

```html
<script src="js/utileria.js"></script>
