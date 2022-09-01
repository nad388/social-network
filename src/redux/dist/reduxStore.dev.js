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

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxForm = require("redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// legacy_createStore as createStore
var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer["default"],
  dialogsPage: _dialogsReducer["default"],
  sidebar: _sidebarReducer["default"],
  usersPage: _usersReducer["default"],
  auth: _authReducer["default"],
  form: _reduxForm.reducer
});
var store = (0, _redux.legacy_createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
window.store = store;
var _default = store;
exports["default"] = _default;