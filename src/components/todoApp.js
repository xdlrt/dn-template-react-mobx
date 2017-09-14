import React, { Component } from 'react';
import TodoEntry from './todoEntry';
import TodoList from './todoList';
import './index.less';

class TodoApp extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoEntry todoStore={todoStore} />
          <TodoList todoStore={todoStore} />
        </header>
      </div>
    );
  }
}

export default TodoApp;
