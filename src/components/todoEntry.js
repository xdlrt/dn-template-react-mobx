import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

const ENTER_KEY = 13;

@observer
class TodoEntry extends Component {

  handleKeyDown = (e) => {
    if (e.keyCode !== ENTER_KEY) {
      return;
    }
    e.preventDefault();
    const { todoStore } = this.props;
    const val = ReactDOM.findDOMNode(this.refs.inputFiled).value.trim();
    if (val) {
      todoStore.addTodo(val);
      ReactDOM.findDOMNode(this.refs.inputFiled).value = '';
    }
  };

  render() {
    return (
      <input
        ref="inputFiled"
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={this.handleKeyDown}
        autoFocus={true}
      />
    );
  }
}

export default TodoEntry;