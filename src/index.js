import React from 'react';
import ReactDOM from 'react-dom';
import './assets/common.less';
import TodoApp from './components/todoApp';

import TodoStore from './stores/TodoStore';
// import ViewStore from './stores/ViewStore';

const todoStore = new TodoStore();

ReactDOM.render(<TodoApp todoStore={todoStore} />, document.getElementById('root'));