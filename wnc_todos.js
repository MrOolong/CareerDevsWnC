//build version 1

var todos = ['item 1', 'item 2', 'item 3']

todos.push('item 4')

todos.push('item 5')

todos[2] = 'item 3 updated'

todos.splice(0,1)

console.log('My todos:',todos)
