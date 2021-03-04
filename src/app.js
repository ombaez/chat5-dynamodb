const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const AWS = require("aws-sdk");
const config = require("./config");
const mainDBRepository = require("../src/repositories/main.repository")

mainDBRepository.connect()
app.mainDBRepository = mainDBRepository

if (config.env === "local")
  AWS.config.dynamodb = {
    endpoint: "http://localstack:4566",
    region: "us-east-2",
  };

const router = require("./routes/router");
const swaggerDocument = require("./swagger.json");

app.use(cors());

app.get("/health", (req, res) => {
  return res.status(200).json("OK");
});

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
