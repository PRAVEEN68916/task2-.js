class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    gentelman() {
        console.log(`iam ${this.name},and my age is ${this.age}`);
    }
}
class student extends Person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    showDetails() {
        console.log(`this is my office ${this.id}`);
    }
}
const hack = new student('praveen', '21', '447563.');

hack.gentelman();
hack.showDetails();
