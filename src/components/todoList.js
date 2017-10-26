import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoItem from './todoItem';

@observer
class TodoList extends Component {

  render() {
    const { todoStore, viewStore } = this.props;
    const { todos } = todoStore;
    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          onChange={this.toggleAll}
          checked={todoStore.activeTodoCount === 0}
        />
        <ul className="todo-list">
          {todos.map(todo =>
            (<TodoItem
              key={todo.id}
              todo={todo}
              viewStore={viewStore}
            />)
          )}
        </ul>
      </section>
    );
  }

}

export default TodoList;
