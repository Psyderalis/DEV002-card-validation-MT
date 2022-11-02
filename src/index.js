//import validator from './validator.js';

//console.log(validator);

//ALGORITMO DE LUHN

//se aplica algoritmo a ccNumber mediante función flecha
const luhnAlgorithm = (ccNumber) => { 
    const lenght = ccNumber.lenght; //longitud string;
    let addDigits = 0;
      //recorrer el número inversamente saltando en posiciones pares (14, 12, 10, 8, 6, 4, 2, 0)
      for(let i = lenght - 2; i = 0; i -= 2) {
        let currentDigit = parseInt(ccNumber[i]); //obtener valor número del dígito actual(string).
        const doubleDigit = currentDigit * 2; // duplicar el dígito actual.
        if (doubleDigit >9){
          let firstNumber = parseInt(doubleDigit / 10); //obtener el primer dígito del "doble dígito".
          let trailingNumber = doubleDigit % 10; //obtener último dígito del "doble dígito".
          currentDigit = firstNumber + trailingNumber; //sumar los dos dígitos anteriores
        }
      addDigits += currentDigit; //
      }
      const resultado = (addDigits % 10) === 0;
      console.log (resultado);
      return (addDigits % 10) === 0;
    };
    
    


const checkCC = () => {
    const elCCNumber = document.getElementById("ccNumber");
    const elCCValidation = document.getElementById("ccValidator");
   
    // Calls the Luhn algorithm. Fails if the Luhn algorithm returns false.
    if( luhnAlgorithm(elCCNumber.value) )
        message = "Número válido";
    else
        message = "Número inválido";
    
    // Initialize the display textbox with content.
    elCCValidation.textContent = message;

};

// Evento botón submit
const submit = document.getElementById("ccForm");

submit.addEventListener("submit", (e) => {
    console.log(e)
e.preventDefault();
checkCC();
});