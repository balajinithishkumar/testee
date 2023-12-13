import mongoose from "mongoose";

const userSchenma = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const usermodel = mongoose.model("User", userSchenma);
export default usermodel;
