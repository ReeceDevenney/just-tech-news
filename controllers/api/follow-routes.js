const router = require('express').Router();
const { Post, User, } = require('../../models');
const Follower = require('../../models/Follower')
const { Op } = require("sequelize");


router.get('/', (req, res) => {
    Follower.findAll({
        where: {
            follower_id: req.body.follower_id
        }
    })
    .then(dbFollowData => res.json(dbFollowData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
})

router.get('/test', (req, res) => {
    Follower.findAll({
        where: {
            follower_id: req.body.follower_id
        }
    })
    .then(resultData => resultData.map(res => res.followed_id))
    // .then(testdata => console.log(testdata))
    // const foundFollowers = firstSeach.map(res => res.followed_id)
    .then(anotherTest => Post.findAll({
        where: {
            user_id: {
                [Op.or]: anotherTest
            }
        }
    }))
    .then(dbFollowsData => res.json(dbFollowsData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
})

module.exports = router;