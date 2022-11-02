import validator from './validator.js';

console.log(validator);





const checkCC = () => {
    const elCCNumber = document.getElementById("ccNumber");
    const elCCValidation = document.getElementById("ccValidator");
    let message = "";

    // Calls the Luhn algorithm. Fails if the Luhn algorithm returns false.
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
})