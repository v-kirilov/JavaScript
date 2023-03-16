// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.
function divisor(a, b) {
    let firstNumber = Number(a);
    let secondNumber = Number(b);

    while (firstNumber !== secondNumber) {
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        } else {
            secondNumber -= firstNumber
        }
    }
    console.log(firstNumber);
}
divisor(15, 5);