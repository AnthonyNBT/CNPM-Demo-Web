const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, maxlength: 255 },
  role: { type: String, maxlength: 100, default: "user" },
  age: { type: Number },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
