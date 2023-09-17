const { Schema, moddel, model } = require("mongoose");
const commonSchema = require("../../utilis/commonSchema");

const TodoSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  ...commonSchema,
});

module.exports = model("Todo", TodoSchema);
