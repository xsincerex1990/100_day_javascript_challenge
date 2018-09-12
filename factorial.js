function factorial(num) {
    let x = 1
    for (var i = num; i > 1; --i) {
        x *= i
    }
    return x
};

console.log(factorial(4));
