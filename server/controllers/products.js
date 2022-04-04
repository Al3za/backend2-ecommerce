const express = require("express");

const {getAllProducts, getProduct} = require("../models/products");

const productRoutes = express.Router();

productRoutes.get("/", async (_req, res) => {
  const products = await getAllProducts();
  res.json({products});
});

productRoutes.get("/:sku", async (req, res) => {
  const product = await getProduct(req.params.sku);
  console.log(product)
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
}); 

module.exports = {productRoutes};
