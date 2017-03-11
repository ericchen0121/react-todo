var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Call dentist'
        },
        {
          id: 2,
          text: 'Prepare for interviewing'
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    // add to todos list. add an id and text...
    console.log('new todo: ', text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos= {todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
