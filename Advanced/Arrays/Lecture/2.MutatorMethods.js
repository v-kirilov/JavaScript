let cars = ['opel', 'bmw', 'ford', 'Zebra'];
console.log(cars);
cars.sort();  //Сортира по ASCII кода
console.log(cars);

let nums = [1, 5, 11, 6];
console.log(nums);

nums.sort();
console.log(nums);

//Трябва да му укажем как да сравнява.

//Това е подробния начин!!!
// let sortedNums = nums.sort(function (a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

//С arrow функция

// let sortedNums = nums.sort((a, b) => {
//     return a-b;
// });

//Или съкратен запис
let sortedNums = nums.sort((a, b) => a-b);

console.log(sortedNums);

sortedNums = nums.sort((a, b) => b-a);

console.log(sortedNums);

//Alphabetical sort
cars.sort((a,b)=>a.localeCompare(b));
console.log(cars);