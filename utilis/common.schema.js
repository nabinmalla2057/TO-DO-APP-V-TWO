module.exports = {
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  created_by: { type: isObjectId, ref: "User" },
};
