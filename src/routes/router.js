const express = require("express");
const postsController = require("../controllers/posts.controller");
const router = express.Router();

const version = "v1";

/* Routes */

// /v1/post
router.get(`/${version}/post/:id`, postsController.getPost);
router.post(`/${version}/post`, postsController.insertPost);
router.put(`/${version}/post/:id`, postsController.updatePost);
router.delete(`/${version}/post/:id`, postsController.deletePost);

module.exports = router;
