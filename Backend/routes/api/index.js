const express = require("express");
const router = express.Router();



router.use("/auth" , require("./allAPI/authAPI") )






module.exports = router