var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should call onCompleteToggle with id on click of item', () => {
    var todoItem = {
      id: 101,
      text: 'Go home',
      completed: false
    }
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo key={todoItem.id} {...todoItem} onCompleteToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(101)
  })
})
