var students = {
    name : "bikash",
    rollNo : 12,
    mark : 511,
    printMark : () => {
        console.log(this.mark);
    },
}
console.log(students.name);
console.log(students.rollNo);
console.log(students.mark);
students.printMark();
var calculatePercentage = {
    calculatePercentage(mark) {
        return (mark / 600) * 100;
    },
}
students.__proto__ = calculatePercentage;
console.log(students);
let p = students.calculatePercentage(students.mark);
console.log(p);