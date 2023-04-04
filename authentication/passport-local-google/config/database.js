const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database is connected"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
