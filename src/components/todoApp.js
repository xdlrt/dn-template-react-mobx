import React, { Component } from 'react';
import TodoEntry from './todoEntry';
import TodoList from './todoList';

class TodoApp extends Component {
  render() {
    const { todoStore, viewStore } = this.props;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoEntry todoStore={todoStore} viewStore={viewStore} />
        </header>
        <TodoList todoStore={todoStore} viewStore={viewStore} />
      </section>
    );
  }
}

export default TodoApp;
