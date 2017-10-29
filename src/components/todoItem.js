import React, { Component } from 'react';
import { observable, expr, computed } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('viewStore')
@observer
class TodoItem extends Component {

  @observable editText = '';

  @computed get viewStore() {
    return this.props.viewStore;
  }

  @computed get todo() {
    return this.props.todo;
  }

  toggle = () => {
    this.todo.toggle();
  }

  edit = () => {
    this.viewStore.todoBeingEdited = this.todo;
    this.editText = this.todo.title;
  };

  handleChange = (e) => {
    this.editText = e.target.value;
  }

  handleSubmit = () => {
    const val = this.editText.trim();
    if (val) {
      this.todo.setTitle(val);
      this.editText = val;
    } else {
      this.todo.delete();
    }
    this.viewStore.todoBeingEdited = null;
  }

  handleKeyDown = (e) => {
    // ESC键码 27
    // 回车键键码 13
    const policy = {
      '13': this.handleSubmit,
      '27': () => {
        this.editText = this.todo.title;
        this.viewStore.todoBeingEdited = null;
      }
    };
    if (policy[e.keyCode]) {
      policy[e.keyCode]();
    }
  }

  render() {
    const isEdit = expr(() => this.viewStore.todoBeingEdited === this.todo);
    const cls = [
      this.todo.completed ? 'completed' : '',
      isEdit ? 'editing' : ''
    ].join(' ');
    return (
      <li className={cls}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.todo.completed}
            onChange={this.toggle}
          />
          <label onDoubleClick={this.edit}>
            {this.todo.title}
          </label>
          <button className="destroy" onClick={this.todo.delete} />
        </div>
        <input
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
