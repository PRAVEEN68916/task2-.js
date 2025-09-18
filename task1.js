class StudentManagementSystem {
    constructor(name, age, gender, phone, email, course, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.course = course;
        this.marks = marks;
    }
    getinfo() {
        console.log(`\nstudent name: ${this.name}`);
        console.log(`student age: ${this.age}`);
        console.log(`student gender: ${this.gender}`);
        console.log(`student phone: ${this.phone}`);
        console.log(`student email: ${this.email}`);
        console.log(`student course: ${this.course}`);
        console.log(`student marks: ${this.marks}`);
    }
}

//create object
const Student = new StudentManagementSystem("A.PRAVEEN", 21, "Male", "6305327733", "aripakapraveen735@gmail.com", "bsc(mpcs)", 89);

Student.getinfo();
