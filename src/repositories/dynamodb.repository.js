const AWS = require("aws-sdk");
const { awsConfig } = require("../config");

AWS.config.update({
  region: awsConfig.region,
  secretAccessKey: awsConfig.secretAccessKey,
  accessKeyId: awsConfig.accessKeyId,
  endpoint: "http://localstack:4566",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const manageRequest = (method, params) => {
  return new Promise((resolve, reject) => {
    console.log("manageReq", method, JSON.stringify(params));

    dynamodb[method](params, function (err, response) {
      console.log(response);
      if (err) {
        return reject(err);
      } else {
        return resolve(response);
      }
    });
  });
};

class DynamodbRepository {
  static get(params) {
    return manageRequest("get", params);
  }

  static update(params) {
    return manageRequest("update", params);
  }

  static query(params) {
    return manageRequest("query", params);
  }

  static delete(params) {
    return manageRequest("delete", params);
  }

  // para el save se usa put
  static put(params) {
    console.log(params);
    return manageRequest("put", params);
  }
}

module.exports = DynamodbRepository;
