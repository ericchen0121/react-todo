var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!appStyles');


ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
