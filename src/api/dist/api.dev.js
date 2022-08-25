"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a162c066-ea4f-4541-83aa-816acb7cd8bc'
  }
});

var usersAPI = {
  getUsers: function getUsers() {
    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return instance.get("users?page=".concat(currentPage, "&count=").concat(pageSize)).then(function (response) {
      return response.data;
    }); // возвращаем с сервера только то, что нужно компоненте
  }
};
exports.usersAPI = usersAPI;