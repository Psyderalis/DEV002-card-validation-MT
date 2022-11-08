const validator = {
  isValid: (ccNumber) => {
    const length = ccNumber.length; //longitud string;
    let addDigits = 0;
    if (length % 2 == 0) {

      for (let i = length - 1; i >= 0; i--) //recorrer todo el número de forma invertida
      {
        let currentDigit = parseInt(ccNumber[i]);
        if (i % 2 == 0) // tomar las posiciones pares
        { currentDigit *= 2;
          if (currentDigit > 9) //duplicar los valores de las posiciones pares e identificar si son de uno o dos dígitos
          {
            // Separar los valores de dos dígitos
            let firstNumber = parseInt(currentDigit / 10); //identifica el primer dígito del valor, tomando el entero
            let trailingNumber = currentDigit % 10; //identifica el último dígito del valor

            // sumar los dígitos del valor
            currentDigit = firstNumber + trailingNumber;
          }
        }
        addDigits += currentDigit; // sumar todos los números de la tarjeta
      }
    }
    else {
      // para números impares
      for (let i = length - 1; i >= 0; i--) {
        let currentDigit = parseInt(ccNumber[i]);
        if ((i - 1) % 2 == 0) // tomar posiciones pares
        { currentDigit *= 2;
          if (currentDigit > 9) {
            // Separar los valores de los dígitos
            let firstNumber = parseInt(currentDigit / 10);
            let trailingNumber = currentDigit % 10;

            // Sumar dígitos del valor
            currentDigit = firstNumber + trailingNumber;
          }
        }

        addDigits += currentDigit; // sumar todos los números de la tarjeta
      }
    }
    const resultado = (addDigits % 10) === 0;
    console.log(resultado, addDigits);
    return resultado;
  },
  maskify: (ccNumber) => {
    let myArray = []
    for (let i = 0; i < ccNumber.length; i++) {
      if (i < ccNumber.length - 4) {
        myArray.push("#");
      } else {
        myArray.push(ccNumber[i]);
      }
    }
    return myArray.join("");
  }
};

export default validator;






