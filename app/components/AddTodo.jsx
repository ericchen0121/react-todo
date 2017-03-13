var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(text));
      this.refs.todoText.focus(); // focus on the input field if no input is entered
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit} className='add-todo-form'>
          <input type='text' ref='todoText' placeholder='What do you need to do...'/>
          <button className='button expanded'>Add</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
