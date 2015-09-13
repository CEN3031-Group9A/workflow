// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  $scope.done = [];
  $scope.custom_show = false;
  $scope.editItem = "";
  
  $scope.addItem = function(event){
    var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0
    if (key !== 13)
      return;

    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }
  
  $scope.completeItem = function(item) {
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.done.push(item);
  }

  $scope.startEdit = function (item) {
    this.custom_show = item;
    this.editItem = item;
  }

  $scope.doEditItem = function (keypress) {
    if (!keypress || keypress.key !== "Enter")
      return;

    if (this.editItem !== "")
    {
      var index = $scope.todos.indexOf(this.do);

      $scope.todos[index] = this.editItem;
      this.editItem = "";
      this.custom_show = false;
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.completeAll = function(){
    for (item in $scope.todos)
      $scope.done.push($scope.todos[item]);

    $scope.clear();
  }

  $scope.clear = function() {
    $scope.todos = [];
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