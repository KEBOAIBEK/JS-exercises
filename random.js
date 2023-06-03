const   firstName = prompt("Enter first name"),
        secondName = prompt("Enter second name");

const randomNumber = (Math.floor(Math.random() * 1000))  

if (randomNumber < 150) {
    alert(`First subscriber ${firstName} and 
    second subcriber ${secondName} are ${randomNumber} same with height you need to go gym`)
} else if (randomNumber <= 170) {
    alert(`First subscriber ${firstName} and 
    second subcriber ${secondName} are ${randomNumber} same with height`)
} else if(randomNumber < 190){
    alert(`First subscriber ${firstName} and 
    second subcriber ${secondName} are ${randomNumber} same with height `)
} else {
    "upps something going wrong"
}


