var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    // create final action
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'coffee'
    };

    // run it through the action generator
    var res = actions.setSearchText(action.searchText);

    // assert the two are equal
    expect(res).toEqual(action);
  })

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'go to the coffeehouse to program'
    };

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  })

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  })

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 5
    }
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  })
})
