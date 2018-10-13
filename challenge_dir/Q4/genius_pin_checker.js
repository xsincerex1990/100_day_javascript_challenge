// by larry

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

validatePIN("-123");
validatePIN("1234");
