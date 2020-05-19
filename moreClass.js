class Pet{
    constructor(name,age,species){
        this.name=name;
        this.age=age;
        this.species=species;
    }
    getInfo(){
        //returns a template literal as please
        return `${this.name} the cat is ${this.age}`;
    }
    }


let cat=new Pet("sally",2,"polly");
console.log(cat);
let dog=new Pet("ally",2,"Olly");
console.log(dog);
//dog.breed="beagle";
//lets add a property to add as brees as beagle
//and standadize it so inherit pet class to dog class
class Dog extends Pet{
    //inheritance first dog class constructor executes
    //then super class constructor executes
    constructor(name,age,species,breed)
    {
        super(name,age,species);
        this.breed=breed;
    }
}
let myDog=new Dog("a",10,"Dog","beagle");
console.log(myDog);
//constant variable in child class
class DogBreed extends Dog{
   // inheritance first dog class constructor executes
    //then super class constructor executes
    constructor(name,age,breed)
    {
        super(name,age,"Dog");
        this.breed=breed;
    }
}
let myDogBreed=new DogBreed("tommy",10,"Beagle");
console.log(myDogBreed);
console.log(myDogBreed.getInfo());
//all functions of parent can be accessed by child classes
//if same name methods,local methods will be executes
//unless we specifically cal super function super.functionname() in child function

