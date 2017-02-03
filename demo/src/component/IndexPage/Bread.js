'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('./IndexPage.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathSet = [];
var getPathSet = function getPathSet(menuArray, parentPath, menu) {
  parentPath = parentPath || '/';
  menuArray.map(function (item) {
    pathSet[(parentPath + item.key).replace(/\//g, '-').hyphenToHump()] = {
      path: parentPath + item.key,
      name: item.name,
      icon: item.icon || ''
    };
    if (!!item.child) {
      getPathSet(item.child, parentPath + item.key + '/');
    }
  });
};

function Bread(_ref) {
  var location = _ref.location,
      menu = _ref.menu;

  getPathSet(menu);
  var pathNames = [];
  location.pathname.substr(1).split('/').map(function (item, key) {
    if (key > 0) {
      pathNames.push((pathNames[key - 1] + '-' + item).hyphenToHump());
    } else {
      if (item != "") {
        pathNames.push(('-' + item).hyphenToHump());
      }
    }
  });
  var breads = pathNames.map(function (item, key) {
    return _react2.default.createElement(
      _antd.Breadcrumb.Item,
      _extends({ key: key }, pathNames.length - 1 == key ? '' : { href: '#' + pathSet[item].path }),
      pathSet[item] && pathSet[item].icon ? _react2.default.createElement(_antd.Icon, { type: pathSet[item].icon }) : '',
      _react2.default.createElement(
        'span',
        null,
        pathSet[item].name
      )
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'zoe-react-component-bread' },
    _react2.default.createElement(
      _antd.Breadcrumb,
      null,
      _react2.default.createElement(
        _antd.Breadcrumb.Item,
        { href: '#/' },
        _react2.default.createElement(_antd.Icon, { type: 'home' }),
        _react2.default.createElement(
          'span',
          null,
          '\u4E3B\u9875'
        )
      ),
      breads
    )
  );
}

Bread.propTypes = {
  location: _react.PropTypes.object
};

exports.default = Bread;
module.exports = exports['default'];