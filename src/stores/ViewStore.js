import { observable } from 'mobx';

export default class ViewStore {
  @observable 
  todoBeingEdited = null;
}