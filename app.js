const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVpNzM3NzczIiwiaWF0IjoxNzE3NDI5NjY0fQ.ZGiXuzF7Z3XCXmdAVXr9IoTh_aXhHWQKqoDJ57UKMuc

app.get("/", (req, res) => {
  let token = jwt.sign({ email: "ui737773" }, "secret");
  res.cookie("tokken", token);
  res.send("hello");
});
app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send("read");
});

app.listen(3000);
