import React, { Component } from 'react';
import TodoEntry from './todoEntry';
import TodoList from './todoList';

class TodoApp extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoEntry todoStore={todoStore} />
        </header>
        <TodoList todoStore={todoStore} />
      </section>
    );
  }
}

export default TodoApp;
