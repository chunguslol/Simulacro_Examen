// presenter.js
import contarLetras from "./contarLetras";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#contarLetras-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = ""; // Limpiar el contenido anterior

  const nombre = nombreInput.value;

  if (nombre.length > 0) {
    const resultado = contarLetras(nombre);
    mostrarResultado(resultado);
  } else {
    console.error("Por favor, ingrese un nombre válido.");
  }
});

function mostrarResultado(resultado) {
  for (const letra in resultado) {
    const mensaje = `<p>${letra}: ${resultado[letra]}</p>`;
    div.innerHTML += mensaje;
  }
}
