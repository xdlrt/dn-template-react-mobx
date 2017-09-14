import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoItem extends Component {

  delete = (id) => {
    this.props.todo.delete(id);
  }

  toggle = () => {
    this.props.todo.toggle();
  }

  render() {
    const { todo } = this.props;
    return (
      <li onClick={this.toggle} className={todo.completed ? 'completed' : ''}>
        <div className="todo-item">
          <span>{todo.title}</span>
          <button className="todo-item-delete" onClick={this.delete.bind(null, todo.id)}>X</button>
        </div>
      </li>
    );
  }

}

export default TodoItem;
