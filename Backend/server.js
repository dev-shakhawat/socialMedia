// env setup
require("dotenv").config();



const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const app = express();





app.use(cors());   // cors setup




app.use(router);  // api routes




app.listen(process.env.PORT || 8080 , () => {
    console.log("Server is running on port 8080");
});