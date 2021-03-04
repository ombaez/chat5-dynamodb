require("dotenv").config();

const required = [
  "NODE_ENV",
  "DB_MAIN_HOST",
  "DB_MAIN_USER",
  "DB_MAIN_PASS",
  "DB_MAIN_NAME",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_DEFAULT_REGION",
];

required.forEach((param) => {
  if (!process.env[param]) {
    throw new Error(`Environment parameter ${param} is missing`);
  }
});

const config = {
  env: process.env["NODE_ENV"],
};

const mainDatabase = {
  host: process.env["DB_MAIN_HOST"],
  user: process.env["DB_MAIN_USER"],
  pass: process.env["DB_MAIN_PASS"],
  name: process.env["DB_MAIN_NAME"],
};

const awsConfig = {
  region: process.env["AWS_DEFAULT_REGION"],
  secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],
  accessKeyId: process.env["AWS_ACCESS_KEY_ID"],
};

module.exports = { config, mainDatabase, awsConfig };
