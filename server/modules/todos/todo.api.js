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

router.post("/", async (req, res, next) => {
  // Removed ":id" from the route
  try {
    const { title } = req.body;
    if (!title) throw new Error("Title is missing..");
    const result = await Controller.create({ title });
    res.status(201).json({ data: result, msg: "success" }); // Use 201 Created status for successful creation
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, title } = req.body;
    const result = await Controller.updateStatus(id, { status, title });
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await Controller.updateStatus(id, { status });
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
