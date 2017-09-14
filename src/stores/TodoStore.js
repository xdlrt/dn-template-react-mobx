import { observable } from 'mobx';
import uuid from 'uuid/v4';
import TodoModel from '../models/TodoModel'

class TodoStore {

  // 保存todo列表项
  @observable todos = [];

  // 添加todo，参数为todo内容
  addTodo(title) {
    this.todos.push(new TodoModel(this, uuid(), title, false));
  }

  // 通过TodoModel的toJS方法更新todos
  toJS() {
    return this.todos.map(todo => todo.toJS());
  }

  // 通过data数组新建TodoStore的实例
  static fromJS(data) {
    const todoStore = new TodoStore();
    todoStore.todos = data.map(item => TodoModel.fromJS(todoStore, item));
    return todoStore;
  }
}

export default TodoStore;