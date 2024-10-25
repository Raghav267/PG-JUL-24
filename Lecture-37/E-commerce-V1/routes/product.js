const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema");

router.get("/", async (req, res) => {
    const products = Product.find({});
    console.log(products);
    res.render("product/index",);
})

// export default router;
module.exports = router;