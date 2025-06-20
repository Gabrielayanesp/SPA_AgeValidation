# SPA_AgeValidation – Sistema Interactivo de Validación de Edad

**Programa:** Sistema interactivo y de validación de datos.

Este proyecto es una aplicación web desarrollada por **Maria Gabriela Yanes Pardo** que le permite al usuario ingresar su nombre y edad, para luego mostrarle un **mensaje personalizado** según su edad.

Es una práctica integradora de los conocimientos aprendidos en **HTML, CSS y JavaScript**, usando buenas prácticas de organización, estilo y lógica.

---

## ¿Qué hace esta aplicación?

- Verifica si el usuario es mayor o menor de edad.
- Valida los campos para que solo se acepten nombres válidos (sin números ni símbolos) y edades en números.
- Muestra mensajes visuales diferentes si el usuario es **menor**, **mayor de edad** o hay un **error**.
- Todo con una interfaz clara, colorida y adaptada a dispositivos móviles.

---

## Tecnologías utilizadas

- **HTML5:** Es la estructura de la página. Define todo lo visible en pantalla, como títulos, párrafos, cajas y botones. Utilicé etiquetas como `<div>`, `<input>`, `<button>` y `<p>`. El HTML también enlaza los archivos de CSS y JS.
  
  Se organizó todo dentro de un contenedor principal que divide la pantalla en dos:
  - Panel izquierdo: contiene el título principal (`<h1>`) y una descripción (`<p>`).
  - Panel derecho: incluye los campos para escribir nombre y edad, y un botón para obtener el resultado.

- **CSS3:** Le da color, forma y estilo a la página web. Definí una **paleta en `:root`** con tonos rojos y rosados, para usar los mismos colores de forma organizada. Usé **Flexbox** para ubicar los paneles correctamente y **media queries (`@media`)** para que el diseño se vea bien en celulares, tablets y PC.

  También creé clases para mostrar mensajes con colores distintos:  
   Error –  Menor de edad –  Mayor de edad.

- **JavaScript (ES6):** Captura lo que escribe el usuario y se ejecuta al hacer clic en el botón. JS valida que el nombre contenga solo letras y que la edad sea un número.  
  Luego, muestra un mensaje personalizado según la edad. Si hay errores, muestra mensajes para corregir.

---

##  Responsive Design

Está adaptado para:

- Computadoras (pantalla grande)
- Tablets
- Celulares (hasta 390px de ancho)

---

##  Estructura del Proyecto



---

© Todos los derechos reservados – Maria Gabriela Yanes Pardo – 2025
