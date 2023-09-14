const Model = require("./todo.model");

const create = async (payload) => {
  return await Model.create(payload);
};

const list = async () => {
  return await Model.find();
};

const updateStatus = async (id, status) => {
  return await Model.findOneAndUpdate({ _id: id }, status, { new: true });
};

module.exports = { create, removeById, updateStatus };
