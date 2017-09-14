import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoItem extends Component {

  delete = (id) => {
    const { todo } = this.props;
    todo.delete(id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <div className="todo-item">
          <span>{todo.title}</span>
          <button className="delete" onClick={this.delete.bind(null, todo.id)}>X</button>
        </div>
      </li>
    );
  }

}

export default TodoItem;
