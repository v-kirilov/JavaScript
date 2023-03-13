let car = {
    model: 'BMW',
    year : '2010',
    facelift : true,
    honk: function () {  //Method with function expression
        console.log('Beep beep');
    },
    owner:{
        name:'Pesho',
        age:30,
    }
}

console.log(car.owner.name);

