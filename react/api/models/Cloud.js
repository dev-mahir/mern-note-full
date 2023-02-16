import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
  {
    image: {type: Array}
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Cloud", employeeSchema);
