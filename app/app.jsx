var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('Okay... New state', store.getState());
})

store.dispatch(actions.addTodo('Walk around the ferry building'));
store.dispatch(actions.setSearchText('ferry'));
store.dispatch(actions.toggleShowCompleted());
store.dispatch(actions.addTodo('Continue drinking coffee'));

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!appStyles');


ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
