const obj = {
  dev: { name: "Mahir", skill: "Mern" },
  food: ["alo", "lao", "potol"],
  movie: [
    { name: "Avater", year: 2010, status: true },
    { name: "don", year: 2012, status: true },
  ],
};

const fruits = ["apple", "banana"];


// update array object value 
// obj.movie[obj.movie.indexOf(obj.movie.find((data) => data.name === "don"))] = {
//   ...obj.movie[
//     obj.movie.indexOf(obj.movie.find((data) => data.name === "don"))
//   ],
//   year: 2024
// };
// or 
obj.movie[obj.movie.findIndex((data) => data.name === "don")] = {
  ...obj.movie[obj.movie.findIndex((data) => data.name === "don")],
  year: 20212
};



const newObj = {
  ...obj,
  dev: { ...obj.dev, skill: "BlockChain" },
  // food: [...obj.food, "haji", "paji"],
  food: [...obj.food.filter((data) => data != "alo"), "haji"], // alo bad , add haji
  // movie: [...obj.movie, { name: "Jhon wick", year: 2023, status: false }], // adde new 
};

console.log(newObj);
