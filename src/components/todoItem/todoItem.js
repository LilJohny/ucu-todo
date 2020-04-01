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
    const rootElement = Stepan.createElement('li', this.parent, { id:`todo-li-${id}`, class: isDone && 'completed' });
    const todoViewContainer = Stepan.createElement('div', rootElement, { id: `view-${id}`, class: 'view' });

    let toggle = Stepan.createElement('input', todoViewContainer, { id: `toggle-${id}`, class: "toggle", type: "checkbox" });
    toggle.checked = isDone === true;
    let label = Stepan.createElement('label', todoViewContainer, { id: `label-${id}`, class:"label", innerText: title });
    let input = Stepan.createElement('input', rootElement, { id: `edit-${id}`, class: "edit", value: title });
    Stepan.createElement('button', todoViewContainer, { id: `destroy-${id}`, class: "destroy" });


    return rootElement;
  }
}
