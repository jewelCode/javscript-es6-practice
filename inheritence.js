class Parent{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}



class Child extends Parent{
    constructor(son){
        super();
        this.son = son;
    }
}



const baby = new Child("Arnold");
const baby2 = new Child("Tom");

console.log(baby)
console.log(baby2)