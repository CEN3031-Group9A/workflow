// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  $scope.visible = true;
  $scope.inEditMode = false;
  $scope.editItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== "" && $scope.todos.indexOf($scope.newItem) === -1){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.enableEditMode = function(item){
	this.inEditMode = true;
  }

  $scope.isDisplayed = function(li){
	  return this.visible;
  }
  $scope.confirmEdit = function(item){
	  console.log(this.editItem);
	  var index = $scope.todos.indexOf(item);
	  $scope.todos[index] = this.editItem;
	  this.editItem = "";
	  this.inEditMode = false;

  }

  $scope.cancelEdit = function(item){
	  this.inEditMode = false;
	  this.editItem = "";
  }


  $scope.keyConfirmEdit = function(event){
	  if (event && !$scope.validate(event, 13))
		  return
	  var index = $scope.todos.indexOf(this.do);
	  $scope.todos[index] = this.editItem;
	  this.editItem = "";
	  this.inEditMode = false;

  }
  $scope.validate = function(event, keycode){
      var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0
      return key === keycode;
  }
//  $scope.editItem = function(item){
//    console.log("in edit");
//    var index = $scope.todos.indexOf(item);
//
//	if (this.visible === true){
//	    if (this.inEditMode === true){
//	  	  this.visible = false;
//		  this.inEditMode = true;
//	    }
//	}
//  }
});
