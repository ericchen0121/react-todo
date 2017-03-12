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

  },
  filterTodos: function(todos, showCompleted, searchText) {

    var stringTodos = localStorage.getItem('todos');
    var filteredTodos = JSON.parse(stringTodos);

    // // if the show completed box is unchecked (false), filter out the completed tasks
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    if(searchText.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.indexOf(searchText) > -1; 
      })
    }

    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    })

    return filteredTodos;
  }
}
