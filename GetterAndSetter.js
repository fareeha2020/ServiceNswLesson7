class person{
    constructor(name,age,heightInMm){
        this.name=name;
        this.age=age;
        this.heightInMm=heightInMm;
    }
    get heightInInches(){
        return this.heightInMm / 25.4;
    }//getting and setting value of object 
    set heightInInches(value){
        this.heightInMm=value*25.4;
    }
}
    let me =new person("far",23,1800);
    console.log(me);
    console.log(me.heightInInches);
    me.heightInInches=72;//sets our propert to 72 using this settter
    console.log(me.heightInInches);




