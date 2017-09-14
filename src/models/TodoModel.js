import uuid from 'uuid/v4';
import { observable } from 'mobx';

class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  /**
   * 创建一个TodoModel实例
   * 用于单个todo列表项的CURD操作
   * @param {object} store 传入TodoStore，获取领域模型状态和方法
   * @param {string} id 用于前端操作的实例id
   * @param {string} title todo项的内容
   * @param {boolean} completed 是否完成的状态
   * @memberof TodoModel
   */
  constructor(store, id, title, completed) {
    this.store = store;
    this.id = uuid();
    this.title = title;
    this.completed = completed;
  }

  delete(id) {
    this.store.todos = this.store.todos.filter(todo => todo.id !== id);
  }

}

export default TodoModel;