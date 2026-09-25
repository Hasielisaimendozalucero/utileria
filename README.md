# utileria.js

Librería JavaScript en Vanilla JS para la validación y formateo de datos en formularios web de registro e inicio de sesión.

## Qué problema resuelve

En el desarrollo web se repiten constantemente los mismos procesos de validación (correo, nombre, teléfono, contraseña, edad), lo que suele generar errores comunes como la omisión de acentos o la 'ñ', cálculos incorrectos de edad según la fecha de nacimiento o la aceptación de contraseñas poco seguras.

`utileria.js` agrupa estas comprobaciones en un solo módulo ligero. Contiene funciones independientes que reciben un dato y devuelven un valor booleano (`true`/`false`), un número o un texto corregido.

* **Alumno:** Hasiel Isai Mendoza Lucero
* **Asignatura:** Programación Web
* **Demo en vivo (GitHub Pages):** https://Hasielisaimendozalucero.github.io/utileria/

---

## Instalación

Copia el archivo `js/utileria.js` a tu proyecto e inclúyelo antes de tu propio script:

```html
<script src="js/utileria.js"></script>
