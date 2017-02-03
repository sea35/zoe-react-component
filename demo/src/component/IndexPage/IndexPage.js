'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _ = require('./');

var _IndexPage = require('./IndexPage.css');

var _IndexPage2 = _interopRequireDefault(_IndexPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var configText = {
  name: 'ZOE OPS',
  footerText: 'ZoeNet 版权所有 © 2016 由 ZoeNet架构部支持',
  logoSrc: "http://www.zysoft.com.cn/Skins/style/css/img/logo.png",
  logoText: 'ZOE OPS'
};

var IndexPage = function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage(props) {
    _classCallCheck(this, IndexPage);

    var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));

    _this.state = {
      collapse: true
    };
    return _this;
  }

  _createClass(IndexPage, [{
    key: 'onCollapseChange',
    value: function onCollapseChange() {
      this.setState({
        collapse: !this.state.collapse
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var collapse = this.state.collapse;
      var config = this.props.configText || _extends({}, configText);
      return _react2.default.createElement(
        'div',
        { className: 'zoe-react-component-layout' },
        _react2.default.createElement(_.Header, { config: config }),
        _react2.default.createElement(
          'div',
          { className: collapse ? ["zoe-react-component-layout-aside", "zoe-react-component-layout-aside-collapse"].join(" ") : "zoe-react-component-layout-aside" },
          _react2.default.createElement(
            'aside',
            { className: 'zoe-react-component-layout-sider' },
            _react2.default.createElement(_.Sider, { collapse: collapse, menu: this.props.menu }),
            _react2.default.createElement(
              'div',
              { className: 'zoe-react-component-aside-action', onClick: this.onCollapseChange.bind(this) },
              collapse ? _react2.default.createElement(_antd.Icon, { type: 'right' }) : _react2.default.createElement(_antd.Icon, { type: 'left' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'zoe-react-component-layout-main' },
            _react2.default.createElement(
              'div',
              { className: 'zoe-react-component-layout-container' },
              _react2.default.createElement(_.Bread, { location: this.props.location, menu: this.props.menu }),
              _react2.default.createElement(
                'div',
                { className: 'zoe-react-component-layout-content' },
                this.props.children
              )
            ),
            _react2.default.createElement(_.Footer, { config: config })
          )
        )
      );
    }
  }]);

  return IndexPage;
}(_react.Component);

IndexPage.propTypes = {};

exports.default = IndexPage;
module.exports = exports['default'];