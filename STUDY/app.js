let todoList = ["Do Exercise", "Take Bath", "Have Breakfast"];

// creat
function CreateTask() {
    let task = document.getElementById("add-task").value;
    todoList.push(task);
    ReadAllTask();
}

// read
function ReadAllTask() {
    let data='';
    for(var i=0;i<todoList.length;i++) {
        data+='<tr>';
        data+='<td>' + todoList[i] + '</td>';
    }
}