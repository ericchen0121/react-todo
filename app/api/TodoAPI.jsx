var $ = require('jquery');

module.exports = {
  // takes an array of todos
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      // local storage can only store strings so we stringify it
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos;
    }
  },
  // return an array of todo objects
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : []
    
  }
}
