let r = /^(\d{4}|\d{6})$/;

function validatePIN(pin) {
    if (r.test(pin)) {
        return true;
    } else {
        return false;
    }
}
