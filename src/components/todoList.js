import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoItem from './todoItem';

@observer
class TodoList extends Component {

  render() {
    const { todoStore } = this.props;
    const { todos } = todoStore;
    return (
      <div className="todo-list">
        <ul>
          {
            todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
          }
        </ul>
      </div>
    );
  }

}

export default TodoList;
