


const result = new Promise((resolve, reject) => {
  if (5 > 2) {
    resolve(" 5 is greeter than 2");
  } else {
    reject();
  }
});


result.then((value) => { console.log(value)}, (error) => { console.log(error)})
result.then((res) => console.log(res)).catch((error) => console.log(error));