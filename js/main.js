// creo ciclo
for (let i = 1; i <= 100; i++) {
    console.log(i);

    // settiamo condizio per fizz e buzz
    if (i % 3 == 0 && i % 5 == 0) {
        let fizzBuzz = ("FizzBuzz");
        console.log(fizzBuzz);
    } else if (i % 3 == 0) {
        let fizz = ("Fizz");
        console.log(fizz);
    } else (i % 5 == 0) {
        let buzz = ("Buzz");
        console.log(buzz);
    }
}