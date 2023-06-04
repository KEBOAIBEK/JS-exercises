function guessTheNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guess;
    var attempts = 0;
    
        while (true) {
        guess = parseInt(prompt("Guess the number between 1 and 100:"));
    
        // Validate the guess
        if (isNaN(guess)) {
            alert("Invalid input. Please enter a number.");
            continue;
        }
    
        attempts++;
    
        // Check if the guess is correct
        if (guess === randomNumber) {
            alert("Congratulations! You guessed the number correctly.");
            break;
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
        }
    
        alert("Game over. It took you " + attempts + " attempts.");
    }
    
    // Call the function to start the game
    guessTheNumber();
    
    