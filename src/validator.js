const validator = {
  isValid: (ccNumber) => {
    const length = ccNumber.length; //longitud string;
    let addDigits = 0;

    for (let i = length - 1; i >= 0; i--) //recorrer todo el número de forma invertida
    {
      let currentDigit = parseInt(ccNumber[i]);
      if (i % 2 == 0) // tomar las posiciones pares
      {
        if ((currentDigit *= 2) > 9) //duplicar los valores de las posiciones pares e identificar si son de uno o dos dígitos
        {
          // Separar los valores de dos dígitos
          let firstNumber = parseInt(currentDigit / 10); //identifica el primer dígito del valor, tomando el entero
          let trailingNumber = currentDigit % 10; //identifica el último dígito del valor

          // sumar los dígitos del valor
          currentDigit = firstNumber + trailingNumber;
        }
      }
      console.log(currentDigit)
      addDigits += currentDigit; // sumar todos los números de la tarjeta
    }
    const resultado = (addDigits % 10) === 0;
    console.log(resultado, addDigits);
    return resultado;
  }
};

export default validator;






