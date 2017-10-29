import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import TodoItem from './todoItem';

@inject('todoStore')
@observer
class TodoList extends Component {

  @computed get todoStore() {
    return this.props.todoStore;
  }

  render() {
    const { todos } = this.todoStore;
    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </section>
    );
  }

}

export default TodoList;
