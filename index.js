const botonNumero = document.querySelectorAll('.numero');
const botonOperador = document.querySelectorAll('.operador');
const botonBorrarTotal = document.querySelector('.borradoTotal');
const botonBorrarParcial = document.querySelector('.borradoParcial');
const botonIgual = document.querySelector('.igual');
const displayResultado = document.querySelector('.display__resultado');
const displayProceso = document.querySelector('.display__proceso');
let valor1 = '';
let valor2 = '';
let valorOperador = undefined;


botonNumero.forEach(numero => {

  let numeroText = numero.textContent;

  numero.addEventListener('click', () => {

    if (numeroText != '.' || displayProceso.textContent.indexOf('.')== -1) {
      displayProceso.textContent += numeroText == '.' && displayProceso.textContent == '' ? '0.' : numeroText;
    }  

    if (valorOperador) {
      valor2 += numeroText;
    } else {
      valor1 += numeroText;
    }
  });
});

botonOperador.forEach(operador => {
  operador.addEventListener('click', () => {

    if (valor1) {
      if (!valorOperador) {
        displayProceso.textContent += operador.textContent;
        valorOperador = operador.textContent;
      } else {
        if (valor2) {
          realizarOperacion('operando');
        }
      }
    }  
  });
});

//hacemos el llamado del botón borrar parcial y le agregamos un evento tipo click.

botonBorrarParcial.addEventListener('click', () => {
  displayProceso.textContent = displayProceso.textContent.slice(0,-1);
  if (valorOperador) {
    valor2 = valor2.slice(0,-1);
  } else{
    valor1 = valor1.slice(0,-1);
  }
  });

//hacemos el llamado del botón borrar total y le agregamos un evento tipo click.

botonBorrarTotal.addEventListener('click', () => {
  displayProceso.textContent = '';
  displayResultado.textContent = '';
  valor1 = '';
  valor2 = '';
  valorOperador = '';
  })

//hacemos el llamado del botón igual y le agregamos un evento tipo click.

botonIgual.addEventListener('click', () => {
  realizarOperacion('igual');
  displayProceso.textContent = '';
  })

  //Función que contiene el Swith para hacer los calculos

  function realizarOperacion(estado) {
    let num1 = parseFloat(valor1);
    let num2 = parseFloat(valor2);
    let resultadoOperacion = "";
    
    switch (valorOperador) {
      case '+':
        resultadoOperacion = num1 + num2;
        break;
      case '-':
        resultadoOperacion = num1 - num2;
        break;
      case '*':
        resultadoOperacion = num1 * num2;
        break;
      case '/':
        resultadoOperacion = num1 / num2;
        break;
      case '%':
        resultadoOperacion = ((num1 * num2) / 100);
        break;
    
      default:
        break;
    }
    displayResultado.textContent = resultadoOperacion;
    valor1 = resultadoOperacion;
    valor2 = '';

    if (estado == 'igual') {
      displayProceso.textContent = '';
      valorOperador = undefined;
    } else if (estado == 'operando') {
      displayProceso.textContent = valorOperador;
    }
  }