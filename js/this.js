// in a meathor , this refers to the object ( object er moddhe je function thake tai method)
const person = {
  firstName: "Md Mahir",
  lastName: "Tawkir",
  fullName: function () {
    return this.firstName + " " + this.lastName; //( this => object)
  },
};

// console.log(person.fullName());

// alone =>  global object
// console.log(this);  //window

// in a function refers to the global object
function a() {
  return this; //window object , in strict mode return undefined
}
a();

// In event this refers  to the event element
<button onclick="this.style.color='red'">Click to Remove Me!</button>;
//button color red



// Object Method Binding
const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getFullName: function () {
    return this.fullName;
  },
};





// Explicit Function Binding 

const person11 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person22 = {
  firstName: "John",
  lastName: "Doe",
};


console.log(person11.fullName()); // undefined ,
// here this for person11
// has no firstName and lastName

// for that use person22
console.log(person11.fullName.call(person22));



// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

const person33 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};


console.log(person33.fullName.bind(member));