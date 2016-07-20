
require('dotenv');
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* API */
router.get('/api/posts', function(req, res, next) {
  var _posts = [];
  return knex.select().table('posts')
  .then(function(posts){
    _posts = posts;
    return knex.select().table('comments');
  })
  .then(function(comments){
    var _comments = comments;
    _posts.forEach(function(post){
      var postId = post.id;
      post.comments = _comments.filter(function(com){
        return com.postid === postId;
      });
    });
    res.status(200).send(_posts);
  });
});

router.get('/api/posts/:id', function(req, res, next) {
  var _post = {};
  return knex.select().table('posts').where('id', req.params.id)
  .first()
  .then(function(post){
    _post = post;
    return knex.select().table('comments').where('postid', _post.id);
  })
  .then(function(comments){
    _post.comments = (comments && comments.length > 0) ?
      comments : [];
    res.status(200).send(_post);
  });
});

router.post('/api/posts', function(req, res, next) {
  return knex('posts').insert(req.body.post)
  .returning('id')
  .then(function(id){
    res.redirect('/api/posts/'+ id);
  });
});

router.get('/api/comments/:id', function(req, res, next) {
  return knex.select().table('comments').where('id', req.params.id)
  .first()
  .then(function(comments){
    res.status(200).send(comments);
  });
});

router.post('/api/comments', function(req, res, next) {
  return knex('comments').insert(req.body.comment)
  .returning('id')
  .then(function(id){
    res.redirect('/api/comments/'+ id);
  });
});

/* End API */


module.exports = router;
