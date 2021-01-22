 var myDoList =  document.querySelector("#myDoTo"); 
var submitBtn = document.querySelector(".submit-btn");
var tbody = document.querySelector("tbody");
var updateBtn = document.querySelector(".update-btn");
var stikeEl = document.querySelector('table');
console.log(myDoList)

var dynamicId= 0;

var position;
var myToDoLists = [];
console.log(myToDoLists)

function myList(event){
event.preventDefault();
var toDoObj={
myDoTo: event.target.form[0].value,
 id:dynamicId++,
 
};
myToDoLists.push(toDoObj)
insertRow(myToDoLists)
clearData();
}

function insertRow(data){
 tbody.innerHTML = "";
    data.forEach(function (value) {
     var tr = document.createElement("tr");
      tr.innerHTML = `
      <td id="${value.id}" class="isactvie">${value.myDoTo}</td>
      <td><button type ="button" class="style" id="edit-btn"><i class="fa fa-pencil-square-o"></i></button></td>
      <td><button type ="button" class="style " id="delete-btn"><i class="fa fa-trash"></i></button></td>`;
       tbody.appendChild(tr); 
    });
}

function clearData(){
  myDoTo.value="";
}
 
tbody.addEventListener('click',onEdit)
function onEdit(event){
 if(event.target.id == "edit-btn"){
  var updateToDo = event.target.parentElement.parentElement.cells.item(0).id;
  updateToDoList(updateToDo)

}
 else if(event.target.id == "delete-btn"){

  var deleteToDo = event.target.parentElement.parentElement.cells.item(0)
    .id;
    console.log(deleteToDo)
   deleteField(deleteToDo);
  
   event.target.parentElement.parentElement.remove();
}
}

function updateToDoList(data){
 myToDoLists.forEach(function(todo,index){
if(todo.id == data){
 myDoTo.value =  todo.myDoTo;
 updateBtn.style.display = "block";
 submitBtn.style.display = "none";
position  = index;
}
  });
}

function deleteField(data){
  console.log(data)
   myToDoLists.forEach(function (todo, index) {
     if (todo.id == data) {
    myToDoLists.splice(index,1)
}
           }); 
  }

updateBtn.addEventListener('click',updateNewDoTo)
function updateNewDoTo(){
  var updateobj = {
 myDoTo:  myDoTo.value,
 id:  myDoTo.value.length,
 
}
myToDoLists.splice(position,1,updateobj);
  insertRow(myToDoLists)
  clearData();
updateBtn.style.display = "none";
submitBtn.style.display = "block";
}

stikeEl.addEventListener('click', stike) 

 function stike(event){

 
 if (event.target.tagName === 'TD') {
    if(event.target.classList.contains("isactvie")){
   

  event.target.classList.toggle('mystyle'); 
    
    } 
 }
}
   
 



 



