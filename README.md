# Table of contens
* [Exercise1: Calculate BMI](#exercise1:-calculate-bmi)
* [Exercise2: Convert Temperature](#exercise2:-convert-temperature)
* [Exercise3: Guess the Number](#exercise3:-guess-the-number)
* [Exercise4: Calculate Factorial](#exercise4:-calculate-factorial)
* [Exercise5: Find Prime Numbers](#Exercise5:-find-prime-numbers)
* [Exercise6: Remove Duplicates](#Exercise6:-remove-duplicates)
* [Exercise7: Find Winner](#Exercise7:-find-winner)




## Exercise1: Calculate BMI
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



## Exercise2: Convert Temperature

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

Your task is to complete the code by implementing the necessary logic for each function. Once you've completed the exercise, you can test it by running the `runTemperatureProgram` function. Feel free to modify the code as needed.





## Exercise3: Guess the Number
Write a JavaScript program that generates a random number between 1 and 100. 
The program should prompt the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.

In this exercise, we use the `Math.random()` function to generate a random number between 0 and 1, then multiply it by 100 and add 1 to get a random number between 1 and 100.

The program prompts the user to enter their guess using `prompt()`. It validates the input to ensure it's a number using `isNaN()`. If the guess is incorrect, it provides feedback to the user, either "Too low! Try again." or "Too high! Try again." If the guess is correct, it displays a congratulatory message and breaks out of the loop.

After the game ends, the program displays the number of attempts it took the user to guess correctly using `alert()`.

Feel free to modify the code or add additional features as desired.



## Exercise4: Calculate Factorial
Write a JavaScript function called calculateFactorial that takes a positive integer as a parameter and calculates its factorial. The factorial of a number is the product of all positive integers from 1 to that number.

For example, the factorial of 5 (written as 5!) is calculated as follows:

```
5! = 5 * 4 * 3 * 2 * 1 = 120
```

Write a function that uses a loop to calculate the factorial of the given number and returns the result.


## Exercise5: Find Prime Numbers
Write a JavaScript function called findPrimeNumbers that takes a positive integer as a parameter and returns an array containing all the prime numbers up to that given number.

A prime number is a number greater than 1 that is divisible only by 1 and itself. For example, 2, 3, 5, 7, 11, and 13 are prime numbers.

Write a function that checks each number up to the given number and determines if it is prime. If a number is prime, it should be added to an array. Finally, the function should return the array of prime numbers.

## Exercise6: Remove Duplicates
Write a JavaScript function called removeDuplicates that takes an array as a parameter and returns a new array with duplicate elements removed.

For example, given the array [1, 2, 3, 2, 4, 3, 5], the function should return [1, 2, 3, 4, 5] after removing the duplicate elements.

Write a function that iterates over the array and uses another array to store unique elements. If an element is already present in the unique elements array, it should be skipped. Finally, the function should return the new array with duplicates removed.



## Exercise7: Find Winner

You need to determine the winner among two teams.
Let's consider two swimming teams - "crazyKats" and "funnyDucks".

Each team has shown 3 final results in three swimming events. For example, crazyKats showed three results (30, 60, 43).

One team wins only if the average number of points based on the three results is at least twice as high as the opponent's. Otherwise, it's a draw.

TASK:

Create an arrow function that calculates the average value of the team's three results. It can be calculated using the formula:
"(res1 + res2 + res3) / 3"

Use the created function to get the average result for the two teams.

Create a function with two parameters that will accept the arguments from the average score result of the teams. In this function, create conditional statements using if/else if to determine the winner and print a message with the result to the console.

DATA FOR THE TASK:
```
First variant: "crazyKats" - 44, 23, 71, "funnyDucks" - 65, 54, 49
Second variant: "crazyKats" - 85, 54, 41, "funnyDucks" - 23, 34, 27
```