import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import pluralize from '../utils/pluralize';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

@inject('todoStore', 'viewStore')
@observer
export default class TodoEntry extends Component {

  @computed
  get todoStore() {
    return this.props.todoStore;
  }

  @computed
  get viewStore() {
    return this.props.viewStore;
  }

  renderFilterLink = (filterName, url, caption) => {
    return (
      <li onClick={this.filter.bind(null, filterName)}>
        <a className={filterName === this.viewStore.todoFilter ? 'selected' : ''}>
          {caption}
        </a>
        {' '}
      </li>
    );
  }

  filter = (filterName) => {
    this.viewStore.todoFilter = filterName;
  }

  clearCompleted = () => {
    this.todoStore.todos = this.todoStore.todos.filter(todo => !todo.completed);
  }

  render() {
    const todoStore = this.todoStore;
    if (!todoStore.activeTodoCount && !todoStore.completedCount) {
      return null;
    }

    const activeTodoWord = pluralize(todoStore.activeTodoCount, 'item');
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoStore.activeTodoCount}</strong> {activeTodoWord} left
				</span>
        <ul className="filters">
          {this.renderFilterLink(ALL_TODOS, '', 'All')}
          {this.renderFilterLink(ACTIVE_TODOS, 'active', 'Active')}
          {this.renderFilterLink(COMPLETED_TODOS, 'completed', 'Completed')}
        </ul>
        {todoStore.completedCount === 0
          ? null
          : <button
            className="clear-completed"
            onClick={this.clearCompleted}>
            Clear completed
						</button>
        }
      </footer>
    );
  }
}
