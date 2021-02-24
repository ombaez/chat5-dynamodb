const postsDao = require("../daos/posts.daos");

class PostsModel {
  static getPost(id) {
    return postsDao.getPost(id);
  }

  static async insert(newPost) {
    return postsDao.insert(newPost);
  }

  static async updatePost(id) {
    return postsDao.update(id);
  }

  static async deletePost(id) {
    return postsDao.delete(id);
  }
}

module.exports = PostsModel;
