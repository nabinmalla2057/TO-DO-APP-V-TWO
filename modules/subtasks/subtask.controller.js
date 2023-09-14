const Model = require("./subtask.model");

const create = async (payload) => {
  return await Model.create(payload);
};

const updateStatus = async (id, status) => {
  return await Model.findOneAndUpdate({ _id: id }, status, { new: true });
};

const removeById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, updateStatus };
