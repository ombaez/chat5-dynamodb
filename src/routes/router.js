const express = require("express");
const postsController = require("../controllers/posts.controller");
const router = express.Router();

const version = "v1";

/* Routes */

// /v1/post
router.get(`/${version}/posts/:id`, postsController.getPost);
router.post(`/${version}/posts`, postsController.insertPost);
router.put(`/${version}/posts/:id`, postsController.updatePost);
router.delete(`/${version}/posts/:id`, postsController.deletePost);

module.exports = router;
