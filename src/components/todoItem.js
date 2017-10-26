import React, { Component } from 'react';
import { observable, expr } from 'mobx';
import { observer } from 'mobx-react';

@observer
class TodoItem extends Component {

  @observable editText = '';

  delete = (id) => {
    this.props.todo.delete(id);
  }

  toggle = () => {
    this.props.todo.toggle();
  }

  edit = () => {
    const { todo, viewStore } = this.props;
    viewStore.todoBeingEdited = todo;
    this.editText = todo.title;
  };

  handleChange = (e) => {
    this.editText = e.target.value;
  }

  handleSubmit = () => {
    const { todo, viewStore } = this.props;
    const val = this.editText.trim();
    if (val) {
      todo.setTitle(val);
      this.editText = val;
    } else {
      this.delete(todo.id);
    }
    viewStore.todoBeingEdited = null;
  }

  handleKeyDown = (e) => {
    // ESC键码 27
    // 回车键键码 13
    const { todo, viewStore } = this.props;
    const policy = {
      '13': this.handleSubmit,
      '27': () => {
        this.editText = todo.title;
        viewStore.todoBeingEdited = null;
      }
    };
    if (policy[e.keyCode]) {
      policy[e.keyCode]();
    }
  }

  render() {
    const { todo, viewStore } = this.props;
    const isEdit = expr(() => viewStore.todoBeingEdited === todo);
    const cls = [
      todo.completed ? 'completed' : '',
      isEdit ? 'editing' : ''
    ].join(' ');
    return (
      <li className={cls}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={this.toggle}
          />
          <label onDoubleClick={this.edit}>
            {todo.title}
          </label>
          <button className="destroy" onClick={this.delete.bind(null, todo.id)} />
        </div>
        <input
          ref="editField"
          className="edit"
          value={this.editText}
          onBlur={this.handleSubmit}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }

}

export default TodoItem;
