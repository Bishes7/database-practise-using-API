import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },

    hr: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },

    type: {
      type: String,
      default: "entry",
      enum: ["bad", "entry"],
    },
  },
  { timestamps: true }
);
// Lets create a table/collection in the database]
const dbTable = mongoose.model("namelist", taskSchema);

export const getData = (taskobj) => {
  return dbTable.find(taskobj);
};
