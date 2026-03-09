//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

//Given a student object and a course code, return the average grade the student has for that course or return -1 if the course is not in the student's transcript.
function getAverageGrade(student, course){
  let totalGrade = 0;
  for(let i = 0; i < student.transcript.length; i++){
    if(student.transcript[i].course === course) {
      for(let j = 0; j < student.transcript[i].grades.length; j++){
        totalGrade += student.transcript[i].grades[j];
      }
      return (totalGrade/student.transcript[i].grades.length).toFixed(2);
    } 
  }
  return -1;
}

console.log(`Bob's Average Grade for INFO 1601 is ${getAverageGrade(bob, "INFO 1601")}`); //LETS GOOOOOOOOOOOOOOOOOOO IT WORKS

//Given a student object, course number and assignment number returns the grade of that assignment of the given course of the student. If the student did not do the course, return -1.
function getAssignmentMark(student, course, num){
   for(let i = 0; i < student.transcript.length; i++){
    if(Number(student.transcript[i].course.slice(student.transcript[i].course.indexOf(" ")+1)) === course ){
      return student.transcript[i].grades[num-1];
    }
   }
   return -1;
}

console.log(`Bob's grade for the second assignment of INFO 1601 is ${getAssignmentMark(bob,1601,2)}`); //OH MY GOD I KNOW JAVASCRIPT???

//Given an array of students, a course code and an assignment number. Return the average of all the students mark for that assignment of that course.
function averageAssessment(students, course, assignment){
  let totalGrade = 0, count = 0;
  for(let i = 0; i < students.length; i++){
    for(let j = 0; j < students[i].transcript.length; j++){
      if(Number(students[i].transcript[j].course.slice(students[i].transcript[j].course.indexOf(" ")+1)) === course ){
        totalGrade+= getAssignmentMark(students[i], course, assignment);
        count++;
      }
    }
  }

  return totalGrade/count;
}

console.log(`Average Assignment 2 Grade for INFO 1601: ${averageAssessment(students, 1601, 2)}`);