let cars = ['Audi', 'BMW', 'Opel'];

//Join
let stringResult = cars.join(', ');

console.log(stringResult);

const num1 = [1,2,3,];
const num2 = [5,6,7,];

//Concat
let allNums = num1.concat(num2);
console.log(allNums);

//Keeps old arrays.
console.log(num1);
console.log(num2);

//Slice
let slicedNumes = allNums.slice(1,2);
let clonedNums = allNums.slice(); //Easy way to clone the whole array.

console.log(slicedNumes);
console.log(allNums);

// Include
let isAvailable = allNums.includes(1);
console.log(isAvailable);   // Returns True

//Index of
let bmwIndex = cars.indexOf('BMW'); //If there is no such element returns -1.
console.log(bmwIndex);