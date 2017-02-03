'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _reactRouter = require('react-router');

require('./IndexPage.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by sea35 on 2017/1/16.
 */
var getMenus = function getMenus(menuArray, parentPath, collapse) {
  parentPath = parentPath || '/';
  return menuArray.map(function (item) {
    if (!!item.child) {
      return _react2.default.createElement(
        _antd.Menu.SubMenu,
        { key: item.key, title: _react2.default.createElement(
            'span',
            null,
            item.icon ? _react2.default.createElement(_antd.Icon, { type: item.icon }) : '',
            ' ',
            item.name
          ) },
        getMenus(item.child, parentPath + item.key + '/')
      );
    } else {
      return _react2.default.createElement(
        _antd.Menu.Item,
        { key: item.key },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: parentPath + item.key },
          item.icon ? _react2.default.createElement(_antd.Icon, { type: item.icon }) : '',
          !collapse && _react2.default.createElement(
            'span',
            { className: 'nav_text' },
            item.name
          )
        )
      );
    }
  });
};

function Sider(_ref) {
  var collapse = _ref.collapse,
      menu = _ref.menu;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _antd.Menu,
      { mode: 'inline', theme: 'dark', defaultSelectedKeys: ['index'] },
      getMenus(menu, '/', collapse)
    )
  );
}

Sider.propTypes = {
  location: _react.PropTypes.object
};

exports.default = Sider;
module.exports = exports['default'];