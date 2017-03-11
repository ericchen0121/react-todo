var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
      this.refs.todoText.focus(); // focus on the input field if no input is entered
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form ref='form' onSubmit={this.handleSubmit} className='add-todo-form'>
          <input type='text' ref='todoText' placeholder='What do you need to do...'/>
          <button className='button expanded'>Add</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
