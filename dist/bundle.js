(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _stepan = _interopRequireDefault(require("./lib/stepan.js"));

var _index = require("./components/todoList/index.js");

var _index2 = require("./components/footer/index.js");

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

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var rootElement = this.parent;

      var divContainer = _stepan["default"].createElement('div', rootElement); // TodoListHead-----------------


      new _index.TodoListHead(divContainer).render(); // TodoListToggleAll-----------------

      var sectionMain = _stepan["default"].createElement('section', divContainer, {
        "class": 'main'
      });

      new _index.TodoListToggleAll(sectionMain).render(); // TodoList-----------------

      new _index.TodoList(sectionMain).render(todos); // Footer-----------------

      new _index2.Footer(divContainer).render(todos);
      return rootElement;
    }
  }]);

  return App;
}(_stepan["default"].Component);

new App(document.getElementById('todoapp')).render(todos);

},{"./components/footer/index.js":3,"./components/todoList/index.js":6,"./lib/stepan.js":10}],2:[function(require,module,exports){
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
      var rootElement = _stepan["default"].createElement('footer', this.parent, {
        "class": 'footer'
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
  }]);

  return Footer;
}(_stepan["default"].Component);

exports["default"] = Footer;

},{"../../lib/stepan.js":10}],3:[function(require,module,exports){
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

},{"./footer.js":2}],4:[function(require,module,exports){
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

},{"./todoItem.js":5}],5:[function(require,module,exports){
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
    value: function render(_ref) {
      var isDone = _ref.isDone,
          title = _ref.title;

      // render will always accept data to render
      var rootElement = _stepan["default"].createElement('li', this.parent, {
        "class": isDone && 'completed'
      });

      var todoViewContainer = _stepan["default"].createElement('div', rootElement, {
        "class": 'view'
      }); // TODO: Input must be checked if todo item is done


      _stepan["default"].createElement('input', todoViewContainer, {
        "class": "toggle",
        type: "checkbox"
      });

      _stepan["default"].createElement('label', todoViewContainer, {
        innerText: title
      });

      _stepan["default"].createElement('button', todoViewContainer, {
        "class": "destroy"
      });

      _stepan["default"].createElement('input', todoViewContainer, {
        "class": "edit",
        value: title
      });

      return rootElement;
    }
  }]);

  return TodoItem;
}(_stepan["default"].Component);

exports["default"] = TodoItem;

},{"../../lib/stepan.js":10}],6:[function(require,module,exports){
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

},{"./todoList.js":7,"./todoListHead.js":8,"./todoListToggleAll.js":9}],7:[function(require,module,exports){
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
      var rootElement = _stepan["default"].createElement('ul', this.parent, {
        "class": "todo-list"
      });

      todos.forEach(function (todoObject) {
        return new _index.TodoItem(rootElement).render(todoObject);
      });
      return rootElement;
    }
  }]);

  return TodoList;
}(_stepan["default"].Component);

exports["default"] = TodoList;

},{"../../lib/stepan.js":10,"../todoItem/index.js":4}],8:[function(require,module,exports){
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

},{"../../lib/stepan.js":10}],9:[function(require,module,exports){
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

},{"../../lib/stepan.js":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
      // TODO: check if this is a valid tag name
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

},{}]},{},[1]);
