import mongoose from "mongoose";

const mongoUrl = "mongodb://127.0.0.1:27017/taskManager";

const dbConnect = async () => {
  const connectedDB = await mongoose.connect(mongoUrl);
  connectedDB && console.log("DB  Connected");
};

export default dbConnect;
