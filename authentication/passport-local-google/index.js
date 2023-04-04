const express = require("express");
const cors = require("cors");
const mongoose = -require("mongoose");
const path = require("path");
require("dotenv").config();
const User = require("./models/User");
const ejs = require("ejs");
const MongoStore = require("connect-mongo");
const connectDb = require("./config/database");
require("./config/passport");
require('./config/google_passport')

connectDb();

const app = express();
app.set("view engine", "ejs");

const passport = require("passport");
const session = require("express-session");

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      collectionName: "sessions",
    }),
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session()); // allow passport for ex-session

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect("/login");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/profile");
  }
  next();
};

app.get("/login",  (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
    res.render("profile")
  // console.log(req);
  // if (req.isAuthenticated()) {
  //   res.render("profile");
  // } else {
  //   res.redirect("/login");
  // }
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/profile",
  })
);

app.get("/logout", (req, res, next) => {
  try {
    req.logout((err) => {
      return next(err);
    });
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// profile protected route
app.get("/profile",checkLoggedIn,  (req, res) => {
  console.log(req);
  res.render("profile");
});



// google 
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" , successRedirect: "/profile" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
 










// if route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// hadling server error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Internal server error",
    err: err.message,
  });
});

app.listen(process.env.PORT, (err) => {
  console.log("Server is Running ");
});
