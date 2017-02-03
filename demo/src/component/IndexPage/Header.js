'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('./Header.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _antd.Menu.SubMenu; /**
                                   * Created by sea35 on 2017/1/16.
                                   */


function Header(_ref) {
  var location = _ref.location,
      logout = _ref.logout,
      config = _ref.config;

  function handleClickMenu(item) {
    if (item.key === 'logout') {
      logout();
    }
  }
  return _react2.default.createElement(
    'div',
    { className: 'zoe-react-component-header' },
    _react2.default.createElement(
      'div',
      { className: 'zoe-react-component-logo' },
      _react2.default.createElement('img', { src: config.logoSrc })
    ),
    _react2.default.createElement(
      'div',
      { className: 'zoe-react-component-menu' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          '\u90E8\u7F72\u5E73\u53F0'
        ),
        _react2.default.createElement(
          'li',
          null,
          '\u8FD0\u7EF4\u5E73\u53F0'
        ),
        _react2.default.createElement(
          'li',
          null,
          '\u8FD0\u8425\u5E73\u53F0'
        )
      )
    )
  );
}

Header.propTypes = {
  location: _react.PropTypes.object
};

exports.default = Header;
module.exports = exports['default'];