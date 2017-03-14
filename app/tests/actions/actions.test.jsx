import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123abc',
        text: 'go to the coffeehouse to program',
        completed: false,
        createdAt: 12345
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  // (done) arg tells Mocha it's an async test until done() is called
  // "Testing Async Actions", video 134 in Section: 11, Databases & Authentication With Firebase
  // https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/5199020?start=0
  //
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions(); // returns an array of all actions that get called on mock store
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done(); // karma waits for this! wrap it up after expect statements!
    }).catch(done);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);

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
