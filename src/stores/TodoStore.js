import { observable, computed } from 'mobx';
import uuid from '../utils/uuid';
import TodoModel from '../models/TodoModel';

class TodoStore {

  // 保存todo列表项
  @observable
  todos = [];

  @computed
  get activeTodoCount() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  @computed
  get completedCount() {
    return this.todos.length - this.activeTodoCount;
  }

  // 添加todo，参数为todo内容
  addTodo(title) {
    this.todos.push(new TodoModel(this, uuid(), title, false));
  }

}

export default TodoStore;