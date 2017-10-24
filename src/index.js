import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todoApp';
import TodoStore from './stores/TodoStore';
// import ViewStore from './stores/ViewStore';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const todoStore = new TodoStore();

ReactDOM.render(<TodoApp todoStore={todoStore} />, document.getElementById('root'));