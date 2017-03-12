var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt} = this.props;

    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return (
      <div onClick={ () => {this.props.onCompleteToggle(id)} }>
        <input type='checkbox' checked={completed}/>
        {text} / {renderDate()}
      </div>
    )
  }
})

module.exports = Todo;
