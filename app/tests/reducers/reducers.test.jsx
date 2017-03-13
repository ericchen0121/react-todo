var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'coffee'
      }

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle boolean of showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    })
  })

  describe('todosReducer', () => {
    it('should add a new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Program at the coffeehouse'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    })

    it('should toggle todo with updated completed and completedAt fields', () => {
      var todos = [{
        id: '1',
        text: 'Program at the coffeehouse',
        completed: false,
        createdAt: 12345,
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    })

    it('should add existing todos', () => {
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

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0])
    })
  })
})
