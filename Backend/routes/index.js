const express = require("express");
const router = express.Router();


// auth apis
router.use( "/auth" , require("./api/authAPIs/authAPI"))





module.exports = router