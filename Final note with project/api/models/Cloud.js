import mongoose from "mongoose";

const cloudSchema = mongoose.Schema(
  {
    photos: {type:Array}
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Cloud", cloudSchema);
