//1
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.allMarks = [];
        this.dismissed = false;
    };
    //2
    getInfo() {
        return `Студент ${this.course}го курсу, університету -  ${this.university}, ${this.fullName}`
    };
    //3
    get marks(){
        if(this.dismissed === true || this.allMarks.length == 0){
            return null;
        } else
        return this.allMarks;
    };
    //4
    set marks(mark) {
        if(this.dismissed === false){
            this.allMarks.push(mark);
        }        
    };
    //5
    getAverageMark(){
        if(this.allMarks.length > 0){
            return this.allMarks.reduce((sum, mark) => sum += mark, 0) / this.allMarks.length;
        } else {
            return null;
        }
    };
    //6
    dismiss() {
        this.dismissed = true;
        console.log('Студента виключено');
    };
    //7
    recover(){
        this.dismissed = false;
        console.log('Студента поновлено');
    };
};


const student = new Student('Острозька Академія', '1', 'Андрій');
console.log(`Інформація про студента: ${student.getInfo()}`);
student.marks = 5;
student.marks = 4;
student.marks = 4;
student.marks = 5;
student.marks = 5;
console.log(`Оцінки: ${student.marks}`);
console.log(`Середня оцінка: ${student.getAverageMark()}`);
student.dismiss();
console.log(`Оцінки: ${student.marks}`);
student.recover();
console.log(`Оцінки: ${student.marks}`);

