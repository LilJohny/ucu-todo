import Stepan from './lib/stepan.js';

import {
  TodoListHead,
  TodoListToggleAll,
  TodoList
} from './components/todoList/index.js';

import { Footer } from './components/footer/index.js';

let todos = [
  { isDone: true, title: 'Todo 1' },
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
      let todoId = app.todoList.length;
      app.todoList.push({ isDone: false, title: app.input.value, id: todoId });
      app.todoListNode.render(app.todoList);
      app.footerNode.render(app.todoList);
      app.cleanInput();
      app.setEvents();
    }
  }
  static destroyToDo(event) {
    let id = event.originalTarget.id.split("-")[1];
    app.todoList = app.todoList.filter((todoObject) => todoObject.id != id);
    app.setToDoIds();
    app.todoListNode.render(app.todoList);
    app.footerNode.render(app.todoList);
    app.setEvents();
  }
  static completeToDo(event) {
    let id = event.originalTarget.id.split("-")[1];
    let todo = app.todoList.filter((todoObject) => todoObject.id == id)[0];
    let todoInd = app.todoList.indexOf(todo);
    app.todoList[todoInd].isDone = !app.todoList[todoInd].isDone;
    app.todoListNode.render(app.todoList);
    app.footerNode.render(app.todoList);
    app.setToDoIds();
    app.setEvents();
  }
  static editToDo(event) {
    console.log("edit triggered");
  }
  static toggleAll(event) {
    let sameStateTrue = app.todoList.every((todo) => todo.isDone === true);
    let sameStateFalse = app.todoList.every((todo) => todo.isDone === false);
    let sameState = sameStateFalse || sameStateTrue;
    if (sameState) {
      app.todoList.forEach(todo => {
        todo.isDone = !todo.isDone;
      });
    } else {
      app.todoList.forEach(todo => {
        todo.isDone = true;
      });
    }
    app.toggleAllNode = sameStateTrue;
    app.todoListNode.render(app.todoList);
    app.footerNode.render(app.todoList);
    app.setToDoIds();
    app.setEvents();
  }
  static filterActive(event) {
    app.todoListNode.render(app.todoList.filter(todoObj => todoObj.isDone === false));
    app.activeNode.className = "selected";
    app.allNode.className = "";
    app.completedNode.className = "";
  }
  static filterAll(event) {
    app.todoListNode.render(app.todoList);
    app.activeNode.className = "";
    app.allNode.className = "selected";
    app.completedNode.className = "";
  }
  static filterCompleted(event) {
    app.todoListNode.render(app.todoList.filter(todoObj => todoObj.isDone === true));
    app.activeNode.className = "";
    app.allNode.className = "";
    app.completedNode.className = "selected";
  }
  setAddToDoEvent() {
    this.input = Stepan.getElementById(null, "new-todo");
    this.background = Stepan.getElementById(null, "background");
    this.input.addEventListener("keyup", App.addToDo);
  }

  setDeleteToDo() {
    this.destroys = Stepan.getElementsByClassName("destroy");
    for (let destroy of this.destroys) {
      destroy.addEventListener("click", App.destroyToDo);
    }
  }
  setCompleted() {
    this.toggles = Stepan.getElementsByClassName("toggle");
    for (let toggle of this.toggles) {
      toggle.addEventListener("click", App.completeToDo);
    }
  }
  setEdit() {
    this.edits = Stepan.getElementsByClassName("edit");
    for (let edit of this.edits) {
      edit.addEventListener("click", App.editToDo);
    }
  }
  setToggleAll() {
    this.toggleAllNode = Stepan.getElementById(null, "toggle-all");
    this.toggleAllNode.addEventListener("click", App.toggleAll);
  }
  setActiveFilter() {
    this.allNode = Stepan.getElementById(null,"filter-all");
    this.completedNode = Stepan.getElementById(null,"filter-completed");
    this.activeNode = Stepan.getElementById(null,"filter-active");
    this.activeNode.addEventListener("click",App.filterActive);
  }
  setCompletedFilter() {
    this.allNode = Stepan.getElementById(null,"filter-all");
    this.completedNode = Stepan.getElementById(null,"filter-completed");
    this.activeNode = Stepan.getElementById(null,"filter-active");
    this.completedNode.addEventListener("click",App.filterCompleted);
  }
  setAllFilter() {
    this.allNode = Stepan.getElementById(null,"filter-all");
    this.completedNode = Stepan.getElementById(null,"filter-completed");
    this.activeNode = Stepan.getElementById(null,"filter-active");
    this.allNode.addEventListener("click",App.filterAll);
  }
  setEvents() {
    this.setAddToDoEvent();
    this.setDeleteToDo();
    this.setCompleted();
    this.setEdit();
    this.setToggleAll();
    this.setActiveFilter();
    this.setAllFilter();
    this.setCompletedFilter();
  }
}




var app = new App(document.getElementById('todoapp'), todos);
app.render();
app.setEvents();
