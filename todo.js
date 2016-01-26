angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.title = "Random"

    var nums = [
      'เเต๊ก','มิ้น','เฟ้น','เดียร์','กอล์ฟ','บอย','หนึ่ง','ค้อย','ออม','ชัย',
      'ปิง','บีบี','ปราย','ไปร์','ฉัตร','เคน','แบงค์'
    ]
    var ranNums = []
    var i = nums.length
    var j = 0


    todoList.Random = function () {
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          ranNums.push(nums[j]);
          nums.splice(j,1);
          console.log (nums[j])
        }
      }

      todoList.sum = function () {
        for (var k = 0; k < ranNums.length; k++) {
        console.log ("point random ("+(k+1)+") :"+ranNums[k])
      }
    } //end function





  }) /*end program*/
