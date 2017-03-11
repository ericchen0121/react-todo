var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch). toExist();
  });

  it('should call onSearch when input field entered', () => {
    var searchText = 'coffee';
    var spy = expect.createSpy();

    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.searchText.value = searchText;

    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'coffee');
  });

  it('should call onSearch when proper checked value', () => {
    var spy = expect.createSpy();

    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = true;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(true, '');
  });
})
