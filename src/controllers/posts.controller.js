const postsModel = require("../models/posts.model");

class PostsController {
  static async insertPost(req, res) {
    try {
      const { id, name, amount, cost } = req.body;
      const newPost = {
        id,
        name,
        amount,
        cost,
        createAt: new Date().toString(),
      };

      const result = await postsModel.insert(newPost);
      return res.status(200).send(result);
    } catch (error) {
      console.log("ERROR: " + error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async getPost(req, res) {
    try {
      const { id } = req.params;
      const result = await postsModel.getPost(id);
      if (!result) return res.status(404).json({ msg: "Record not found" });
      return res.status(200).json(result);
    } catch (error) {
      console.log("ERROR: " + error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async updatePost(req, res) {
    try {
      const { id } = req.params;
      const result = await postsModel.updatePost(id);
      if (!result) return res.status(404).json({ msg: "Record not found" });
      return res.status(200).send(result);
    } catch (error) {
      console.log("ERROR: " + error);
      return res.status(500).send("Internal Server Error");
    }
  }
  static async deletePost(req, res) {
    try {
      const { id } = req.params;
      const result = await postsModel.deletePost(id);
      if (!result) return res.status(404).json({ msg: "Record not found" });
      return res.status(200).send(result);
    } catch (error) {
      console.log("ERROR: " + error);
      return res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = PostsController;
