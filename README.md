# Exercise: Calculate BMI
Write a JavaScript function called `calculateBMI` that takes two parameters: `weight` (in kilograms) and `height` (in meters). The function should calculate the Body Mass Index (BMI) and return the BMI value.

The BMI is calculated using the following formula:
BMI = weight / (height * height)

Write another function called `interpretBMI` that takes one parameter: `bmiValue`. This function should interpret the BMI value and return a string message based on the following ranges:

- If BMI is less than 18.5, return "Underweight".
- If BMI is between 18.5 and 24.9 (inclusive), return "Normal weight".
- If BMI is between 25 and 29.9 (inclusive), return "Overweight".
- If BMI is 30 or greater, return "Obese".

Lastly, write a main function called `runBMIProgram` that prompts the user to enter their weight and height, calls the `calculateBMI` function to calculate the BMI, and then calls the `interpretBMI` function to display the interpretation of the BMI value to the user.

Here's a starting point to help you get started:

Your task is to complete the code by implementing the necessary logic for each function. Once you've completed the exercise, you can test it by running the `runBMIProgram` function. Feel free to modify the code as needed to suit your needs.

Happy coding! Let me know if you need further assistance.


------------------------------------------

# Exercise: Convert Temperature

Write a JavaScript function called `convertTemperature` that takes two parameters: `temperature` and `unit`.
The function should convert the temperature from one unit to another and return the converted temperature.

The function should support the following temperature units:
- Celsius (C)
- Fahrenheit (F)
- Kelvin (K)

The conversion formulas are as follows:
- Celsius to Fahrenheit: (C * 9/5) + 32
- Celsius to Kelvin: C + 273.15
- Fahrenheit to Celsius: (F - 32) * 5/9
- Fahrenheit to Kelvin: ((F - 32) * 5/9) + 273.15
- Kelvin to Celsius: K - 273.15
- Kelvin to Fahrenheit: ((K - 273.15) * 9/5) + 32

Write another function called `displayTemperature` that takes two parameters: `temperature` and `unit`. This function should display the converted temperature with the unit in the following format: "Temperature: [temperature] [unit]".

Lastly, write a main function called `runTemperatureProgram` that prompts the user to enter a temperature and its unit, calls the `convertTemperature` function to convert the temperature, and then calls the `displayTemperature` function to display the converted temperature to the user.

Here's a starting point for you:


Your task is to complete the code by implementing the necessary logic for each function. Once you've completed the exercise, you can test it by running the `runTemperatureProgram` function. Feel free to modify the code as needed.

Happy coding! Let me know if you need further assistance.
