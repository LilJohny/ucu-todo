export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }
    if (innerHTML) {
      newElement.innerHTML = innerHTML;
    }
    if (innerText) {
      newElement.innerText = innerText;
    }
    
    parent.appendChild(newElement);

    return newElement;
  }
}
Stepan.Component = class {
  constructor(parent) {



    this.parent = parent;
  }


};
// TODO: 1. Create StepanError class to define all framework errors
//       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
// TODO (Bonus): Ensure that every component returns a top-level root element
