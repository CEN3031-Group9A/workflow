// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

  $scope.highP = ["Learn Angular", "Learn node"];
  $scope.medP = ["Med1","Med2"];
  $scope.lowP = ["Low1","Low2"];

  $scope.newItem = "";
  $scope.visible = true;
  $scope.inEditMode = false;
  $scope.editItem = "";
  $scope.priority = -1;
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== "" && $scope.todos.indexOf($scope.newItem) === -1){
      if($scope.priority == 0){
       $scope.todos.push($scope.newItem);
       alert("high");
       $scope.newItem = "";
       $scope.priority = -1;
      }
      else if($scope.priority == 1){
        $scope.todos.push($scope.newItem);
        alert('medium');
        $scope.newItem = "";
        $scope.priority = -1;
      }
      else if($scope.priority == 2){
        $scope.todos.push($scope.newItem);
        alert('low');
        $scope.newItem = "";
        scope.priority = -1;
      }
      else{
        alert("Enter something, damn it");
      }
    }
  }

  //Priority Buttons
  $scope.highPriority = function(){
    $scope.priority = 0;
    $scope.addItem();
  }

  $scope.mediumPriority = function(){
    $scope.priority = 1;
    $scope.addItem();
  }

  $scope.lowPriority = function(){
    $scope.priority = 2;
    $scope.addItem();
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
