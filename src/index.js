import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './stores/index';
import TodoApp from './components/todoApp';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

ReactDOM.render(
  <Provider {...store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);