const form = document.querySelector('form');
const result = document.querySelector('#result');
const resultNumber = document.querySelector('#resultNumber');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('input[name="name"]');
  const productInput = document.querySelector('input[name="product"]:checked');
  const name = nameInput.value;
  const product = productInput.value;
  const sentence = `Orden a nombre de ${name}, producto seleccionado ${product}.`;
  result.innerText = sentence
});


let valorInicial    = '0';
let previousValue   = null;
let resultValue     = null;
let math            = resultNumber.innerText;
let useOperator    = false;

const updateDisplay = () => {
    resultNumber.innerText = valorInicial;
}

const clearValue = () => {
    valorInicial = '0';
    updateDisplay();
}

const inputDigit = (digit) => {
    if (valorInicial === '0') {
        valorInicial = digit;
    } else {
        valorInicial += digit;
    }
    updateDisplay();
}


const inputBorrar = () => {
   valorInicial = valorInicial.slice(0, -1);
   updateDisplay();
}


const inputSummit = () => {
    let mathValue =  eval(valorInicial);
    valorInicial = mathValue.toString();
    updateDisplay();
}



