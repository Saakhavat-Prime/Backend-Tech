class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    talk() {
        console.log(`hello i am ${this.name}`);
    }
}

class student extends Person {

    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
        talk() {
        console.log(` this overrides `);

    }
}

class teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;

    }

}

let s1 = new student("eve", 25, 90);