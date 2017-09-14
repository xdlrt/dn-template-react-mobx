import React, { Component } from 'react';
import TodoEntry from './todoEntry';
import TodoList from './todoList';
import './index.less';

class TodoApp extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div className="todo-app">
        <header className="todo-app-header">
          <h1>todos</h1>
          <TodoEntry todoStore={todoStore} />
        </header>
        <TodoList todoStore={todoStore} />
      </div>
    );
  }
}

export default TodoApp;
