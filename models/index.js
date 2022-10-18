const User = require('./User');
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');
const Follower = require('./Follower')

// 1 to many
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// 1 to 1
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
// many to many
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

User.belongsToMany(User, {
    through: Follower,
    as: 'Followers',
    foreignKey: 'follower_id'
})

User.belongsToMany(User, {
    through: Follower,
    as: 'Followed',
    foreignKey: 'followed_id'
})

Follower.belongsTo(User, {
    foreignKey: 'follower_id'
})

Follower.belongsTo(User, {
    foreignKey: 'followed_id'
})

User.hasMany(Follower, {
    foreignKey: 'follower_id'
})

User.hasMany(Follower, {
    foreignKey: 'followed_id'
})


module.exports = { User, Post, Vote, Comment };

