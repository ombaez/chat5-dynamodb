const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/router");
const app = express();

app.get("/health", (req, res) => {
  return res.status(200).json("OK");
});
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
});

app.use("/", router);

module.exports = app;
