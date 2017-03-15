var $ = require('jquery');

module.exports = {
  filterTodos: function(todos, showCompleted, searchText) {

    var filteredTodos = todos;

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
