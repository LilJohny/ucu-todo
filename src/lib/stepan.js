import htmlTags from 'html-tags';

export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    if (!htmlTags.includes(element)) {
      throw new StepanError("Can`t create element, that not html tag", "HTML tag error");
    }
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
  static getElementById(parent, Id) {
    return document.getElementById(Id);
  }
  static getElementsByClassName(className) {
    return document.getElementsByClassName(className);
  }
}

class Component {
  constructor(parent) {
    this.parent = parent;
  }
}
Stepan.Component = Component;

class StepanError extends Error {
  constructor(message) {
    super(message);
    this.name = "StepanError";
  }
}
Stepan.StepanError = StepanError;

class TagError extends StepanError {
  constructor() {
    super("Invalid HTML tag name !");
  }
}
class NullParentError extends StepanError {
  constructor() {
    super("Objects parent is null or undefined !");
  }
}
class InvalidDomError extends StepanError {
  constructor() {
    super("DOM object is invalid !");
  }
}
Stepan.TagError = TagError;
Stepan.NullParentError = NullParentError;
Stepan.InvalidDomError = InvalidDomError;
// TODO: 2. throw an error if parent is null or undefined, or if it's not a valid DOM object
// TODO (Bonus): Ensure that every component returns a top-level root element
