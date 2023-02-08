/**
 * Table of contents
 * --------------------
 * Remove falsy values 
 * convert any value to boolean
 * resizing array
 * multidimensional array to single array
 * sort condition && , || 
 * Replace all occurances of a string 
 * find prime number
 * 
 */


//  Remove falsy values ---------------------
const miscellaneous = ['❤', "Md Mahir", false, true, 123, "Dhaka", undefined, 0, NaN, null, "",]
let value = miscellaneous.filter(Boolean)
console.log(value);  //[ '❤', 'Md Mahir', true, 123, 'Dhaka' ]



// convert any value to boolean-------------------
// using double not (!!) in front of any value or Boolean constructor
console.log(!!1235);
console.log(!!"Md Mahir");
// or
console.log(Boolean("MD Mahir"));


// resizing array----------------
let num = [11, 12, 14756, 41, "Mahir"];
num.length = 2;
console.log(num);


// multidimensional array to single array-----------------
let arr = ['md Mahir', ['Mannan'], "Rafiq", ['Raju', 'Ismail']]
let arr1 = ['md Mahir', ['Mannan', ["Salam", 'Jobber']], "Rafiq", ['Raju', 'Ismail']]

// convart one label array 
console.log(arr.flat()); //[ 'md Mahir', 'Mannan', 'Rafiq', 'Raju', 'Ismail' ]

// multi label array 
console.log(arr1.flat(Infinity)); //['md Mahir', 'Mannan','Salam','Jobber' ,'Rafiq','Raju', 'Ismail']



// sort condition && , ||  ------------------
let captain = "Masrafi";
// if captain is true 
captain === "Masrafi" && console.log('The captain name is Masrafi');
// if captain is false 
captain === "Masrafi" || console.log('The captain name is not Masrafi');





// Replace all occurances of a string------------------
const quote = "React is a JS framework & this framework is the most popular front-end framework right now";

console.log(quote.replace('framework', 'library')); // it changes the first  word only
console.log(quote.replace(/framework/g, 'library')); // changes all same word 





