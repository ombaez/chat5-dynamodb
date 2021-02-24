const dynamodbRepository = require("../repositories/dynamodb.repository");
// const { table_products } = require("../config/config");

class PostsDao {
  static async getPost(id) {
    const params = {
      TableName: "posts",
      Key: {
        id,
      },
    };

    const result = await dynamodbRepository.get(params);

    return result.Item;
  }

  static insert(newPost) {
    const params = {
      TableName: "posts",
      Item: newPost,
      ReturnValues: "ALL_OLD",
    };

    return dynamodbRepository.put(params);
  }

  static async update(id) {
    var dateAttri = new Date().toString();

    const params = {
      TableName: "posts",
      Key: {
        id,
      },
      UpdateExpression: "set updatedAt= :newDateAttri, #name= :newNameAttri",
      ExpressionAttributeValues: {
        ":newDateAttri": dateAttri,
        ":newNameAttri": "Tenis Adidas",
      },
      ExpressionAttributeNames: {
        "#name": "name",
      },
      ReturnValues: "UPDATED_NEW",
    };

    return dynamodbRepository.update(params);
  }

  static async delete(id) {
    const params = {
      TableName: "posts",
      Key: {
        id,
      },
    };

    return dynamodbRepository.delete(params);
  }
}

module.exports = PostsDao;
