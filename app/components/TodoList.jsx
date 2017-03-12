var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },
  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className='container__message'>Nothing to do</p>
        )
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onCompleteToggle={this.props.onCompleteToggle} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
