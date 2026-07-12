//  factory function 
function personMaker(name, age){
    const person =  {
        name:name,
        age: age,
        talk(){
            console.log(` Hi my name is ${this.name}`)
        }
    }
    return person;
}
let p1 = personMaker("adam", 25);
let p2 = personMaker("eve", 22);


//  classes 
class Person {
    constructor(name,age){
        this.name;
        this.age;
    }
    talk(){
        console.log(`Hi i am ${this.name}`)
    }
}

p1 = new Person("adam", 25);
p2 = new Person("eve", 22);

