function persondetails() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

let person = {
  name: "Alice",
  age: 25
};
persondetails.call(person); //outputis "Name: Alice, Age: 25"