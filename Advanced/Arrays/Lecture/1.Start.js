let cars = ['opel','bmw','ford'];

console.log(cars);

//let lastElement = cars.pop();

console.log(cars.pop()); //Removes only 1 

console.log(cars);

cars.push('Honda','formula 1');  //Cam add more than 1.

console.log(cars);


let numbers = [10,20,30,40];

console.log(numbers);
3
.0400.

numbers.shift();

console.log(numbers);

numbers.unshift(11);

console.log(numbers);

cars.splice(1,0,'Bastun');  //На позиция 1, без да трием елементи 0 , какво да вкараме.  

console.log(cars);

cars.reverse();
console.log(cars);