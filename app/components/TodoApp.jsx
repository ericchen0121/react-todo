var React = require('react');
var TodoList = require('TodoList');

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
  render: function() {
    var {todos} = this.state;
    
    return (
      <TodoList todos= {todos}/>
    )
  }
});

module.exports = TodoApp;
