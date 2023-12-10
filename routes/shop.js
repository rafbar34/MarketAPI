const express = require("express");
const { createProduct } = require("../controlers/shop/shop");
const router = express.Router();

router.get("/shop/products");
router.post("/shop/product", createProduct);
router.get("/shop/product/:id");
router.delete("/shop/product/:id");
router.patch("/shop/product/:id");

router.get("/shop/cart/products", createProduct);
router.post("/shop/cart/product");
router.delete("/shop/cart/product/:id");

module.exports = router;
