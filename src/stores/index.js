import TodoStore from './TodoStore';
import ViewStore from './ViewStore';

const todoStore = new TodoStore();
const viewStore = new ViewStore();

const store = {
  todoStore: todoStore,
  viewStore: viewStore
};

export default store;