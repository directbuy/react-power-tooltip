"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextBox = _interopRequireDefault(require("./Tooltip/TextBox"));

var _Arrow = _interopRequireDefault(require("./Tooltip/Arrow"));

var _styles = _interopRequireDefault(require("./Tooltip/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip = /*#__PURE__*/function (_Component) {
  _inherits(Tooltip, _Component);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hoverArrow: false,
      show: _this.props.show,
      mount: true,
      hasInitialized: false
    });

    _defineProperty(_assertThisInitialized(_this), "hoverArrow", function (bool) {
      _this.setState({
        hoverArrow: bool
      });
    });

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // Injecting styles directly into header
      if (!document.getElementById('rpt-css')) {
        var $style = document.createElement('style');
        $style.type = 'text/css';
        $style.id = 'rpt-css';
        document.head.appendChild($style);
        $style.innerHTML = _styles["default"];
      } // Basic prop type checking


      Object.keys(this.props).forEach(function (propName) {
        var type = _typeof(_this2.props[propName]);

        var text = "React-power-tooptip: [".concat(propName, "] prop should be a");

        if (propName !== 'children' && type !== 'boolean' && type !== 'string') {
          // eslint-disable-next-line
          console.error("".concat(text, " string (check also units)"));
        }
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps !== this.props || nextState.hasInitialized !== this.state.hasInitialized || nextState.mount !== this.state.mount || nextState.hoverArrow !== this.state.hoverArrow;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      /* eslint-disable */
      if (!this.state.hasInitialized) this.setState({
        show: this.props.show,
        hasInitialized: true
      });
      if (this.props.show) this.setState({
        mount: true
      });
      if (!this.props.animation) this.setState({
        mount: false
      });
      /* eslint-disable */
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          lines = _this$props.lineSeparated,
          pos = _this$props.position,
          hoverBackground = _this$props.hoverBackground,
          backgroundColor = _this$props.backgroundColor,
          arwAlign = _this$props.arrowAlign,
          moveDown = _this$props.moveDown,
          moveRight = _this$props.moveRight,
          moveLeft = _this$props.moveLeft,
          moveUp = _this$props.moveUp,
          textAlign = _this$props.textAlign,
          fontFamily = _this$props.fontFamily,
          fontWeight = _this$props.fontWeight,
          fontSize = _this$props.fontSize,
          color = _this$props.color,
          animation = _this$props.animation,
          zIndex = _this$props.zIndex,
          show = _this$props.show,
          flat = _this$props.flat; // Sets if false no line; if true default line; if string custom line;

      var lineSeparated = typeof lines === 'boolean' ? '1px solid #ececec' : lines;

      function isAlign(str) {
        return this.align ? this.align === str : this.position === str;
      }

      function isSide(str) {
        return this.side === str;
      }

      var position = {
        side: pos.split(' ')[0],
        align: pos.split(' ')[1],
        isAlign: isAlign,
        isSide: isSide
      };
      var arrow = {
        isAlign: isAlign,
        position: arwAlign
      };
      var side = position.side,
          align = position.align;
      var classes = ['rpt-container'];
      var tooltipStyle = {};
      var bottom;

      var arrange = function arrange(top, left, right, height, width, cssSel) {
        tooltipStyle = {
          top: top,
          left: left,
          right: right,
          height: height,
          width: width
        };
        classes.push(cssSel);
      };

      switch (side) {
        case 'bottom':
          arrange('100%', '0px', '', '', '100%', 'rpt-bottom');
          break;

        case 'top':
          arrange('', '0px', '', '', '100%', 'rpt-top');
          bottom = '100%';
          break;

        case 'right':
          arrange('0px', '100%', '', '100%', '', 'rpt-right');
          break;

        default:
          arrange('0px', '', '100%', '100%', '', 'rpt-left');
          break;
      }

      var onAxis = {
        y: position.isSide('top') || position.isSide('bottom'),
        x: position.isSide('left') || position.isSide('right')
      };
      arrow.position = onAxis.y ? "h-".concat(arrow.position) : "v-".concat(arrow.position);

      var num = function num(str) {
        return Number(str.slice(0, -2));
      };

      var move = {
        down: num(moveDown),
        up: num(moveUp),
        left: num(moveLeft),
        right: num(moveRight)
      };
      var oneMovePropIsNeg = move.down < 0 || move.up < 0 || move.left < 0 || move.right < 0;

      switch (align) {
        case 'left':
          if (onAxis.y) classes.push('rpt-align-left');
          break;

        case 'right':
          if (onAxis.y) classes.push('rpt-align-right');
          break;

        case 'bottom':
          if (onAxis.x) classes.push('rpt-align-bottom');
          break;

        case 'top':
          break;

        default:
          if (onAxis.x) {
            classes.push('rpt-align-center');

            if (!oneMovePropIsNeg) {
              move.down *= 2;
              move.up *= 2;
            }
          }

          if (onAxis.y && !oneMovePropIsNeg) {
            move.right *= 2;
            move.left *= 2;
          }

          break;
      }

      var adjustment = "".concat(move.down, "px ").concat(move.left, "px ").concat(move.up, "px ").concat(move.right, "px");
      tooltipStyle = _objectSpread(_objectSpread({}, tooltipStyle), {}, {
        zIndex: zIndex,
        color: color,
        bottom: bottom,
        fontSize: fontSize,
        textAlign: textAlign,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        padding: oneMovePropIsNeg ? null : adjustment,
        margin: oneMovePropIsNeg ? adjustment : null,
        animation: show ? "rpt-".concat(animation, " 0.2s") : "rpt-".concat(animation, "-out 0.15s")
      });
      return !animation && show || this.state.show && this.state.mount ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.join(' '),
        style: tooltipStyle,
        onAnimationEnd: function onAnimationEnd() {
          if (!show && animation) _this3.setState({
            mount: false
          });
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Arrow["default"], {
        isHovered: this.state.hoverArrow,
        hovBkg: hoverBackground,
        bkgCol: backgroundColor,
        flat: flat
      }), /*#__PURE__*/_react["default"].createElement(_TextBox["default"], _extends({}, this.props, {
        hoverArrow: this.hoverArrow,
        lines: lineSeparated,
        pos: position,
        arw: arrow,
        move: move
      })))) : null;
    }
  }]);

  return Tooltip;
}(_react.Component); // Specifies the default values for props:


Tooltip.defaultProps = {
  hoverBackground: '#ececec',
  hoverColor: 'black',
  backgroundColor: 'white',
  textBoxWidth: '150px',
  padding: '15px 20px',
  borderRadius: '5px',
  shadowColor: 'rgba(0,0,0,0.251)',
  shadowShape: '0 8px 15px',
  moveDown: '0px',
  moveRight: '0px',
  moveLeft: '0px',
  moveUp: '0px',
  position: 'right center',
  arrowAlign: 'start',
  textAlign: 'left',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  fontSize: 'inherit',
  color: 'inherit',
  zIndex: '100',
  animation: ''
};
var _default = Tooltip;
exports["default"] = _default;