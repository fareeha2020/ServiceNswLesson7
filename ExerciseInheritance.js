// Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getInfo(){
        return`The name is ${this.firstName} and age is ${this.age}`;
    }
}
// Create a method inside student that calculates their average grade
class Student extends Person{
    constructor(firstName,lastName,age,grades){
        super(firstName,lastName,age);
        this.grades=grades;
    }
    averageGrade(){
        let sum=0;
        for (let i = 0; i < this.grades.length; i++) {
            sum = sum + this.grades[i];
        }
            let average=sum / this.grades.length;
              return average;         
        }
    
 // Override the getInfo method for Student so that it also displays the average grade of the student. Make sure to include a call to super.getInfo
    getInfo(){
        return super.getInfo() +` The average grade is  ${this.averageGrade()}`;
    }
}


let newStudent=new Student("far","fari",20,[87,68,78,91]);
console.log(newStudent.age);
console.log(newStudent);
console.log(newStudent.averageGrade());
console.log(newStudent.getInfo());
// Create a class called Teacher that extends Person. Teacher should have a property called students that should be an array of Student objects representing the students in their class
class Teacher extends Person{
    constructor(firstName,lastName,age,students){
        super(firstName,lastName,age,students);
        this.students=students;
     }
     getStudentAverageGrade(){
         let totalGrades = this.students.reduce(function(total1,student){
return total1 + student.averageGrade();}
,0);
return totalGrades / this.students.length;
//this second papameter is zero,means it says reduce to start total from zero
     }
     // Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call to super.getInfo
     getInfo()
     {
         return `${super.getInfo()}, their average student grade is ${this.getStudentAverageGrade()}`;
     }
    }
    let myTeacher=new Teacher("teacher","teach",23,[
        new Student("std2","std",23,[87,68,78,91]),
        new Student("std3","std",23,[87,68,78,91]),
        new Student("std4","std",23,[87,68,78,91]),
        new Student("std5","std",23,[87,68,78,91]),
        new Student("std6","std",23,[87,68,78,91])]
                );

                console.log(myTeacher);
                console.log(myTeacher.getStudentAverageGrade());
console.log(myTeacher.getInfo());

// Create a method in person called getInfo that takes no parameters and returns information about the name and age of the person
// Create a class called Student that extends Person. Student should have a property called grades that should be an array of numbers that represent their mark out of 100 for a series of tests


// Create a class called Teacher that extends Person. Teacher should have a property called students that should be an array of Student objects representing the students in their class
// Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number.
