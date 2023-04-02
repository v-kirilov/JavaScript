function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;


    //This will create a function for each instance , but this will be very memory heavy, we need to reuse it. , WRONG WAY!
    // this.greet = function greet() {
    //     console.log(`Hello my name is ${this.name} and I'm ${this.age} yars old.`);
    // }
}

//The correct way to add method.
Person.prototype.greet = function greet() {
       console.log(`Hello my name is ${this.name} and I'm ${this.age} yars old.`);
}

let person1 = new Person('Gosho', 22, 175);
let person2 = new Person('Pesho', 35, 180);

console.log(person1.greet==person2.greet);

person1.greet();
person2.greet();