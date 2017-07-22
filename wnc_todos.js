//build version 1
/*
var todos = ['item 1', 'item 2', 'item 3']

todos.push('item 4')

todos.push('item 5')

todos[2] = 'item 3 updated'

todos.splice(0,1)

console.log('My todos:',todos) 
*/

/*
//build version 2 - functions
var todos = ['item 1', 'item 2', 'item 3'];

//display todos
function displayTodos() {
    console.log('My todos:',todos);
}

//add todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

//change todos
function changeTodo(position, newValue) {
 //todos[0] = 'some new value';
 todos[position] = newValue;
 displayTodos();
}

//delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

addTodo('some stuff');
addTodo('new stuff');
changeTodo(0, 'changed');
//changeTodo(0, 'changed again');


//displayTodos();
deleteTodo(2); */
//end version 2 - functions


//start version 3 - objects

//store todos array on an object
// var todoList = {
//     todos: ['item 1', 'item 2', 'item 3'],
//     displayTodos: function () {
//         console.log("My Todos", this.todos);
//     },
//     addTodo: function(todo) {
//         this.todos.push(todo);
//         this.displayTodos();
//     },
//     changeTodo: function(position, newValue) {
//         this.todos[position] = newValue;
//         this.displayTodos();
//     },
//     deleteTodo: function(position) {
//         this.todos.splice(position, 1);
//         this.displayTodos();
//     }
// };

//console.log(todoList);

//display todos method
//console.log(todolist.displayTodos());

//add method 
//todolist.addTodo('plunker');

//change to do list method
//todoList.changeTodo(0, 'first');

//delete a to do method
//todoList.deleteTodo(1);
//end version 3 - objects


//start version 4 - boolean

//addTodo should add objects
// var todoList = {
//     todos: [],
//     displayTodos: function () {
//         console.log("My Todos", this.todos);
//     },
//     addTodo: function(todoText) { //addTodo('hi')
//         this.todos.push({
//             todoText: todoText,  //(hi)
//             completed: false
//             });
//         this.displayTodos();
//     },
//     changeTodo: function(position, todoText) {
//         //this.todos[position] = newValue; //no longer works, modifying below
//         this.todos[position].todoText = todoText;
//         this.displayTodos();
//     },
//     deleteTodo: function(position) {
//         this.todos.splice(position, 1);
//         this.displayTodos();
//     },
//     toggleCompleted: function(position) {
//         var todo = this.todos[position];
//         todo.completed = !todo.completed;
//         this.displayTodos();
//     }
// };

//part 1 req - call addTodo function to create object
//todoList.addTodo('this is an object');


//part 2 req - changeTodo should change the todoText property
// todoList.addTodo('first try');
// todoList.changeTodo(0, 'second try');

//part 3 req -  toggleCompleted should flip the completed property
// todoList.addTodo('boolean testing');
// todoList.toggleCompleted(0);

//version 4 -booleans complete

//version 5 - loops of logic
//loop example
// for (var i = 0; i < 3; i++) {
//     console.log('hey');
// }

var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        //else
        } else {
            console.log("My Todos:");
            for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText);
            }        
        }
        //print todos as normal
    },
    addTodo: function(todoText) { //addTodo('hi')
        this.todos.push({
            todoText: todoText,  //(hi)
            completed: false
            });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        //this.todos[position] = newValue; //no longer works, modifying below
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

//v5 - req 1 - displayTodos should show todoText
// todoList.displayTodos();
// todoList.addTodo('first');
// todoList.addTodo('second');

//v5 - req 2 - displayTodos should tell you if .todos is empty
//todoList.displayTodos();
todoList.addTodo('an item');
todoList.deleteTodo(0);
//v5 - req 2 - complete