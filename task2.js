class studentsmarks {
    constructor(name, age, gender, phone, email, course, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.course = course;
        this._marks = 0;

        if (marks > 0 && marks < 100) {
            this._marks = marks;
        } else {
            this._marks = 0;
        }
    }

    getmarks() {
        console.log(`name:${this.name}`);
        console.log(`age:${this.age}`);
        console.log(`gender:${this.gender}`);
        console.log(`phone:${this.phone}`);
        console.log(`email:${this.email}`);
        console.log(`course:${this.course}`);
        console.log(`marks:${this._marks}`);
        return this._marks;
    }
}
const marks = new studentsmarks("Praveen", 21, "Male", "1234567890", "praveen@example.com", "Math", 85);

console.log(marks.getmarks());