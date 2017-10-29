import React from 'react';
import TodoEntry from './todoEntry';
import TodoList from './todoList';

function TodoApp() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoEntry />
      </header>
      <TodoList />
    </section>
  );
}

export default TodoApp;
