var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })

  it('should add a todo to the todos state on handleAddTodo', () => {
    var todoText = 'another todo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value and set and unset completedAt when handleCompleteToggle is called', () => {
    var todoData = {
      id: 101,
      text: 'Get coffee',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleCompleteToggle(101);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

    todoApp.handleCompleteToggle(101);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  })

})
