class Cat{
    isHungry = true;
    static letgNumber = 4;
    constructor(name){
        this.name=name;
    }

    makesound(){
        console.log(`${this.name} makes sound meaow!`);
    }

    static vetCheck(){
        if (this.isHungry) {
            console.log('This cat should be fed.');
        }else {
            console.log('Super');
        }
    }
}

let myCat = new Cat('Navcho');
myCat.makesound();

//Static method
Cat.vetCheck(myCat);

//Static property
console.log(Cat.letgNumber);