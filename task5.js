class student{
    #marks;
    constructor(name, marks){
        this.name=name;
        this.#marks=marks;
    }
    getmarks(){
        return this.#marks;
    }
    updatemarks(newMarks){
        if(newMarks>=0){
            this.#marks=newMarks;

        }
        else{
            console.log('invalid marks');
        }
    }
    displyinfo(){
        console.log(`Name: ${this.name},Marks: ${this.#marks}`)
    }
}
const person =new student('praveen',80);
person.displyinfo();

person.updatemarks(100);
console.log(`updated marks:${person.getmarks()}`)