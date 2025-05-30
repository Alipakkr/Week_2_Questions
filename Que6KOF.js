 let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

let studentJson = JSON.stringify(student, null, 2);
console.log(studentJson);