class Cat{
    isHungry = true;

    constructor(name){
        this.name=name;
    }

    makesound(){
        console.log(`${this.name} makes sound meaow!`);
    }

}

let firstCat= new Cat('Navcho');

console.log(firstCat);

//Second example 

let catNames = [
    'Gary',
    'Ivan',
    'Pesho',
    'Tosho',
    'Dani',
]

let cats = catNames.map(x=> new Cat(x));
console.log(cats);

for (const cat of cats) {
    console.log(cat.name);
    //cat.makesound();
}

cats.forEach(x=>x.makesound());

//instanse of

console.log(firstCat instanceof Cat);