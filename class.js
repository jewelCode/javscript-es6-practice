class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Noapara High School";
    }
}

const student1 = new Student(1, "Jewel");
const student2 = new Student(2, "Keya");
const student3 = new Student(3, "Tonmoy")


console.log(student1.name, student2.name, student3.name);
