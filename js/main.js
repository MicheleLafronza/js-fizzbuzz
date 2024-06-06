// creo costante container
const container = document.querySelector(".container")



// creo ciclo
for (let i = 1; i <= 100; i++) {
    console.log(i);

    // creo costante div
    const quad = document.createElement("div");

    // aggiungo la classe default box al div
    quad.classList.add("box")

    // inserisco la costante div nel container
    container.appendChild(quad);


    
    // settiamo condizioni per fizz e buzz
    if (i % 3 == 0 && i % 5 == 0) {
        let fizzBuzz = ("FizzBuzz");
        console.log(fizzBuzz);
    } else if (i % 3 == 0) {
        let fizz = ("Fizz");
        console.log(fizz);
    } else if (i % 5 == 0) {
        let buzz = ("Buzz");
        console.log(buzz);
    } else  {
        
    }
}