let person = {
    name:'Pesho',
    age:20,
    isMale:true,
};

let phones = {
    ivan : '123',
    'Ivan': '124',
    "Ivan2": '123',
    'Georgi Georgiev' : '12345'
};

console.log(phones['Ivan']);
console.log(phones['ivan']);

//Специално за key - value pairs
for (const key in phones) {
   console.log(`${key} - ${phones[key]}`);
}

//Iteration - methods

let names = Object.keys(phones); //Връща масив с keys 
let phonesNumbers = Object.values(phones); // Връща масив с values
console.log(names);

Object.keys(phones).forEach(x =>{
    console.log(`${x} - ${phones[x]}`);
});

let entries = Object.entries(phones);  //Масив с двойка елементи KVP.
console.log(entries);