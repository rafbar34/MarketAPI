const express = require("express");
const { createProduct } = require("../controlers/shop/shop");
const router = express.Router();

router.get("/products");
router.post("/product", createProduct);
router.get("/product/:id");
router.delete("/product/:id");
router.patch("/product/:id");

router.get("/cart/products", createProduct);
router.post("/cart/product");
router.delete("/cart/product/:id");

module.exports = router;
