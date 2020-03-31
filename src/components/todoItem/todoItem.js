// Will render
// <li class="">
//   <div class="view">
//     <input class="toggle" type="checkbox">
//     <label>TODO 1</label>
//     <button class="destroy"></button>
//   </div>
//   <input class="edit" value="TODO 1">
// </li>

import Stepan from '../../lib/stepan.js';

export default class TodoItem extends Stepan.Component {
  render({ isDone, title, id }) { // render will always accept data to render
    const rootElement = Stepan.createElement('li', this.parent, { class: isDone && 'completed' });
    const todoViewContainer = Stepan.createElement('div', rootElement, { id: `view-${id}`, class: 'view' });

    // TODO: Input must be checked if todo item is done
    Stepan.createElement('input', todoViewContainer, { id: `toggle-${id}`, class: "toggle", type: "checkbox" });

    Stepan.createElement('label', todoViewContainer, { innerText: title });
    Stepan.createElement('button', todoViewContainer, { id: `destroy-${id}`, class: "destroy" });
    Stepan.createElement('input', todoViewContainer, { id: `edit-${id}`, class: "edit", value: title });

    return rootElement;
  }
}
