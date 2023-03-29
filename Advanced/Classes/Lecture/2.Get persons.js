function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString(){
            return(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
        }
    }
    // let anna = new Person('Anna','Simpson',22,'anna@yahoo.com');
    // let softUni = new Person();
    // let stephan = new Person('Stephan','Johnson',25);
    // let gabriel = new Person('Anna','Simpson',22,'anna@yahoo.com');
    let arr = [];
    arr.push(new Person('Anna','Simpson',22,'anna@yahoo.com'));
    arr.push(new Person('SoftUni'));
    arr.push(new Person('Stephan','Johnson',25));
    arr.push(new Person('Gabriel','Peterson',24,'g.p@gmail.com'));
    console.log(arr);
    return arr;
}


// Anna	Simpson	22	anna@yahoo.com
// SoftUni			
// Stephan	Johnson	25	
// Gabriel	Peterson	24	g.p@gmail.com
