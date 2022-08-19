const botonNumero = document.querySelectorAll('.numero');
const botonOperador = document.querySelectorAll('.operador');
const botonBorrarTotal = document.querySelector('.borradoTotal');
const botonBorrarParcial = document.querySelector('.borradoParcial');
const botonPunto = document.querySelector('.punto');
const botonIgual = document.querySelector('.igual');
const displayResultado = document.querySelector('.display__resultado');
const displayProceso = document.querySelector('.display__proceso');
let valor1 = '';
let valor2 = '';
let valorOperador = undefined;


botonNumero.forEach(numero => {
  numero.addEventListener('click', () => {
    displayProceso.textContent += numero.textContent;
    if (valorOperador) {
      valor2 += numero.textContent;
    } else {
      valor1 += numero.textContent;
    }
    console.log(valor1);
    console.log(valor2);
  })
})

botonOperador.forEach(operador => {
  operador.addEventListener('click', () => {
    displayProceso.textContent += operador.textContent;
    valorOperador = operador.textContent;
  })
})

botonBorrarParcial.addEventListener('click', () => {
  displayProceso.textContent = displayProceso.textContent.slice(0,-1);
  })


botonBorrarTotal.addEventListener('click', () => {
  displayProceso.textContent = '';
  })


botonIgual.addEventListener('click', () => {
  displayProceso.textContent += botonIgual.textContent;
  })


botonPunto.addEventListener('click', () => {
  displayProceso.textContent += botonPunto.textContent;
  })
