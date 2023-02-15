"use strict";

let todoInput = document.getElementById("todo-input");
let plusBtn = document.getElementById("plus-btn");
let todoList = document.getElementById("todo-list");
let count = document.getElementById("count");
let deleteIcon = document.getElementsByClassName("trash-icon");
let todoItemsList = document.getElementsByClassName("todo-innner-container");
let checkedCount = 0;
let todoCheckboxes;
plusBtn.style.visibility = "hidden";

// todo list with their respected status, wheather it is completed or not
let itemsList = [
  { text: "Learn How to type", checked: false },
  { text: "Do exercise", checked: false },
  { text: "Do read a chapter daily", checked: false },
];

function printItemsList() {
  // clear previous items list 
  todoList.innerHTML = '';
  for (let item of itemsList) {
    let radioItem;
  	if(item.checked){
  		checkedCount++;
  		radioItem = `<input type="checkbox" checked id="item${itemsList.indexOf(item)}">`
  	}else {
  		radioItem = `<input type="checkbox" id="item${itemsList.indexOf(item)}">`
  	}
    let li = document.createElement("li");
    li.innerHTML = `
    <div class="todo-innner-container">
      <div>
        ${radioItem}
        <label for="item${itemsList.indexOf(item)}" class="todo-items-list">${item.text}</label>
      </div>
      <div>
        <i class="fa fa-trash-o trash-icon" id="item${itemsList.indexOf(item)}"></i>
      </div>
    </div>`;
    todoList.appendChild(li);
  }
  todoCheckboxes = document.querySelectorAll("input[type='checkbox']");
  count.innerText = itemsList.length - checkedCount;
}

function toggleBtnVisibility() {
  if (todoInput.value.length > 0) {
    plusBtn.style.visibility = "visible";
  } else {
    plusBtn.style.visibility = "hidden";
  }
}

// toggle the plusbtn when input field is not empty
todoInput.addEventListener("input", toggleBtnVisibility);

todoInput.addEventListener("keypress", (e) => {
	if (e.key === 'Enter' && todoInput.value !== "") {
		itemsList.push({ text : todoInput.value, checked : false});
		todoInput.value = "";
		updateScreen();
	}
});
plusBtn.addEventListener('click', (e)=> {
	if(todoInput.value!= ""){
			itemsList.push({ text : todoInput.value, checked : false});
			todoInput.value = "";
			updateScreen();
	}
});

// delete button only appears when you hover the task
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
      updateScreen();
    });

  }
}

// return the current list length
function currentItemsLength(){
	return itemsList.length;
}

// update the tasks count
function updateCount() {
  checkedCount = 0; // reset checkedCount to 0
  for (let i = 0; i < todoCheckboxes.length; i++) {
    if (todoCheckboxes[i].checked) {
      checkedCount++;
      itemsList[i].checked = true;
    } else {
      itemsList[i].checked = false;
    }
  }
  // updating the count of remaining task
  count.innerText = currentItemsLength() - checkedCount;
}

// update the screen after an operation
function updateScreen(){
	printItemsList();
	toggleBtnVisibility();
	toggleAndDelete();
	updateCount();
}

// Initialization
printItemsList();
toggleAndDelete();


// update the counts when the task completed
document.addEventListener('click', updateCount);
