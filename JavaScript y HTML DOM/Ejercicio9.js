function convertirCelsiusAFahrenheit() {
    const celsius = document.getElementById("tbc").value;
    const fahrenheit = toFahrenheit(celsius);
    document.getElementById("tbf").value = fahrenheit;
}

function convertirFahrenheitACelsius() {
    const fahrenheit = document.getElementById("tbf").value;
    const celsius = toCelsius(fahrenheit);
    document.getElementById("tbc").value = celsius;
}

function toCelsius(f) {
    return ((5 / 9) * (f - 32)).toFixed(2); // Redondear a 2 decimales
}

function toFahrenheit(c) {
    return ((c * 9 / 5) + 32).toFixed(2); // Redondear a 2 decimales
}