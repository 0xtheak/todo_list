"use strict";
let todoInput = document.getElementById("todo-input");
let plusBtn = document.getElementById("plus-btn");
let todoList = document.getElementById("todo-list");
let count = document.getElementById("count");
let deleteIcon = document.getElementsByClassName("trash-icon");
let todoCheckboxes;
let todoItemsList = document.getElementsByClassName("todo-innner-container");
let itemsList = ["Learn How to type", "Do exercise", "Do read a chapter daily"];

// print todo list
function printItemsList() {
	// clear previous items list 
	todoList.innerHTML = '';
	count.innerText = itemsList.length;
	for (let i of itemsList) {
		let li = document.createElement("li");
		li.innerHTML = `

		<div class="todo-innner-container">
			<div>
			<input type="checkbox" id="item${itemsList.indexOf(i)}" >
			<label for="item${itemsList.indexOf(i)}" class="todo-items-list">${i}</label>
			</div>
			<div>
				<i class="fa fa-trash-o trash-icon" id="item${itemsList.indexOf(i)}"></i>
			</div>
		</div>`;
		todoList.appendChild(li);
	}
}

if (todoInput.value.length > 0) {
  	plusBtn.style.visibility = "visible";
}else {
  	plusBtn.style.visibility = "hidden";
}

// toggle plus btn in the input field
function toggleBtnVisibility() {
  if (todoInput.value.length > 0) {
    plusBtn.style.visibility = "visible";
  } else {
    plusBtn.style.visibility = "hidden";
  }
}

todoInput.addEventListener("input", toggleBtnVisibility);

todoInput.addEventListener("keypress", (e) => {
	if (e.key === 'Enter' && todoInput.value !== "") {
		itemsList.push(todoInput.value);
		todoInput.value = "";
		printItemsList();
		toggleBtnVisibility();
		toggleAndDelete();
	}
});
plusBtn.addEventListener('click', (e)=> {
	if(todoInput.value!= ""){
			itemsList.push(todoInput.value);
			todoInput.value = "";
			printItemsList();
			toggleBtnVisibility();
			toggleAndDelete();
			updateCount();
	}
});

function toggleAndDelete(){
  for (let i = 0; i < todoItemsList.length; i++) {

    let lis = deleteIcon[i];
    let itemText = todoItemsList[i];
    lis.style.visibility = "hidden";
    itemText.addEventListener('mouseover', () => {
      lis.style.visibility = "visible";
    });

    itemText.addEventListener("mouseout", () => {
      lis.style.visibility = "hidden";
    });

    lis.addEventListener('click', function(){
      let index = parseInt(lis.id.slice(-1));
      itemsList.splice(index, 1);
      printItemsList();
      toggleAndDelete();
    });

  }
}

// update the tasks count
function updateCount(){
	let n = itemsList.length
	for(let i=0; i<todoCheckboxes.length; i++){
	if(todoCheckboxes[i].checked){
		count.innerText = --n;
		}
	}
}

// calling the pring todo items list
printItemsList();
todoCheckboxes = document.querySelectorAll("input[type='checkbox']");
toggleAndDelete();
console.log(todoCheckboxes);
document.addEventListener('click', ()=>{
	updateCount();
})
