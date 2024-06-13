function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function agetodays(age) {
    return age * 365;
}

function celsiustofarenheit(Celsius) {
    return ((Celsius * 9) / 5) + 32;
}

function farenheittocelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

export { add, sub, agetodays, celsiustofarenheit, farenheittocelsius };
