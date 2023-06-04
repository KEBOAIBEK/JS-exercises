function calculatFactorial(number){
    let factorial = 1;
    for(let i = 1; i <=number; i++){
        factorial *= i
    }     
    return factorial
}

let number = parseInt(prompt('enter the number for factorial:'));
let calc = calculatFactorial(number);
console.log("The factorial of " + number + " is: " + calc);