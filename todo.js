angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.title = "Random"
    todoList.show = true

    /*var nums = [
      'เเต๊ก','มิ้น','เฟ้น','เดียร์','กอล์ฟ','บอย','หนึ่ง','ค้อย','ออม','ชัย',
      'ปิง','บีบี','ปราย','ไปร์','ฉัตร','เคน','แบงค์'
    ]*/

    var nums = [{
      name : 'เเต๊ก' ,
      pic  :'/img/tak.jpg'
    },
    {
        name : 'มิ้น' ,
        pic  :'/img/mint.jpg'
    },
    {
        name : 'เฟ้น' ,
        pic  :'/img/fen.jpg'
    },
    {
        name : 'เดียร์' ,
        pic  :'/img/dear.jpg'
    },
    {
        name : 'กอล์ฟ' ,
        pic  : '/img/golf.jpg'
    },
    {
        name : 'บอย' ,
        pic  : '/img/boy.jpg'
    },
    {
        name : 'หนึ่ง',
        pic  : '/img/nueng.jpg'
    },
    {
        name : 'ออม' ,
        pic  : '/img/oom.jpg'
    },
    {
        name : 'ค้อย',
        pic  : '/img/koy.jpg'
    },
    {
        name : 'ชัย' ,
        pic  : '/img/chai.jpg'
    },
    {
        name : 'ปิง',
        pic  : '/img/ping.jpg'
    },
    {
        name : 'บีบี'  ,
        pic  : '/img/bb.jpg'
    },
    {
        name : 'ปราย' ,
        pic  : '/img/pai.jpg'
    },
    {
        name : 'ไปร์' ,
        pic  : '/img/prite.jpg'
    },
    {
        name : 'ฉัตร' ,
        pic  : '/img/chat.jpg'
    },
    {
        name : 'เคน',
        pic  : '/img/ken.jpg'
    },
    {
        name : 'เเบงค์',
        pic  : '/img/bank.jpg'
    }
  ]
  todoList.ranNums = []
  var i = nums.length
  var j = 0


    todoList.Random = function () {
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          todoList.ranNums.push(nums[j]);
          nums.splice(j,1);
          console.log (nums[j])
        }
        todoList.show = false
      }

      todoList.sum = function () {
        for (var k = 0; k < todoList.ranNums.length; k++) {
          console.log ("point random ("+(k+1)+") :"+todoList.ranNums[k].name)
      }//exit loop for
    } //end function


    var count = 0

      todoList.showlist = function () {
          if (count > todoList.ranNums.length) {
            alert("หมดเเล้ว")
          }
          todoList.single_name = todoList.ranNums[count].name
          todoList.single_pic  = todoList.ranNums[count].pic
          count++
      }

    todoList.restart = function (){
      window.location = 'http://localhost:8080/'
    }





  }) /*end program*/
