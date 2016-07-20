require('dotenv');
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* API */
router.get('/api/posts', function(req, res, next) {
  return knex.select().table('posts')
  .then(function(posts){
    res.status(200).send(posts);
  });
});

router.get('/api/posts/:id', function(req, res, next) {
  return knex.select().table('posts').where('id', req.params.id)
  .first()
  .then(function(posts){
    res.status(200).send(posts);
  });
});

// get comment list for a particular post
router.get('/api/posts/:id/comments', function(req, res, next) {
  return knex.select().table('comments').where('postid', req.params.id)
  .then(function(comments){
    res.status(200).send(comments);
  });
});

router.post('/api/posts', function(req, res, next) {
  return knex('posts').insert(req.body.post)
  .returning('id')
  .then(function(id){
    res.status(200).send(id);
  });
});

router.get('/api/comments', function(req, res, next) {
  return knex.select().table('comments')
  .then(function(comments){
    res.status(200).send(comments);
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
    res.status(200).send(id);
  });
});

/* End API */


module.exports = router;
