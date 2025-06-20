const express = require("express");
const router = express.Router();
const { Order, OrderItem } = require("../models");

router.post("/", async (req, res) => {
  const { customerName, customerEmail, items } = req.body;
  const order = await Order.create({ customerName, customerEmail });

  for (let item of items) {
    await OrderItem.create({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
    });
  }

  res.json({ msg: "Order placed", orderId: order.id });
});

module.exports = router;
