webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component = __webpack_require__(157);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	window.onload = function () {
	  _react2['default'].render(_react2['default'].createElement(_Component2['default'], null), document.getElementById('container'));
	};

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	/**
	 * Rect stateless components
	 */
	
	var Button = function Button(_ref) {
	  var _ref$children = _ref.children;
	  var children = _ref$children === undefined ? 'Sample Button' : _ref$children;
	  return _react2['default'].createElement(
	    'button',
	    null,
	    children
	  );
	};
	
	/**
	 * Basic sample component displays a title and lorem paragraph
	 */
	
	var Component = (function (_React$Component) {
	  _inherits(Component, _React$Component);
	
	  function Component() {
	    _classCallCheck(this, Component);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  Component.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'aside',
	      { className: 'hello-component' },
	      _react2['default'].createElement(
	        'h1',
	        null,
	        this.props.title
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	      ),
	      _react2['default'].createElement(
	        Button,
	        null,
	        'Button Name'
	      )
	    );
	  };
	
	  _createClass(Component, null, [{
	    key: 'defaultProps',
	    value: {
	      title: 'Sample Component'
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      title: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  return Component;
	})(_react2['default'].Component);
	
	exports['default'] = Component;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=index.js.map