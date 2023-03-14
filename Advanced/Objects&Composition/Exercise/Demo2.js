function objDemo() {
    let car = {
        brand: 'Mercedes-Benz',
        model: 'S-500',
        age: 5,
        horsePower: 500,
        maxSpeed: 300,
        name:'Asen',
        move: function () {

           console.log(this.maxSpeed);
        },

        driver:{
            name:'Ivo',
            badgeName:`${this.name}  Dimitrov`
        }
    };
    console.log(car.move());
    console.log(car.driver.badgeName); // Връща undifined за name.
}

objDemo()
