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
        var lowercaseText = todo.text.toLowerCase();
        return lowercaseText.indexOf(searchText.toLowerCase()) > -1;
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
