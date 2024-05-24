const express = require("express");
const router = express.Router();


//Import Controller
const { dummyLink ,likePost ,unlikePost } = require("../controller/likeController");
const {createComment} = require("../controller/commentController");
const {createPost ,getAllPosts} = require("../controller/postController");


//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/posts" , getAllPosts);
router.post("/Likes/like" ,likePost);
router.post("/Likes/unlike", unlikePost);
//export
module.exports = router;
