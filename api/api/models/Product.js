import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
    },
    regular_price: {
      type: Number,
    },
    sale_price: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    sort_desc: {
      type: String,
    },
    long_desc: {
      type: String,
    },
    photo: {
      type: String,
    },
    gallery: {
      type: Array,
      default: [],
    },
    category: {
      type: Array,
      default: [],
    },
    tag: {
      type: Array,
      default: [],
    },
    color: {
      type: Array,
      default: [],
    },
    brand: {
      type: String,
    },
    rating: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);
