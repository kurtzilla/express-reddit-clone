
app.directive('postBlock', function(){
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    templateUrl: 'views/post.html',
    controller: ['$scope', 'viewService',
      function($scope, viewService) {

        $scope.viewService = viewService;

        $scope.upVote = function(idx){
          $scope.post.votes++;
        };

        $scope.downVote = function(idx){
          $scope.post.votes--;
        };
    }]
  }
});

app.directive('commentBlock', function(){
  return {
    restrict: 'E',
    require: '^postBlock',
    templateUrl: 'views/comment.html',
    controller: ['$scope', 'dataService',
      function($scope, dataService){

        $scope.submitComment = function(form, postid){
          if(form.$valid){
            if($scope.post && form.comment){
              var _comment = angular.copy(form.comment);
              _comment.postid = postid;

              dataService.createComment($scope.post, _comment);

              form.comment = {
                author:''
              };
              form.$setPristine();
              form.$setUntouched();

              $scope.viewService.view.showAddComment = false;
              $scope.viewService.view.showCommentListing = true;
            }
          }
        };
    }]
  }
});


app.directive('postAddForm', function() {
  return {
    restrict: 'E',
    scope: {
      showit: '='
    },
    templateUrl: 'views/postAddForm.html',
    controller: ['$scope', 'dataService', 'navService', 'viewService',
      function($scope, dataService, navService, viewService) {

      $scope.submitPost = function(form){

        if(form.$valid){
          if(form.poster){
            var _poster = angular.copy(form.poster);

            dataService.createPost(_poster);

            form.poster = {};
            form.$setPristine();
            form.$setUntouched();

            // reset filter and search criteria
            navService.nav.search = '';
            navService.nav.sort = 'votes';
            navService.nav.direction = 'desc';

            // // close add post panel
            viewService.view.showAddPost = false;
            viewService.view.showAddComment = false;
            viewService.view.showCommentListing = false;
          }
        } // if form valid
      } // submit post
    }] // controller function
  } // directive return
});
