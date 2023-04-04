const arr = [1, 2, 3, 4];  //k = 5

let newArr = [];

for (let i = 1; i <= arr[arr.length - 1]; i++) {
  newArr.push(i);
}

const arrTwo = newArr.filter(item => !arr.includes(item));
console.log(arrTwo);

console.log(arrTwo[2]);




// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];