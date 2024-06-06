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

    // settiamo condizioni per fizz e buzz con variabili da inserire nei div e le classi associate per il colore di sfondo
    if (i % 3 == 0 && i % 5 == 0) {
        let fizzBuzz = ("FizzBuzz");
        quad.innerHTML=(fizzBuzz);
        quad.classList.add("fizz-buzz")
        console.log(fizzBuzz);
    } else if (i % 3 == 0) {
        let fizz = ("Fizz");
        quad.innerHTML=(fizz);
        quad.classList.add("fizz")
        console.log(fizz);
    } else if (i % 5 == 0) {
        let buzz = ("Buzz");
        quad.innerHTML=(buzz);
        quad.classList.add("buzz")
        console.log(buzz);
    } else {
        quad.innerHTML=(i);
        quad.classList.add("no-fizz-buzz")
    }
}