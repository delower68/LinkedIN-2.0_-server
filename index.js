require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("LinkedIN 2.0 server is running");
  });
  
  app.listen(port, () => {
    console.log(`LinkedIN 2.0 running on ${port}`);
  });
  