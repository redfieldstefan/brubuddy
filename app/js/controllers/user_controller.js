'use strict';

module.exports = function(app) {

  app.controller('UserController', ['$scope', '$http', 'auth', '$cookies', function($scope, $http, auth, $cookies) {

    // var User = resource('users');
    $scope.page = 'user';
    $scope.errors = [];
    $scope.user;
    $scope.users = [];
    var eat = $cookies.get('eat');
    $http.defaults.headers.common['eat'] = eat;

    $scope.getUsers = function() {
      $http.get('/api/users/get')
        .success(function(data) {
          console.log(data);
          $scope.users = data;
        })
        .error(function(data) {
          console.log(data);
          $scope.errors.push({msg: 'error getting user'});
        });
    };

    $scope.getUser = function(user) {
      $http.get('/api/users/get/profile')
        .success(function(data) {
          $scope.user = data.user;
          console.log($scope.user);
        })
        .error(function(data) {
          console.log(data);
          $scope.errors.push({msg: 'error getting user'});
        });
    };

    $scope.deleteUser = function(user) {
      User.remove(user, function(err, data) {
        if(err) {
          return $scope.errors.push({msg: 'could not delete user. sorry man.'});
        }
      });
    };

    $scope.editUser = function(user) {
      user.editing = true;
      $scope.userCopy = angular.copy(user);
    };

    $scope.saveUser = function(user) {
      user.editing = false;
      User.save(user, function(err, data) {
        if(err) {
          return $scope.errors.push({msg: 'could not update user'});
        }
      });
    };

    $scope.cancelEdit = function(user) {
      user.displayName = $scope.userCopy.displayName;
      user.email = $scope.userCopy.email;
      $scope.donutCopy = null;
    };

  }]);
};
