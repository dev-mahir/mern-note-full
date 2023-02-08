import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
  {
    name: { type: String },
    designation: { type: String },
    location: { type: String },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Employee", employeeSchema);
