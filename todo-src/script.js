// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log(item);
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
  
  $scope.deleteComplete= function(){
	var completed = document.getElementsByClassName('completed-true');
	
	for(i=0;i<completed.length;i++){
	console.log(completed + " " + $scope.todos.indexOf(completed[i].innerHTML) + " " + completed[i].innerHTML + " " + completed.length);
		if($scope.todos.indexOf(completed[i].innerHTML)!=-1)
		 $scope.todos.splice($scope.todos.indexOf(completed[i].innerHTML), 1);
	}
  }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/