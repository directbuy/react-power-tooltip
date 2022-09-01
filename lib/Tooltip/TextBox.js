"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

var TextBox = /*#__PURE__*/function (_Component) {
  _inherits(TextBox, _Component);

  var _super = _createSuper(TextBox);

  function TextBox() {
    var _this;

    _classCallCheck(this, TextBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hoverIndex: null,
      firstH: null,
      lastH: null,
      totH: null
    });

    _defineProperty(_assertThisInitialized(_this), "unsetHover", function () {
      _this.setState({
        hoverIndex: null
      });

      _this.props.hoverArrow(false);
    });

    _defineProperty(_assertThisInitialized(_this), "onSpanHover", function (index, lastIndex, numChildren) {
      _this.setState({
        hoverIndex: index
      });

      var _this$props = _this.props,
          rctStatic = _this$props["static"],
          arrow = _this$props.arw,
          position = _this$props.pos,
          hoverArrow = _this$props.hoverArrow;

      if (!rctStatic && (index === 0 && (position.isSide('bottom') || arrow.isAlign('v-start')) || index === lastIndex && (position.isSide('top') || arrow.isAlign('v-end')) || numChildren === 1)) {
        return hoverArrow(true);
      }

      return hoverArrow(false);
    });

    return _this;
  }

  _createClass(TextBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var heights = Object.keys(this.spanHeights).map(function (key) {
        return _this2.spanHeights[key].clientHeight;
      });
      var firstH = heights[0];
      var lastH = heights[heights.length - 1];
      var totH = heights.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      this.setState({
        totH: totH,
        firstH: firstH,
        lastH: lastH
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          arrow = _this$props2.arw,
          position = _this$props2.pos,
          lineSeparated = _this$props2.lines,
          tpStatic = _this$props2["static"],
          width = _this$props2.textBoxWidth,
          shCol = _this$props2.shadowColor,
          shShape = _this$props2.shadowShape,
          move = _this$props2.move,
          backgroundColor = _this$props2.backgroundColor,
          padding = _this$props2.padding,
          borderRadius = _this$props2.borderRadius,
          hoverBackground = _this$props2.hoverBackground,
          hoverColor = _this$props2.hoverColor,
          alert = _this$props2.alert,
          flat = _this$props2.flat,
          children = _this$props2.children;
      var _this$state = this.state,
          hoverIndex = _this$state.hoverIndex,
          totH = _this$state.totH,
          firstH = _this$state.firstH,
          lastH = _this$state.lastH;

      var calcHPos = function calcHPos(left, center, right) {
        return position.isAlign('center') ? center : position.isAlign('left') ? left : right;
      };

      var calcVPos = function calcVPos(perc, elHeight, divider, adjMove, totHeight) {
        return "calc(".concat(perc, "% - ").concat(totHeight || 0, "px - ").concat(elHeight, "px/").concat(divider, " + ").concat(adjMove || 0, "px)");
      }; // TODO: REfactor


      var calcTopPos = function calcTopPos(elHeight, totHeight) {
        if (position.align === 'center') {
          return calcVPos(50, elHeight, 2, null, totHeight);
        }

        if (position.align === 'bottom') {
          return calcVPos(100, elHeight, 2, -12, totHeight);
        }

        return calcVPos(0, elHeight, 2, 12, totHeight);
      };

      var numberChildren = _react["default"].Children.count(children);

      var lastIndex = numberChildren - 1;
      this.spanHeights = {};

      var adjChildren = _react["default"].Children.map(children, function (child, index) {
        var style = {
          backgroundColor: backgroundColor,
          padding: padding
        };
        if (width === 'auto') style.whiteSpace = 'nowrap';

        if (!tpStatic && hoverIndex === index) {
          style.color = hoverColor;
          style.backgroundColor = hoverBackground;
        }

        if (lineSeparated && lastIndex !== index) {
          style.borderBottom = lineSeparated;
        }

        var ref = null; // eslint-disable-next-line

        ref = function ref(span) {
          return _this3.spanHeights["span".concat(index + 1)] = span;
        };

        var childProps = _objectSpread(_objectSpread({}, child.props), {}, {
          ref: ref,
          style: style,
          onMouseOver: function onMouseOver() {
            return _this3.onSpanHover(index, lastIndex, numberChildren);
          }
        });

        return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
      });

      var left = '';
      var right = '';
      var top = '8px'; // Align: left, center, right

      var hLeftPos = calcHPos('100% - 50px', '50% - 40px', '0% - 30px');
      var hRightPos = calcHPos('0% - 30px', '50% - 40px', '100% - 50px');

      switch (arrow.position) {
        case 'h-start':
          left = "calc(".concat(hRightPos, ")");
          break;

        case 'h-end':
          right = "calc(".concat(hLeftPos, ")");
          break;

        case 'v-start':
          top = calcTopPos(firstH, null);
          break;

        case 'v-end':
          top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
          break;

        case 'v-center':
          top = "calc(0% - ".concat(totH, "px/2 + 11px)");

          if (position.isAlign('center')) {
            top = "calc(50% - ".concat(totH, "px/2)");
          }

          if (position.isAlign('bottom')) {
            top = "calc(100% - ".concat(totH, "px/2 - 11px)");
          }

          break;

        default:
          break;
      }

      switch (position.side) {
        case 'top':
          top = calcVPos(0, totH, 1, 13);
          break;

        case 'left':
          right = '8px';
          break;

        case 'right':
          left = '8px';
          break;

        default:
          break;
      }

      var textBoxWidth = width;

      if (textBoxWidth !== 'auto') {
        textBoxWidth = Number(width.slice(0, -2));
        if (move.left > 0) textBoxWidth += move.left;
        if (move.right > 0) textBoxWidth += move.right;
      }

      var boxStyle = {
        left: left,
        right: right,
        top: top,
        width: textBoxWidth,
        borderRadius: borderRadius
      };
      var shColAdj = shCol.substr(0, shCol.lastIndexOf(',')).replace(/[)]/g, ',');
      var shadow = "".concat(shShape, " ").concat(shCol, ", 0 0 3px ").concat(shColAdj, ", 0.1), 0 0 0 1px ").concat(shColAdj, ", 0.15)");
      var boxShadow = flat ? null : shadow;
      var alertStyle = alert ? 'rpt-alert' : '';
      var rgb = alert || 'rgb(248, 109, 109)';
      var alertShadow = alert ? "0 0 0 ".concat(rgb.slice(0, rgb.length - 1), ", 0.4)") : null;

      var noNeg = function noNeg(number) {
        return number > 0 ? number : 0;
      };

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "rpt-textbox-container ".concat(alertStyle),
        style: _objectSpread(_objectSpread({}, boxStyle), {}, {
          position: 'absolute',
          boxShadow: alertShadow,
          padding: "".concat(move.down, "px ").concat(move.left, "px ").concat(move.up, "px ").concat(move.right, "px")
        })
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rpt-shadow-container",
        style: {
          borderRadius: borderRadius,
          boxShadow: boxShadow,
          height: "calc(100% - ".concat(noNeg(move.down) + noNeg(move.up), "px)"),
          width: "calc(100% - ".concat(noNeg(move.left) + noNeg(move.right), "px)")
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rpt-textbox",
        onMouseLeave: this.unsetHover,
        style: {
          backgroundColor: backgroundColor,
          borderRadius: borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: !tpStatic ? 'rpt-hover' : null,
        style: {
          borderRadius: borderRadius,
          overflow: 'hidden'
        }
      }, adjChildren)));
    }
  }]);

  return TextBox;
}(_react.Component);

var _default = TextBox;
exports["default"] = _default;