var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  // testing lifecycle method to clear out localStorage before each it test
  beforeEach(() => {
      localStorage.removeItem('todos');
  })

  it('should exist', () => {
    expect(TodoAPI).toExist();
  })

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos);
    })

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'bad data'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    })
  })

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    })

    it('should return todos if valid array is in localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    })
  })
})
