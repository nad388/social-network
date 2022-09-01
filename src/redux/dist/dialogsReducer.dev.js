"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addMessageActionCreator = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_MESSAGE = 'ADD_MESSAGE';
var initialState = {
  dialogsData: [{
    id: 1,
    name: 'Laura Palmer'
  }, {
    id: 2,
    name: 'Dale Cooper'
  }, {
    id: 3,
    name: 'Liland Palmer'
  }, {
    id: 4,
    name: 'Doppelganger'
  }, {
    id: 5,
    name: 'Donna'
  }, {
    id: 6,
    name: 'Lady with log'
  }],
  messagesData: [{
    id: 1,
    message: 'I am dead!?'
  }, {
    id: 2,
    message: 'Who killed Laura Palmer?'
  }, {
    id: 3,
    message: 'I killed my daughter!'
  }, {
    id: 4,
    message: 'My name is Cooper.'
  }, {
    id: 5,
    message: 'Where I am?'
  }, {
    id: 6,
    message: 'My log always tells the truth.'
  }]
};

var dialogsReducer = function dialogsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_MESSAGE:
      return _objectSpread({}, state, {
        messagesData: [].concat(_toConsumableArray(state.messagesData), [{
          id: 7,
          message: action.newMessageText
        }])
      });

    default:
      return state;
  }
};

var addMessageActionCreator = function addMessageActionCreator(newMessageText) {
  return {
    type: ADD_MESSAGE,
    newMessageText: newMessageText
  };
};

exports.addMessageActionCreator = addMessageActionCreator;
var _default = dialogsReducer;
exports["default"] = _default;