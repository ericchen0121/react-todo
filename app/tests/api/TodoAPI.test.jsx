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

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'some text here',
      completed: true
    }, {
      id: 2,
      text: 'other text here',
      completed: false
    }, {
      id: 3,
      text: 'some more text here',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return uncompleted items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    })

    it('should filter todos by searchText if upper case', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'Some');
      expect(filteredTodos.length).toBe(2);
    })

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    })
  })
})
