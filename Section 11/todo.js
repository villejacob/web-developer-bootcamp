var todos = ["arbitrary"];
var rawInput = prompt("What would you like to do?");

while(input !== "quit"){
	var input = rawInput.toLowerCase();
	if (input === "list"){
		listTodos();
	} else if (input === "new"){
		newTodo();
	} else if (input === "delete"){
		deleteTodo();
	}
	var rawInput = prompt("What would you like to do?");
}
console.log("l8r");

function listTodos(){
	console.log("*********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("*********");
}

function newTodo(){
	var newTodo = prompt("Enter new task");
	todos.push(newTodo);
}

function deleteTodo(){
	var index = prompt("Enter index of task");
	todos.splice(index, 1);
	console.log("Removed");
}