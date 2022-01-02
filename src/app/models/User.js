const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, maxlength: 255 },
  role: { type: String, maxlength: 100, default: "user" },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

User.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model("User", User);
