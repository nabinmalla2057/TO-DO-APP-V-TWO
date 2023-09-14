const router = require("express").Router();
const Controller = require("./todo.controller");

router.get("/", async (req, res, next) => {
  try {
    const result = await Controller.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("Title is missing..");
    const result = await Controller.create({ title });
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await Controller.updateStatus(id, { satus });
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
