// Create a class called Square with a single property, sideLength and create a constructor that assigns that value
class Square {
    constructor(sideLength){
        this.sideLength=sideLength;
    }
    get area(){
        return this.sideLength**2;//squaring inside javaScript is using Exponent**
    //return this.sideLength*this.sideLength;
    }

    set area(value){
        this.sideLength=Math.sqrt(value);
    }

}
//console.log(new Square(10.23));
let me=new Square(4);
console.log(me.area);
//console.log(me);
me.sideLength=7;
console.log(me.area);//getter access the assigned sidelength proprty
me.area=81;//set will be  called here
//means it says get Side Length by ValuePassed(81);
console.log(me.sideLength);//without setter this will print 2
me.area=100;//check by 100 now
console.log(me.sideLength);//returns 10
//console.log(me);//prints whole object

// Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
// Create a setter for area that sets the sideLength for the given area
// (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength)