import validator from './validator.js';

console.log(validator);

let elCCNumber = document.getElementById("ccNumber");
const elCCValidation = document.getElementById("ccValidator");

const checkCC = () => {  
    let message = "";

    if (validator.isValid(elCCNumber.value))
        message = "Número VÁLIDO";
    else
        message = "Número INVÁLIDO";

    // Inicializar input con resultado
    elCCValidation.value = message;
};

// Evento botón submit
document.getElementById("ccForm").addEventListener("submit", (e) => {
    e.preventDefault()
    checkCC()
    const maskifyNumber = validator.maskify(elCCNumber.value)
    console.log (maskifyNumber);
    elCCNumber.value = maskifyNumber;
});

