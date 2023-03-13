//Method with function expression
let car = {
    model: 'BMW',
    year : '2010',
    facelift : true,
    honk: function () {  //Method with function expression
        console.log('Beep beep');
    },
    honk2: ()=>{    //Method with arrow function
        console.log('Beep2 beep2');
    },

    honk3() {  //Object method notation
        console.log(`${this.model} Beep3 beep3`);
    }
}

car.honk();
car.honk2();
car.honk3();

//Object as function library

let calc = {
        sum: function (a,b) {
            return a+b;
        },
        multy: (a,b)=> a*b,

};

console.log(calc.sum(5,4));