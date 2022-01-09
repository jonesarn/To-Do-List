//Create 

let ArrayItem = [];
var idx = 0;
var ToDoItem = document.getElementById("add").onclick = function() {
    var item = document.getElementById("search-bar").value;
    console.log(item);
    if (item != null) {
        //push
        ArrayItem.push(item)
            // show array
            // spread array out
        var EmptyString = '';
        for (idx = 0; idx < ArrayItem.length; idx++) {
            EmptyString += "<li>" + ArrayItem[idx] + "</li>"
            var pasteItem = document.getElementById("ShowList").innerHTML = EmptyString;
        }
        console.log(EmptyString);

    } else {
        console.log("No Info");
        window.prompt("Enter ");
    }
};








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