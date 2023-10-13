function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const resultFahrenheit = document.getElementById('resultFahrenheit');
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    resultFahrenheit.textContent = fahrenheit.toFixed(2) + " °F";
}

function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultCelsius = document.getElementById('resultCelsius');
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    resultCelsius.textContent = celsius.toFixed(2) + " °C";
}
