function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined){
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}
Student.prototype.addMarks = function(){
    this.mark = [mark];
}

Student.prototype.addMarks = function(...[mark1, mark2, mark3]){
    this.marks = [mark1, mark2, mark3];
}

Student.prototype.getAverage  = function(){
    let total = 0;
    for (i = 0; i < this.marks.length; i++) {
        total = total + this.marks[i];
    }
    let average = (total / this.marks.length);
    //return Math.round(average);
    //return average.toFixed(4);
}

Student.prototype.exclude = function excluded(reason){
    if(this.getAverage() <= 2){
        delete this.marks;
        delete this.subject;
        this.exclude = reason;
    }
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
student1.exclude("low grades");
console.log(student1.getAverage());

let student2 = new Student("Ivan", male, 26);
student2.setSubject("Philosophy");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude("low grades");

let student3 = new Student("Shura", "female", 22);
