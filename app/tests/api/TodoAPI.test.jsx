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
    }];

    it('should return all items if showCompleted is true', () => {
      
    })

  })
})
