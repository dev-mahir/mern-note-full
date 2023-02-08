import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Food", foodSchema);
