// Will render
// <ul class="todo-list">
//   <li class="">
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label>TODO 1</label>
//       <button class="destroy"></button>
//     </div>
//     <input class="edit" value="TODO 1">
//   </li>
//   <li class="">
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label>TODO 2</label>
//       <button class="destroy"></button>
//     </div>
//     <input class="edit" value="TODO 2">
//   </li>
// </ul>

import Stepan from '../../lib/stepan.js';

import { TodoItem } from '../todoItem/index.js';

export default class TodoList extends Stepan.Component {
  render(todos) { // render will always accept data to render
    const name = TodoList.getName();
    let oldRootElement = Stepan.getElementById(this.parent, name);
    if (oldRootElement !== null) {
      oldRootElement.remove();
    }
    const rootElement = Stepan.createElement('ul', this.parent, { id: name, class: name });

    todos.forEach(todoObject => new TodoItem(rootElement).render(todoObject));
    return rootElement;
  }
  static getName() {
    return "todo-list";
  }
}
