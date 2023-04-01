const person = {
    firstName:'Pesho',
    lastName:'Peshov',
    introduce() {
        // const getFullName = function() {  //Връща undifined 
        //     return this.firstName + ' ' + this.lastName;
        // }
        const getFullName = () => {   //Това вече работи
            return this.firstName + ' ' + this.lastName;
        }
        console.log(`Hello, my name is ${getFullName()}`);
    }
}

person.introduce();