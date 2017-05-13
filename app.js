//Day 3

//To-do:
// Contact list application with full CRUD





var todo = ['Go shopping', 'Study JS', 'Clean Room'];
//CREATE
function addTask(){
  var taskToAdd = document.getElementById('taskBox').value;
  todo.push(taskToAdd);
  displayTasks();
  clearBox();
}
//READ
function displayTasks() {
  var taskrow = "";
  for(i = 0; i <todo.length; i++){
    taskrow += `<tr>`
    taskrow += `<td>${todo[i]}</td>`
    taskrow += `<td><button onclick="deleteTask(${i})">X</button>`
    taskrow += `<button onclick="updateTask(${i})">Edit</button></td>`
    taskrow += `</tr>`;
  }
  document.getElementById('taskList').innerHTML=taskrow;
}
//UPDATE
function updateTask(i){
  todo[i] = document.getElementById('taskBox').value;
  displayTasks();
  clearBox();
}
//DELETE
function deleteTask(n){
  todo.splice(n, 1);
  displayTasks();
}
//Other functions
function clearBox() {
  document.getElementById('taskBox').value="";
}
//EXECUTE
displayTasks();
