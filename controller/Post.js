const Post = require('../model/Post');
const User = require('../model/User');

module.exports = {
    create: async(req, res) => {
        console.log(req.params);
        user = req.params;
        id = user.id;
        const {
            title,
            subtitle
        } = req.body;
        const post = await Post.create({
            title,
            subtitle,
            user: id
        });
        await post.save();

        const userById = await User.findById(id);

        userById.posts.push(post);
        await userById.save();

        return res.send(userById);
    },
    userByPost: async(req, res) => {
        const {
            id
        } = req.params;
        const userByPost = await Post.findById(id).populate('user');
        res.send(userByPost);
    }
}