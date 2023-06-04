function convertTemperature(temperature, unit) {
    var convertedTemperature;
    
    if (unit === "C") {
      convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
    } else if (unit === "F") {
      convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
    } else if (unit === "K") {
      convertedTemperature = temperature - 273.15; // Kelvin to Celsius
    }
    return convertedTemperature;
}
    
function displayTemperature(temperature, unit) {
        console.log("Temperature: " + temperature + " " + unit);
}
    
function runTemperatureProgram() {
        var temperature = parseFloat(prompt("Enter the temperature:"));
        var unit = prompt("Enter the unit of temperature (C, F, K):").toUpperCase();
    
        var convertedTemperature = convertTemperature(temperature, unit);
        displayTemperature(convertedTemperature, unit);
}
    
    // Call the main function to run the temperature conversion program
    runTemperatureProgram();
