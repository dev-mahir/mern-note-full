


function Person(name, age) {
  this.name = name;          // property

  this.sayHello = () => {    // method 
    console.log("Hello, my name is " + this.name);
  }
}

let person = new Person();


Person.prototype.me = () => { 
  return "me"
}



console.log(person);