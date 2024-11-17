const express = require("express");
const { orders } = require("../Controllers/ordercontroller");

const router = express.Router();

router.post("/orders", orders);

module.exports = router;
