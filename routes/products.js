const express = require("express");
const router = express.Router();
const { Product, Category } = require("../models");

// Add
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// Edit
router.put("/:id", async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.json({ msg: "Updated" });
});

// Delete
router.delete("/:id", async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ msg: "Deleted" });
});

// View All
router.get("/", async (req, res) => {
  const products = await Product.findAll({
    include: [{ model: Category, as: "category" }],
  });
  res.json(products);
});

// View One
router.get("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id, {
    include: [{ model: Category, as: "category" }],
  });
  res.json(product);
});

module.exports = router;
