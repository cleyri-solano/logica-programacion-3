// Función que calcula el factorial de un número
function factorial(numero) {
  let resultado = 1;

  for (let i = 2; i <= numero; i++) {
    resultado = resultado * i;
  }

  return resultado;
}

// Función principal que se ejecuta al hacer clic en el botón
function calcularFactorial() {
  // 1. Leer el valor del input
  const entrada = document.getElementById("entrada").value;

  // 2. Convertir a número
  const numero = Number(entrada);

  // 3. Obtener los elementos donde se mostrará el resultado
  const caja  = document.getElementById("resultado");
  const pasos = document.getElementById("pasos");
  const valor = document.getElementById("valor");

  // 4. Mostrar la caja y limpiar estado anterior
  caja.classList.remove("d-none");
  caja.classList.remove("error");

  // 5. Validar que sea un número
  if (entrada === "" || isNaN(numero)) {
    caja.classList.add("error");
    pasos.textContent = "Error";
    valor.textContent = "El dato ingresado no es un número. Intenta de nuevo.";
    return;
  }

  // 6. Validar que sea un entero no negativo
  if (numero < 0 || numero % 1 !== 0) {
    caja.classList.add("error");
    pasos.textContent = "Error";
    valor.textContent = "Ingresa un número entero no negativo (0, 1, 2...).";
    return;
  }

  // 7. Calcular el factorial
  const resultado = factorial(numero);

  // 8. Mostrar en consola
  console.log(numero + "! = " + resultado);

  // 9. Mostrar en el DOM
  pasos.textContent = numero + "! =";
  valor.textContent = resultado;
}