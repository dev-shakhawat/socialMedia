const express = require("express");
const router = express.Router();


router.use( process.env.BASE_API_URL , require("./api/index"))


module.exports = router