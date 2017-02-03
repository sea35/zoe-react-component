'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./IndexPage.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(_ref) {
    var config = _ref.config;

    return _react2.default.createElement(
        'div',
        { className: 'zoe-react-component-layout-footer' },
        config.footerText
    );
}

exports.default = Footer;
module.exports = exports['default'];