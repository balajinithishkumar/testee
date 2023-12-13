import mongoose from "mongoose";

function databaseconnect(url) {
  return mongoose.connect(url);
}

export default databaseconnect;
