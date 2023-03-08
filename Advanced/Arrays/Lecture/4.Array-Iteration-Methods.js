let cars = ['Audi', 'BMW', 'Opel'];

//For of
for (const car of cars) {
    console.log(car);
};


//ForEach Method!

// cars.forEach(function (car){
//     console.log(car);
// });

cars.forEach((car) => {
    console.log(car);
});

//Some just like ANY in C#
let result = cars.some((car) => {
    return car[0] == 'B';
});

console.log(result);  //Връща True ако намери 

//Find - Връща първия обект който отговаря на това изискване
let longNameCar = cars.find((car) => {
    return car.length > 3;
});

console.log(longNameCar);

//Filter VERY MUCH USED
cars.push('Bentley', 'Bughatti'); //Add some cars
console.log(cars);

// let fourLetterCars = cars.filter((car) => car.length == 4); //This works
// console.log(fourLetterCars);

let fourLetterCars = cars.filter((car) => {
    return car.length == 4;   //We need return statement
}); //This works

console.log(fourLetterCars);


//Map   VERY MUCH USED
let numbers = [1, 2, 3, 4, 5,];
let doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

let upperCaseCars = cars.map((car)=>car.toUpperCase());
console.log(upperCaseCars);

//Reduce

let sum = numbers.reduce((acc,num)=>{
    return acc+num;
},0);
console.log(sum);