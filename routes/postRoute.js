const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');

router.route('/')
    .get(postsController.getAllPosts)
    .post(postsController.createNewPosts);

router.route('/:id')
    .get(postsController.getPostById);

module.exports = router;