// Will render
// <input id="toggle-all" class="toggle-all" type="checkbox">
// <label for="toggle-all"></label>

import Stepan from '../../lib/stepan.js';

export default class TodoListToggleAll extends Stepan.Component {
  render() { // render will always accept data to render
    const rootElement = Stepan.createElement('div', this.parent);
      Stepan.createElement('input', rootElement, { id: "toggle-all", class: "toggle-all", type: "checkbox" });
      Stepan.createElement('label', rootElement, { id: "label-toggle-all",for: "toggle-all" });

    return rootElement;
  }
}
