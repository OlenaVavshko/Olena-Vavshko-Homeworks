//creating arrays
const students = [
    {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];

//1 function - return a list of subject for a particular student

const getSubjects = (students) => {
  let subjArray = Object.keys(students.subjects);
  let subject = [];
  for(let i = 0; i < subjArray.length; i++) {
    subject.push((subjArray[i].charAt(0).toUpperCase() + subjArray[i].slice(1)).replaceAll("_", " "));
  }
  return subject;
}

console.log(getSubjects(students[1]));

//2 function - get average mark for a student
const getAverageMark = (students) => {
  let marks = Object.values(students.subjects).flat(); //bringing all the marks into a single array
  averageStudentMark = marks.reduce((accumulator, element) => accumulator + element, 0) / marks.length; //calculating an average 
  return averageStudentMark.toFixed(2); // formating a number to 2 decimal
}

console.log(getAverageMark(students[2]));

//3 function - get student info
const getStudentInfo = (students) => {
  return {
      name: students.name,
      course: students.course,
      'average mark': getAverageMark(students),
  }
};
console.log(getStudentInfo(students[0]));

//4 get students names in alphabetical order
const getStudentsNames = (students) => students.map(student => student.name).sort();

console.log(getStudentsNames(students));

//5 find the best student
const getBestStudent = (students) => {
  let maxMark = getAverageMark(students[0]);
  let name = students[0].name;
  for (let i = 0; i < students.length; i++) {
    while (getAverageMark(students[i]) > maxMark) {
      maxMark = getAverageMark(students[i]);
      name = students[i].name;
    }
  }
  return name;
};

console.log(getBestStudent(students));

//6 function - count letters in a word
function calculateWordLetters(string) {
  let object = {};
  string.split('').forEach(letter => {      
    object[letter] = (object[letter] || 0) + 1;
  });
  return object;
};

console.log(calculateWordLetters('test'));
