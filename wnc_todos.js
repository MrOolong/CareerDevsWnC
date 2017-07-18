//build version 1
/*
var todos = ['item 1', 'item 2', 'item 3']

todos.push('item 4')

todos.push('item 5')

todos[2] = 'item 3 updated'

todos.splice(0,1)

console.log('My todos:',todos) 
*/

//build version 2 - functions
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My todos:',todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue) {
 //todos[0] = 'some new value';
 todos[position] = newValue;
 displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

addTodo('some stuff');
addTodo('new stuff');
changeTodo(0, 'changed');
//changeTodo(0, 'changed again');


//displayTodos();
deleteTodo(2);