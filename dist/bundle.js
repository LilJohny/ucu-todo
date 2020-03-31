(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"math",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rb",
	"rp",
	"rt",
	"rtc",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"slot",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"svg",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"u",
	"ul",
	"var",
	"video",
	"wbr"
]

},{}],2:[function(require,module,exports){
'use strict';
module.exports = require('./html-tags.json');

},{"./html-tags.json":1}],3:[function(require,module,exports){
"use strict";

var _stepan = _interopRequireDefault(require("./lib/stepan.js"));

var _index = require("./components/todoList/index.js");

var _index2 = require("./components/footer/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var todos = [{
  isDone: true,
  title: '(Done) Todo 1'
}, {
  isDone: false,
  title: 'Todo 2'
}];

var App = /*#__PURE__*/function (_Stepan$Component) {
  _inherits(App, _Stepan$Component);

  var _super = _createSuper(App);

  function App(parent, todoList) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, parent);
    _this.todoListValue = todoList;

    _this.setToDoIds();

    return _this;
  }

  _createClass(App, [{
    key: "setToDoIds",
    value: function setToDoIds() {
      for (var i = 0; i < this.todoListValue.length; i++) {
        var todo = this.todoListValue[i];
        todo.id = i;
      }

      console.log(this.todoListValue);
    }
  }, {
    key: "render",
    value: function render() {
      var rootElement = this.parent;

      var divContainer = _stepan["default"].createElement('div', rootElement); // TodoListHead-----------------


      this.todoListHeadNode = new _index.TodoListHead(divContainer);
      this.todoListHeadNode.render(); // TodoListToggleAll-----------------

      var sectionMain = _stepan["default"].createElement('section', divContainer, {
        "class": 'main'
      });

      this.todoListToggleAllNode = new _index.TodoListToggleAll(sectionMain);
      this.todoListToggleAllNode.render(); // TodoList-----------------

      this.todoListNode = new _index.TodoList(sectionMain);
      this.todoListNode.render(this.todoList); // Footer-----------------

      this.footerNode = new _index2.Footer(divContainer);
      this.footerNode.render(this.todoList);
      return rootElement;
    }
  }, {
    key: "cleanInput",
    value: function cleanInput() {
      this.input.value = "";
    }
  }, {
    key: "setAddToDoEvent",
    value: function setAddToDoEvent() {
      this.input = _stepan["default"].getElementById(null, "new-todo");
      this.background = _stepan["default"].getElementById(null, "background");
      this.background.addEventListener("keyup", App.addToDo);
    }
  }, {
    key: "setDeleteToDo",
    value: function setDeleteToDo() {
      this.destroys = _stepan["default"].getElementsByClassName("destroy");

      var _iterator = _createForOfIteratorHelper(this.destroys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var destroy = _step.value;
          console.log(destroy);
          destroy.addEventListener("click", App.destroyToDo);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.setAddToDoEvent();
      this.setDeleteToDo();
    }
  }, {
    key: "todoList",
    set: function set(todos) {
      this.todoListValue = todos;
      this.todoListNode.render(this.todoList);
      this.footerNode.render(this.todoList);
    },
    get: function get() {
      return this.todoListValue;
    }
  }], [{
    key: "addToDo",
    value: function addToDo(event) {
      if (event.keyCode === 13) {
        app.todoList.push({
          isDone: false,
          title: app.input.value
        });
        app.todoListNode.render(app.todoList);
        app.footerNode.render(app.todoList);
        app.cleanInput();
      }
    }
  }, {
    key: "destroyToDo",
    value: function destroyToDo(event) {
      var id = event.originalTarget.id.split("-")[1];
      app.todoList = app.todoList.filter(function (todoObject) {
        return todoObject.id != id;
      });
      app.todoListNode.render(app.todoList);
      app.footerNode.render(app.todoList);
      app.setToDoIds();
    }
  }]);

  return App;
}(_stepan["default"].Component);

var app = new App(document.getElementById('todoapp'), todos);
app.render();
app.setEvents();

},{"./components/footer/index.js":5,"./components/todoList/index.js":8,"./lib/stepan.js":12}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stepan = _interopRequireDefault(require("../../lib/stepan.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Footer = /*#__PURE__*/function (_Stepan$Component) {
  _inherits(Footer, _Stepan$Component);

  var _super = _createSuper(Footer);

  function Footer() {
    _classCallCheck(this, Footer);

    return _super.apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render(todos) {
      // render will always accept data to render
      var name = Footer.getName();

      var oldRootElement = _stepan["default"].getElementById(this.parent, name);

      if (oldRootElement !== null) {
        oldRootElement.remove();
      }

      var rootElement = _stepan["default"].createElement(name, this.parent, {
        id: name,
        "class": name
      });

      _stepan["default"].createElement('span', rootElement, {
        "class": 'todo-count',
        innerText: "".concat(todos.length, " items left")
      });

      var filters = _stepan["default"].createElement('ul', rootElement, {
        "class": 'filters'
      });

      var all = _stepan["default"].createElement('li', filters);

      _stepan["default"].createElement('a', all, {
        href: "#/",
        "class": "selected",
        innerText: 'All'
      });

      var active = _stepan["default"].createElement('li', filters);

      _stepan["default"].createElement('a', active, {
        href: "#/active",
        "class": "",
        innerText: 'Active'
      });

      var completed = _stepan["default"].createElement('li', filters);

      _stepan["default"].createElement('a', completed, {
        href: "#/completed",
        "class": "",
        innerText: 'Completed'
      });

      return rootElement;
    }
  }], [{
    key: "getName",
    value: function getName() {
      return 'footer';
    }
  }]);

  return Footer;
}(_stepan["default"].Component);

exports["default"] = Footer;

},{"../../lib/stepan.js":12}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _footer["default"];
  }
});

var _footer = _interopRequireDefault(require("./footer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./footer.js":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TodoItem", {
  enumerable: true,
  get: function get() {
    return _todoItem["default"];
  }
});

var _todoItem = _interopRequireDefault(require("./todoItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./todoItem.js":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stepan = _interopRequireDefault(require("../../lib/stepan.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TodoItem = /*#__PURE__*/function (_Stepan$Component) {
  _inherits(TodoItem, _Stepan$Component);

  var _super = _createSuper(TodoItem);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _super.apply(this, arguments);
  }

  _createClass(TodoItem, [{
    key: "render",
    value: function render(_ref, id) {
      var isDone = _ref.isDone,
          title = _ref.title;

      // render will always accept data to render
      var rootElement = _stepan["default"].createElement('li', this.parent, {
        "class": isDone && 'completed'
      });

      var todoViewContainer = _stepan["default"].createElement('div', rootElement, {
        id: "view-".concat(id),
        "class": 'view'
      }); // TODO: Input must be checked if todo item is done


      _stepan["default"].createElement('input', todoViewContainer, {
        id: "toggle-".concat(id),
        "class": "toggle",
        type: "checkbox"
      });

      _stepan["default"].createElement('label', todoViewContainer, {
        innerText: title
      });

      _stepan["default"].createElement('button', todoViewContainer, {
        id: "destroy-".concat(id),
        "class": "destroy"
      });

      _stepan["default"].createElement('input', todoViewContainer, {
        id: "edit-".concat(id),
        "class": "edit",
        value: title
      });

      return rootElement;
    }
  }]);

  return TodoItem;
}(_stepan["default"].Component);

exports["default"] = TodoItem;

},{"../../lib/stepan.js":12}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TodoList", {
  enumerable: true,
  get: function get() {
    return _todoList["default"];
  }
});
Object.defineProperty(exports, "TodoListHead", {
  enumerable: true,
  get: function get() {
    return _todoListHead["default"];
  }
});
Object.defineProperty(exports, "TodoListToggleAll", {
  enumerable: true,
  get: function get() {
    return _todoListToggleAll["default"];
  }
});

var _todoList = _interopRequireDefault(require("./todoList.js"));

var _todoListHead = _interopRequireDefault(require("./todoListHead.js"));

var _todoListToggleAll = _interopRequireDefault(require("./todoListToggleAll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./todoList.js":9,"./todoListHead.js":10,"./todoListToggleAll.js":11}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stepan = _interopRequireDefault(require("../../lib/stepan.js"));

var _index = require("../todoItem/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TodoList = /*#__PURE__*/function (_Stepan$Component) {
  _inherits(TodoList, _Stepan$Component);

  var _super = _createSuper(TodoList);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _super.apply(this, arguments);
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render(todos) {
      // render will always accept data to render
      var name = TodoList.getName();

      var oldRootElement = _stepan["default"].getElementById(this.parent, name);

      if (oldRootElement !== null) {
        oldRootElement.remove();
      }

      var rootElement = _stepan["default"].createElement('ul', this.parent, {
        id: name,
        "class": name
      });

      for (var i = 0; i < todos.length; i++) {
        var todoObject = todos[i];
        var todoItem = new _index.TodoItem(rootElement);
        todoItem.render(todoObject, i);
      }

      return rootElement;
    }
  }], [{
    key: "getName",
    value: function getName() {
      return "todo-list";
    }
  }]);

  return TodoList;
}(_stepan["default"].Component);

exports["default"] = TodoList;

},{"../../lib/stepan.js":12,"../todoItem/index.js":6}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stepan = _interopRequireDefault(require("../../lib/stepan.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TodoListHead = /*#__PURE__*/function (_Stepan$Component) {
  _inherits(TodoListHead, _Stepan$Component);

  var _super = _createSuper(TodoListHead);

  function TodoListHead() {
    _classCallCheck(this, TodoListHead);

    return _super.apply(this, arguments);
  }

  _createClass(TodoListHead, [{
    key: "render",
    value: function render() {
      // render will always accept data to render
      var rootElement = _stepan["default"].createElement('header', this.parent, {
        "class": 'header'
      });

      _stepan["default"].createElement('h1', rootElement, {
        innerText: 'UCU Todo'
      });

      _stepan["default"].createElement('input', rootElement, {
        id: "new-todo",
        "class": "new-todo",
        placeholder: "What needs to be done?",
        value: ""
      });

      return rootElement;
    }
  }]);

  return TodoListHead;
}(_stepan["default"].Component);

exports["default"] = TodoListHead;

},{"../../lib/stepan.js":12}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stepan = _interopRequireDefault(require("../../lib/stepan.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TodoListToggleAll = /*#__PURE__*/function (_Stepan$Component) {
  _inherits(TodoListToggleAll, _Stepan$Component);

  var _super = _createSuper(TodoListToggleAll);

  function TodoListToggleAll() {
    _classCallCheck(this, TodoListToggleAll);

    return _super.apply(this, arguments);
  }

  _createClass(TodoListToggleAll, [{
    key: "render",
    value: function render() {
      // render will always accept data to render
      var rootElement = _stepan["default"].createElement('div', this.parent);

      _stepan["default"].createElement('input', rootElement, {
        id: "toggle-all",
        "class": "toggle-all",
        type: "checkbox"
      });

      _stepan["default"].createElement('label', rootElement, {
        "for": "toggle-all"
      });

      return rootElement;
    }
  }]);

  return TodoListToggleAll;
}(_stepan["default"].Component);

exports["default"] = TodoListToggleAll;

},{"../../lib/stepan.js":12}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _htmlTags = _interopRequireDefault(require("html-tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stepan = /*#__PURE__*/function () {
  function Stepan() {
    _classCallCheck(this, Stepan);
  }

  _createClass(Stepan, null, [{
    key: "createElement",
    value: function createElement(element, parent) {
      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!_htmlTags["default"].includes(element)) {
        console.log("Tag error"); //TODO throw Exception
      }

      var newElement = document.createElement(element);
      var innerHTML = attributes.innerHTML,
          innerText = attributes.innerText;

      for (var attribute in attributes) {
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
  }, {
    key: "getElementById",
    value: function getElementById(parent, Id) {
      return document.getElementById(Id);
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return document.getElementsByClassName(className);
    }
  }]);

  return Stepan;
}();

exports["default"] = Stepan;

Stepan.Component = /*#__PURE__*/function () {
  function _class(parent) {
    _classCallCheck(this, _class);

    this.parent = parent;
  }

  return _class;
}(); // TODO: 1. Create StepanError class to define all framework errors
//       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
// TODO (Bonus): Ensure that every component returns a top-level root element

},{"html-tags":2}]},{},[3]);
