var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Buy unsweetened green tea'
    }, {
      id: 2,
      text: 'Walk Max'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    // returns an array of components, defined by second argument
    // scry (an inside joke by FB) refers to finding ALL the nested components
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todosComponents.length).toBe(todos.length);
  })

})
