import validator from './validator.js';

console.log(validator);

let elCCNumber = document.getElementById("ccNumber");
const elCCValidation = document.getElementById("ccValidator");

const checkCC = () => {  
    let message = "";

    if (validator.isValid(elCCNumber.value))
        message = "Número válido";
    else
        message = "Número inválido";

    // Initialize the display textbox with content.
    elCCValidation.textContent = message;
};

// Evento botón submit
document.getElementById("ccForm").addEventListener("submit", (e) => {
    e.preventDefault()
    checkCC()
    const maskifyNumber = validator.maskify(elCCNumber.value)
    console.log (maskifyNumber);
    elCCNumber.value = maskifyNumber;
});

