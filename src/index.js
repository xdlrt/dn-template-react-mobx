import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import './assets/common.less';
import TodoApp from './components/todoApp';

import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';

const todoStore = new TodoStore();

useStrict(true);

ReactDOM.render(<TodoApp todoStore={todoStore} />, document.getElementById('root'));