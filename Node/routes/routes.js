const express = require("express");
const router = express.Router();
const assetRoutes = require("./asset.routes");

router.use("/assets", assetRoutes);
module.exports = router;
