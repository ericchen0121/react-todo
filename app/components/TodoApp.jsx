var React = require('react');
var uuid = require('uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    }
  },
  componentWillMount: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  componentWillUpdate: function(nextProps, nextState) {
    TodoAPI.setTodos(nextState.todos);
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleCompleteToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({todos: updatedTodos})
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div className='row'>
          <div className='column small-centered small-11 medium-8 large-6'>
            <div className='container'>
              <div className='container__title'>
                <h2 className='page-title'>todo</h2>
              </div>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onCompleteToggle={this.handleCompleteToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
