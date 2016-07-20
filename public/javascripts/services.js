
function normalizeReturnedId(id){
  return parseInt(Array.isArray(id) ? id[0] : id);
}

app.service('navService', function(){
  this.nav = {};
  this.nav.search = "";
  this.nav.sort = "votes";
});

app.service('viewService', function(){
  this.view = {};
  this.view.selectedPostId = -1;
  this.view.showCommentListing = false;
  this.view.showAddComment = false;
  this.view.showAddPost = false;

  this.clickAddPost = function(){
    // console.log('click add post');
    this.view.showCommentListing = false;
    this.view.showAddComment = false;
    this.view.selectedPostId = -1;
    this.view.showAddPost = !this.view.showAddPost;
  };

  this.clickCommentListing = function(postid){
    if(this.view.selectedPostId !== postid){
      this.view.selectedPostId = postid;
      this.view.showCommentListing = true;
    } else {
      this.view.showCommentListing = !this.view.showCommentListing;
    }
    this.view.showAddComment = false;
    this.view.showAddPost = false;
  };

  this.clickAddComment = function(postid){
    if(this.view.selectedPostId !== postid){
      this.view.selectedPostId = postid;
      this.view.showAddComment = true;
    } else {
      this.view.showAddComment = !this.view.showAddComment;
    }
    this.view.showCommentListing = false;
    this.view.showAddPost = false;
  };
});

app.service('dataService', function($http){
  this.createPost = function(post){
    var _self = this;
    return $http.post('/api/posts/', {post})
    .then(function(data){
      return _self.fetchPostById(normalizeReturnedId(data.data));
    })
    .then(function(newPost){
      console.log('NEW POST', newPost);
      _self.posts.push(newPost.data);
    });
  };

  this.createComment = function(post, comment){
    var _self = this;
    return $http.post('/api/comments/', {comment})
    .then(function(data){
      return _self.fetchCommentById(normalizeReturnedId(data.data));
    })
    .then(function(newComment){
      post.comments.push(newComment.data);
    });
  };

  this.fetchPosts = function(){
    return $http.get('/api/posts/');
  };

  this.fetchComments = function(){
    return $http.get('/api/comments/');
  };

  this.fetchPostById = function(id){
    return $http.get('/api/posts/' + id);
  };

  this.fetchCommentById = function(id){
    return $http.get('/api/comments/' + id);
  };

  this.seedData = function(){
    var _self = this;
    this.fetchPosts()
    .then(function(posts){
      _self.posts = posts.data;
      return _self.fetchComments();
    })
    .then(function(comments){
      _self.comments = comments.data;
      _self.posts.forEach(function(post){
        var postId = post.id;
        post.comments = _self.comments.filter(function(com){
          return com.postid === postId;
        });
      })
    })
  };

  /* Seed our data on entry */
  this.seedData();

});
