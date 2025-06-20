const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
const productRoutes = require("../ecommercebackend/routes/products");
app.use("/api/products", productRoutes);

const orderRoutes = require("../ecommercebackend/routes/orders");
app.use("/api/orders", orderRoutes);

app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});
