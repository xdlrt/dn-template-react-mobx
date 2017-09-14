import { observable, action } from 'mobx';
import uuid from 'uuid/v4';
import TodoModel from '../models/TodoModel'

class TodoStore {

  // 保存todo列表项
  @observable todos = [];

  // 添加todo，参数为todo内容
  addTodo(title) {
    this.todos.push(new TodoModel(this, uuid(), title, false));
  }

  // 设置所有todo的completed状态
  toggleAll(checked) {
    this.todos.forEach(
      todo => todo.completed = checked
    );
  }

  // 删除已完成项
  clearCompleted() {
    this.todos = this.todos.filter(
      todo => !todo.completed
    );
  }

  // 通过TodoModel的toJS方法更新todos数组
  toJS() {
    return this.todos.map(todo => todo.toJS());
  }

  // 通过array数组新建TodoStore的实例
  static fromJS(array) {
    const todoStore = new TodoStore();
    todoStore.todos = array.map(item => TodoModel.fromJS(todoStore, item));
    return todoStore;
  }
}

export default TodoStore;