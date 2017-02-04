'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('./Login.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sea35 on 2017/1/20.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Header = _antd.Layout.Header,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;

var FormItem = _antd.Form.Item;

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.handleOk = _this.handleOk.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'handleOk',
        value: function handleOk() {
            var _this2 = this;

            this.props.form.validateFieldsAndScroll(function (errors, values) {
                if (errors) {
                    console.log(errors);
                    return;
                }
                _this2.props.loginClick(values);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Layout,
                    null,
                    _react2.default.createElement(
                        Header,
                        null,
                        ' ',
                        _react2.default.createElement(
                            'span',
                            null,
                            this.props.logoText || "ZOE NET"
                        )
                    ),
                    _react2.default.createElement(
                        Content,
                        { className: 'zoe-react-component-login-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'zoe-react-component-login-content-layout' },
                            _react2.default.createElement('div', { className: 'zoe-react-component-login-content-left' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'zoe-react-component-login-content-right' },
                                _react2.default.createElement(
                                    'div',
                                    { className: "zoe-react-component-logos" },
                                    _react2.default.createElement('img', { src: this.props.logoSrc })
                                ),
                                _react2.default.createElement(
                                    'form',
                                    null,
                                    _react2.default.createElement(
                                        FormItem,
                                        { hasFeedback: true },
                                        getFieldDecorator('username', {
                                            rules: [{
                                                required: true,
                                                message: '请填写用户名'
                                            }]
                                        })(_react2.default.createElement(_antd.Input, { size: 'large', placeholder: '\u7528\u6237\u540D' }))
                                    ),
                                    _react2.default.createElement(
                                        FormItem,
                                        { hasFeedback: true },
                                        getFieldDecorator('password', {
                                            rules: [{
                                                required: true,
                                                message: '请填写密码'
                                            }]
                                        })(_react2.default.createElement(_antd.Input, { size: 'large', type: 'password', placeholder: '\u5BC6\u7801' }))
                                    ),
                                    _react2.default.createElement(
                                        _antd.Row,
                                        null,
                                        _react2.default.createElement(
                                            _antd.Button,
                                            { type: 'primary', size: 'large', onClick: this.handleOk,
                                                loading: this.props.loginButtonLoading },
                                            '\u767B\u5F55'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '\u8D26\u53F7\uFF1Aguest'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '\u5BC6\u7801\uFF1Aguest'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        Footer,
                        { style: { textAlign: 'center' } },
                        this.props.footerText
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

exports.default = _antd.Form.create()(Login);
module.exports = exports['default'];