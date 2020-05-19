// Create a static method in the Owner class that takes 1 argument which should be an integer number and returns an array of randomly generated Owners with length equal to the number given. The ids of the owners should all be unique. You can use this gist to generate random

const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}

//add id propert

class Person{
    constructor(firstName,lastName,age,id){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.id=id;
    }
   
    //ststic function where we pass number of random people to be picked up
    static generateRandomPeople(numberOfPeople){
        let randomPeople=[];
        for(let i=0;i<numberOfPeople;i++){
        //generate code for random person
       //use Id as "i" as it is always different
        let randomPerson=new Person(getRandomGivenName(),getRandomFamilyName(),34,i);
        randomPeople.push(randomPerson);
    }
    return randomPeople;
}
}

    let randomPeople=Person.generateRandomPeople(5);
    console.log(randomPeople);
