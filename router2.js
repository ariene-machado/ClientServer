const express = require('express');
const router = new express.Router;
const User = require('./controller/User');
const Post = require('./controller/Post');
router.get('/', (req, res) => res.send('ok'));
// user routes
router.post('/user/create', User.create);
router.post('/user/find', User.find);
router.post('/user/find/post/:id', User.postsByUser);
// post routes
router.post('/post/create/:id', Post.create);
router.post('/post/populate/:id', Post.userByPost);

module.exports = router;