var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export class TodoApp extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          <div className='column small-centered small-11 medium-8 large-6'>
            <div className='container'>
              <div className='container__title'>
                <h2 className='page-title'>todo</h2>
              </div>
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default TodoApp;
