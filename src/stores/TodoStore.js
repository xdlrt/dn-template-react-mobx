import { observable } from 'mobx';
import uuid from '../utils/uuid';
import TodoModel from '../models/TodoModel';

class TodoStore {

  // 保存todo列表项
  @observable
  todos = [];

  // 添加todo，参数为todo内容
  addTodo(title) {
    this.todos.push(new TodoModel(this, uuid(), title, false));
  }

}

export default TodoStore;