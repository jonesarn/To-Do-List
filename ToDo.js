//Create 
var i = 0;
var count = i++;


var ToDoItem = document.getElementById("add").onclick = function() {
        var item = document.getElementById("search-bar").value;
        console.log(count + item);
        if (item != null) {
            document.getElementById("Items").innerHTML = item;
        }


    }
    /*
    function CreateItem(params) {
        if (ToDoItem != null) {
            document.getElementById("Items").innerHTML = ToDoItems
        }

    }
    */

//Read 

//update

//Delete