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
      <li className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={this.toggle}
          />
          <label onDoubleClick={this.handleEdit}>
            {todo.title}
          </label>
          <button className="destroy" onClick={this.delete.bind(null, todo.id)} />
        </div>
      </li>
    );
  }

}

export default TodoItem;
