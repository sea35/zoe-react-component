"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _Sider = require("./Sider");

var _Sider2 = _interopRequireDefault(_Sider);

var _Bread = require("./Bread");

var _Bread2 = _interopRequireDefault(_Bread);

var _Footer = require("./Footer");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by sea35 on 2017/1/16.
 */
exports.default = {
  Header: _Header2.default,
  Sider: _Sider2.default,
  Bread: _Bread2.default,
  Footer: _Footer2.default
};
module.exports = exports["default"];