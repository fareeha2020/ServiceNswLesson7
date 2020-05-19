// Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values
// Override the getInfo method for Student so that it also displays the average grade of the student. Make sure to include a call to super.getInfo
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this,age=age;
    }
    getInfo(){
        return`The name is ${this.firstName} and age is ${this.age}`;
    }
}
// Create a class called Student that extends Person. Student should have a property called grades that should be an array of numbers that represent their mark out of 100 for a series of tests
// Create a method inside student that calculates their average grade
class Student extends Person{
    constructor(firstName,lastName,age,grades){
        super(firstName,lastName,age);
        this.grades=grades;
    }

    averageGrade(grades){
        //reduce is a call back function which can return total
        let totalGrade = this.grades.reduce(function(sum,eachElement){
            return sum+eachElement;});

               return totalGrade/ this.grades.length;
    }
    // Override the getInfo method for Student so that it also displays the average grade of the student. Make sure to include a call to super.getInfo
    getInfo(){
        return super.getInfo() +` The average grade is  ${this.averageGrade()}`;
    }
}


let newStudent=new Student("far","fari",20,[80,60,80]);
console.log(newStudent);

console.log(newStudent.averageGrade());


// Create a method in person called getInfo that takes no parameters and returns information about the name and age of the perso


// Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number.
// Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call to super.getInfo