"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.logout = exports.login = exports.getAuthUserData = exports.setAuthUserData = void 0;

var _api = require("../api/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USER_DATA = 'SET_USER_DATA';
var initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false //   isFetching: false,

};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USER_DATA:
      return _objectSpread({}, state, {}, action.payload);

    default:
      return state;
  }
};

var setAuthUserData = function setAuthUserData(userId, email, login, isAuth) {
  return {
    type: SET_USER_DATA,
    payload: {
      userId: userId,
      email: email,
      login: login,
      isAuth: isAuth
    }
  };
};

exports.setAuthUserData = setAuthUserData;

var getAuthUserData = function getAuthUserData() {
  return function (dispatch) {
    _api.authAPI.me().then(function (response) {
      if (response.data.resultCode === 0) {
        var _response$data$data = response.data.data,
            id = _response$data$data.id,
            email = _response$data$data.email,
            _login = _response$data$data.login;
        dispatch(setAuthUserData(id, email, _login, true));
      }
    });
  };
};

exports.getAuthUserData = getAuthUserData;

var login = function login(email, password, rememberMe) {
  return function (dispatch) {
    _api.authAPI.login(email, password, rememberMe).then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch) {
    _api.authAPI.logout().then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
}; // export const toggleIsFetching = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching,
// });


exports.logout = logout;
var _default = authReducer;
exports["default"] = _default;