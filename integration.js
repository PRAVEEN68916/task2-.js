class studentjoiningsystem {
    #fees = 0;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.#fees = 5000;
    }
    getdetails() {
        return `name:${this.name}, age:${this.age}, course:${this.course}, amount:${this.#fees}`;
    }
    setfees(amount) {
        console.log('I am joining the MRS.AVN.College');
        this.#fees = amount;
    }
}
class schoolstudent extends studentjoiningsystem {
    getdetails() {
        return `In MRS AVN School: ${super.getdetails()}`;
    }
}
class collegestudent extends studentjoiningsystem {
    getdetails() {
        return `Recently I am joining: ${super.getdetails()}`;
    }
}

const schoolStu = new schoolstudent('A.Praveen', 21, 'SSC');
const collegeStu = new collegestudent('A.Praveen', 21, 'Bsc(MPCS)');

console.log(schoolStu.getdetails());
console.log(collegeStu.getdetails());

const calculation = new studentjoiningsystem('A.Praveen', 21, 'Bsc(MPCS)');
const s1 = schoolstudent (`in mrs avn school ${super.getdetails()}`);
const s2 = collegestudent(`recently ia, joining ${super.getdetails()}`);

console.log(calculation.getdetails());
calculation.setfees(25000);
console.log(calculation.getdetails());
