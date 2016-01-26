angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.title = "Random"



    todoList.Random = function () {
       var number = Math.floor((Math.random() * 17) + 1);
       console.log(number)
    }
  }) /*end program*/
