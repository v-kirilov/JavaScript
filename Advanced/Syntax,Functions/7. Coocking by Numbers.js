// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.


function coock(num, p1, p2, p3, p4, p5) {
    let inputAsNumber = Number(num);
    let chop = function (input) {
        return input / 2;
    };
    let dice = function (input) {
        return Math.sqrt(inputAsNumber);
    };
    let spice = function (input) {
        return input+1;
    };
    let bake = function (input) {
        return input * 3;
    };
    let fillet = function (input) {
        return input * .8;
    };


    let arr = [p1, p2, p3, p4, p5];

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i];
        switch (currentCommand) {
            case 'chop':
                inputAsNumber = chop(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'dice':
                inputAsNumber = dice(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'spice':
                inputAsNumber = spice(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'bake':
                inputAsNumber = bake(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'fillet':
                inputAsNumber = fillet(inputAsNumber);
                console.log(inputAsNumber);
                break;
        }
    }
}

coock('32', 'chop', 'chop', 'chop', 'chop', 'chop');