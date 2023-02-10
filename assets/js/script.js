"use strict";
let todoInput = document.getElementById("todo-input");
let plusBtn = document.getElementById("plus-btn");
let todoList = document.getElementById("todo-list");
let count = document.getElementById("count");
let itemsList = ["Learn How to type", "Do exercise"];

// print todo list
function printItemsList() {
	// clear previous items list 
	todoList.innerHTML = '';
	count.innerText = itemsList.length;
	for (let i of itemsList) {

		let li = document.createElement("li");
	  	let input = document.createElement("input");
	  	input.type = "checkbox";
	  	input.id = "item" + itemsList.indexOf(i);
	  	input.value = i;
	  	let label = document.createElement("label");
	  	label.htmlFor = "item" + itemsList.indexOf(i);
	  	label.innerText = i;
	  

	  	li.appendChild(input);
	  	li.appendChild(label);
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
	if(e.key === 'Enter'){
		if(todoInput.value!= ""){
			let item = todoInput.value;
			itemsList.push(item);
			todoInput.value="";
			printItemsList();
			console.log(itemsList);
		}
		
	}
});
plusBtn.addEventListener('click', (e)=> {
	if(todoInput.value!= ""){
			let item = todoInput.value;
			itemsList.push(item);
			todoInput.value="";
			printItemsList();
			console.log(itemsList);
		}
})

printItemsList();
