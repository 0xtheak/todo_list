"use strict"
let todoInput = document.getElementById("todo-input");
let plusBtn = document.getElementById("plus-btn");
plusBtn.style.visibility = "hidden";


function text(){
	console.log('function has been called');
	if(todoInput.value!=""){
		plusBtn.style.visibility = "visible";
		console.log(todoInput.value);
	}
}

document.addEventListener('change', text);
