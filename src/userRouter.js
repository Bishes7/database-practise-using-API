import express from "express";
import { getData } from "./Schema";

const router = express.Router();

// Using the CRUD Methods

// Get Method

router.get("/", async (req, res) => {
  const storedData = await getData();
  res.json({
    message: "Get Method implemented",
    storedData,
  });
});

// Post Method

router.post("/", async (req, res) => {
  try {
    const result = await dbTable(req.body).save();
    res.json({
      status: "success",
      message: "Post Method implemented",
      result,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// Patch Method

router.patch("/", async (req, res) => {
  const { _id, ...rest } = req.body;
  const updatedData = await dbTable.findByIdAndUpdate(_id, rest, { new: true });
  res.json({
    message: "Patch Method applied",
    updatedData,
  });
});

// Delete Method
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const deletedTask = await dbTable.findByIdAndDelete(_id);
  res.json({
    message: "Task Deleted",
    deletedTask,
  });
});

// Exporting router

export default router;
