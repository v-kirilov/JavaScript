//Call & Apply
function  introduce(firstName,lastName) {
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}

introduce('Gosho','Ivanov');  //Global invocation

let person = {
    name:'Pesho',
}

introduce.call(person,'Gosho','Ivanov'); //invoke using Call
introduce.apply(person,['Stamat','Brangov']); //invoke using Apply

//Bind
let superHuman = {
    name:'Superman',
}

let superintrodution = introduce.bind(superHuman,'Lois','Lane');  //Returns a totaly new function
superintrodution();