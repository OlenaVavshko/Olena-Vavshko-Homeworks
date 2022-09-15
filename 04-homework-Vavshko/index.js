const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//crearing separate arrays for male and female students
const girls = [];
const boys = [];
//identifying and separating female students based on the -a ending in their name
for (let i = 0; i < students.length; i++) {
    if (students[i].lastIndexOf("а") === students[i].length-1) {
        girls.push(students[i]);
    } else {
        boys.push(students[i]);
    }
}
//pairing students

const pairs = [];

for (let i = 0; i < girls.length; i++) {
    pairs.push([boys[i], girls[i]]);
}
console.log(pairs);

//assigning themes

const getStudentsAndThemes = [];

for (let i = 0; i < themes.length; i++) {
    getStudentsAndThemes.push([pairs[i], themes[i]]);
}

console.log(getStudentsAndThemes);

//awarding marks

const getMarks = [];

for (let i = 0; i< marks.length; i++) {
  getMarks.push([students[i], marks[i]]);
}
console.log(getMarks);


//award a random mark
let min = 1;
let max = 5;
const getRandomMark = [];
for (let i = 0; i < themes.length; i++) {
    getRandomMark.push([boys[i] + ' і ' + girls[i], themes[i], Math.floor(Math.random() * (max - min) + min)]);
}
console.log(getRandomMark);