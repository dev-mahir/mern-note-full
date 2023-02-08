const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// console.log(myObject.fullName());


// Promise


let marks = 30;

let result = new Promise((resolve, reject) => {
  if (marks > 32) {
    resolve("ok");
  } else { 
    reject("no");
  }
});

// result.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// })

result.then(
  function (data) { console.log(data) },
  function (error) { console.log(error)}
)





// Async 




