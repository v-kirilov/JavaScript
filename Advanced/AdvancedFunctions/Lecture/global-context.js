//global context
// function random() {
//     console.log(this);
//     return Math.random;

// }
// random();

//object context
let obj = {
    name:'Peter',
    greet() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
obj.greet(); //method invocation

let greet = obj.greet; //copy function by reference
greet(); //Global invocation
