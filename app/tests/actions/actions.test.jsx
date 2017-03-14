import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
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

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {completed: false}
    }
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  })

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    // setup test suite with Mocha lifecycle methods, before and after each test case
    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({
        text: 'something to do',
        completed: false,
        createdAt: 12342
      }).then(() => done());
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      done();
      store.dispatch(action).then(() => {
      //   // getActions() method for redux-mock-store library
        const mockActions = store.getActions();
      //
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done);
    })

  })
})
