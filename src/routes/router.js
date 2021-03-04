const express = require("express");
const acl = require('express-acl')
const postsController = require("../controllers/posts.controller");
const userController = require("../controllers/user.controller")
const authController = require("../controllers/auth.controller")
const middleware = require("../middleware/auth.middleware")
const router = express.Router();

const version = "v1";

/* Routes */


acl.config({
    baseUrl: version,
    path: 'src'
})

/* Login */

router.post(`/${version}/login`, authController.authenticate)

/* User */

router.post(`/${version}/users`, middleware.validateAuthentication, acl.authorize, userController.signUp);
router.put(`/${version}/users/:id`, userController.update);
router.delete(`/${version}/users/:id`, userController.delete);
router.get(`/${version}/users/:id`, userController.get);

// /v1/post
router.get(`/${version}/posts/:id`, postsController.getPost);
router.post(`/${version}/posts`, postsController.insertPost);
router.put(`/${version}/posts/:id`, postsController.updatePost);
router.delete(`/${version}/posts/:id`, postsController.deletePost);

module.exports = router;
