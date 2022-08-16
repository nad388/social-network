"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _profileReducer = _interopRequireDefault(require("./profileReducer"));

var _dialogsReducer = _interopRequireDefault(require("./dialogsReducer"));

var _sidebarReducer = _interopRequireDefault(require("./sidebarReducer"));

var _usersReducer = _interopRequireDefault(require("./usersReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// legacy_createStore as createStore
var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer["default"],
  dialogsPage: _dialogsReducer["default"],
  sidebar: _sidebarReducer["default"],
  usersPage: _usersReducer["default"]
});
var store = (0, _redux.legacy_createStore)(reducers);
window.store = store;
var _default = store;
exports["default"] = _default;