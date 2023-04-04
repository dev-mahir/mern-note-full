const express = require("express");
const cors = require("cors");
const path = require('path');
require("dotenv").config();
var mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => { 
  res.sendFile(path.join( path.resolve() + '/views/index.html'));
})
app.post('/register', (req, res) => { 
  res.status(201).json({
    message: "User is created"
  })
})
app.post('/login', (req, res) => { 
  res.status(201).json({
    message: "User is login"
  })
})











// if route not found 
app.use((req, res, next) => { 
  res.status(404).json({
    message: "route not found"
  })
})





// hadling server error 
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal server error"
  })
})





 const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
};


app.listen(process.env.PORT, (err) => {
  connectDb();
  console.log("Server is Running " );
 });