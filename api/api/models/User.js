import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
    },
    cell: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    age: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    productList: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    foods: {
      type: [mongoose.Types.ObjectId],
      ref: "Food",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//static mathods
userSchema.statics.findByGender = function (name) {
  return this.where({ gender: name }); //this - doc
};

//static mathods
userSchema.statics.userFoods = function (id) {
  return this.findById(id).select("foods").populate("foods"); //this - doc
};

//query mathods
userSchema.query.gender = function (name) {
  return this.where({ gender: name });
};

//query mathods
userSchema.query.getFoods = function () {
  return this.populate("foods").select(["foods", "name", "location"]);
};

// custom methods
userSchema.methods.welcomeMsg = function () {
  return `Hi ${this.name}`;
};

// property
userSchema.virtual("welcome").get(function () {
  return `Hi, ${this.name}. welcome`;
});

// middlweres
userSchema.pre("save", function (next) {
  this.isAdmin = true;
  next();
});

userSchema.post("save", function (doc, next) {
  doc.isAdmin = false;
  next();
});

export default mongoose.model("User", userSchema);
