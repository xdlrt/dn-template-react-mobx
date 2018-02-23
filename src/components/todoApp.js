import React from 'react';
import TodoEntry from './todoEntry';
import TodoList from './todoList';
import TodoFooter from './todoFooter';

export default function TodoApp() {
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoEntry />
        </header>
        <TodoList />
        <TodoFooter />
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          TodoMVC powered by React and <a href="http://github.com/mobxjs/mobx/">MobX</a>.
          Created by <a href="http://github.com/xdlrt/">Icarus</a>
        </p>
        <p>Based on the base React TodoMVC by <a href="http://github.com/petehunt/">petehunt</a></p>
      </footer>
    </div>
  );
}
