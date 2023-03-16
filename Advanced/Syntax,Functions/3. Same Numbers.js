// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function demo(input) {
    let inputNumber = input.toString();
    let isSame = true;
    let sum = 0;
    let digitToComater = inputNumber[0];
    for (let index = 0; index < inputNumber.length; index++) {
        sum += Number(inputNumber[index]);
        if (inputNumber[index] !== digitToComater) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

demo(22222);