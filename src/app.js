import Stepan from './lib/stepan.js';

import {
  TodoListHead,
  TodoListToggleAll,
  TodoList
} from './components/todoList/index.js';

import { Footer } from './components/footer/index.js';

let todos = [
  { isDone: true, title: '(Done) Todo 1' },
  { isDone: false, title: 'Todo 2' }
];

class App extends Stepan.Component {
  constructor(parent, todoList) {
    super(parent);
    this.todoListValue = todoList;
    this.setToDoIds();
  }
  setToDoIds() {
    for (let i = 0; i < this.todoListValue.length; i++) {
      let todo = this.todoListValue[i];
      todo.id = i;
    }
    console.log(this.todoListValue);
  }
  render() {

    const rootElement = this.parent;
    const divContainer = Stepan.createElement('div', rootElement);
    // TodoListHead-----------------
    this.todoListHeadNode = new TodoListHead(divContainer);
    this.todoListHeadNode.render();

    // TodoListToggleAll-----------------
    const sectionMain = Stepan.createElement('section', divContainer, { class: 'main' });
    this.todoListToggleAllNode = new TodoListToggleAll(sectionMain);
    this.todoListToggleAllNode.render();

    // TodoList-----------------
    this.todoListNode = new TodoList(sectionMain);
    this.todoListNode.render(this.todoList);

    // Footer-----------------
    this.footerNode = new Footer(divContainer);
    this.footerNode.render(this.todoList);

    return rootElement;
  }
  cleanInput() {
    this.input.value = "";
  }
  set todoList(todos) {
    this.todoListValue = todos;
    this.todoListNode.render(this.todoList);
    this.footerNode.render(this.todoList);
  }
  get todoList() {
    return this.todoListValue;
  }
  static addToDo(event) {
    if (event.keyCode === 13) {
      app.todoList.push({ isDone: false, title: app.input.value });
      app.todoListNode.render(app.todoList);
      app.footerNode.render(app.todoList);
      app.cleanInput();
    }
  }
  static destroyToDo(event) {
    let id = event.originalTarget.id.split("-")[1];
    app.todoList = app.todoList.filter((todoObject) => todoObject.id != id);
    app.todoListNode.render(app.todoList);
    app.footerNode.render(app.todoList);
    app.setToDoIds();
  }
  setAddToDoEvent() {
    this.input = Stepan.getElementById( null,"new-todo");
    this.background = Stepan.getElementById(null, "background");
    this.background.addEventListener("keyup", App.addToDo);
  }
  
  setDeleteToDo() {
    this.destroys = Stepan.getElementsByClassName("destroy");
    for (let destroy of this.destroys) {
      console.log(destroy);
      destroy.addEventListener("click", App.destroyToDo);
    }
  }
  setEvents() {
    this.setAddToDoEvent();
    this.setDeleteToDo();
  }
}




var app = new App(document.getElementById('todoapp'), todos);
app.render();
app.setEvents();


