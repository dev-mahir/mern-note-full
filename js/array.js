/**
 * Table of contents
 * 
 * filter()
 * 
 */







/**filter()
 * filter by conditions 
 * no change main array
 * create new array
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 7, 9];
let result = numbers.filter((currValue, index, arr) => { 
     return currValue > 1;
})




// find
let num = ["one",1, 2, 3, 4, 5, 6, 7, 8, 7, 9];
let x = num.find(data => data > 0)
console.log(x); //1 