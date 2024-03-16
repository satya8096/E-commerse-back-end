const express = require("express");
const router = express.Router();
const ProductModel = require("../Models/ProductModel");

router.get("/shopykit/api/v1/all-products", async (req, res) => {
  const data = await ProductModel.find();
  res.status(200).json(
    data
  );
});
router.post("/shopykit/api/v1/all-products", async (req, res) => {
  const data = await ProductModel.create(req.body);
  res.status(200).json(data);
});

module.exports = router;
