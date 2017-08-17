webpackJsonp([0],{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloList = function (_React$Component) {
  _inherits(HelloList, _React$Component);

  function HelloList() {
    _classCallCheck(this, HelloList);

    return _possibleConstructorReturn(this, (HelloList.__proto__ || Object.getPrototypeOf(HelloList)).apply(this, arguments));
  }

  _createClass(HelloList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          this.props.list.map(function (text, i) {
            return _react2.default.createElement(
              'li',
              { key: i },
              text
            );
          })
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick(e) {
              return _this2.handleClick(e);
            } },
          '\u6DFB\u52A0'
        )
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      this.props.dispatch({
        type: 'ADD_ITEM',
        text: parseInt(Math.random() * 1e4)
      });
    }
  }]);

  return HelloList;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(HelloList);

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    list: []
  };
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        list: [].concat(_toConsumableArray(state.list), [action.text])
      };
    default:
      return state;
  }
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(112);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(85);

var _reactRedux = __webpack_require__(91);

var _component = __webpack_require__(225);

var _component2 = _interopRequireDefault(_component);

var _reducer = __webpack_require__(226);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default, window.INITIAL_STATE);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_component2.default, null)
), document.getElementById('target'));

/***/ })

},[97]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hcHAuanMiXSwibmFtZXMiOlsiSGVsbG9MaXN0IiwicHJvcHMiLCJsaXN0IiwibWFwIiwidGV4dCIsImkiLCJoYW5kbGVDbGljayIsImUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFjdGlvbiIsInN0b3JlIiwid2luZG93IiwiSU5JVElBTF9TVEFURSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxTOzs7Ozs7Ozs7Ozs2QkFDSztBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0csZUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxtQkFDbkI7QUFBQTtBQUFBLGdCQUFJLEtBQUtBLENBQVQ7QUFDR0Q7QUFESCxhQURtQjtBQUFBLFdBQXBCO0FBREgsU0FERjtBQVFFO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBSyxPQUFLRSxXQUFMLENBQWlCQyxDQUFqQixDQUFMO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBUkYsT0FERjtBQVlEOzs7Z0NBRVdBLEMsRUFBRztBQUNiLFdBQUtOLEtBQUwsQ0FBV08sUUFBWCxDQUFvQjtBQUNsQkMsY0FBTSxVQURZO0FBRWxCTCxjQUFNTSxTQUFTQyxLQUFLQyxNQUFMLEtBQWdCLEdBQXpCO0FBRlksT0FBcEI7QUFJRDs7OztFQXJCcUIsZ0JBQU1DLFM7O0FBd0I5QixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFDL0IsU0FBTztBQUNMWixVQUFNYSxNQUFNYjtBQURQLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUVksZUFBUixFQUF5QmQsU0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7a0JDakNBLFlBS2I7QUFBQSxNQUpBZSxLQUlBLHVFQUpRO0FBQ05iLFVBQU07QUFEQSxHQUlSO0FBQUEsTUFEQWMsTUFDQTs7QUFDQSxVQUFRQSxPQUFPUCxJQUFmO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsYUFBTztBQUNMUCwyQ0FBVWEsTUFBTWIsSUFBaEIsSUFBc0JjLE9BQU9aLElBQTdCO0FBREssT0FBUDtBQUdGO0FBQ0UsYUFBT1csS0FBUDtBQU5KO0FBUUQsQzs7Ozs7Ozs7Ozs7O0FDZEQ7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQUlFLFFBQVEsMkNBQXFCQyxPQUFPQyxhQUE1QixDQUFaOztBQUVBLG1CQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLElBQVUsT0FBT0gsS0FBakI7QUFDRTtBQURGLENBREYsRUFJRUksU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUpGLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBIZWxsb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoKHRleHQsIGkpID0+XHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpfT7mt7vliqA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdBRERfSVRFTScsXHJcbiAgICAgIHRleHQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxZTQpXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbGlzdDogc3RhdGUubGlzdFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVsbG9MaXN0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnQuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpc3Q6IFtdXHJcbiAgfSxcclxuICBhY3Rpb25cclxuKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnQUREX0lURU0nOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpc3Q6IFsuLi5zdGF0ZS5saXN0LCBhY3Rpb24udGV4dF1cclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1Y2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEhlbGxvTGlzdCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHdpbmRvdy5JTklUSUFMX1NUQVRFKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxIZWxsb0xpc3QgLz5cclxuICA8L1Byb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JylcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9