angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.title = "Random"

    var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    var ranNums = []
    var i = nums.length
    var j = 0


    todoList.Random = function () {
      console.log("function in")
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          ranNums.push(nums[j]);
          nums.splice(j,1);
        }

        for (var k = 0; k < ranNums.length; k++) {
        console.log (ranNums[k])
      }
    } //end function









  }) /*end program*/
