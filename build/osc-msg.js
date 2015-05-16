(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.OscMsg = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var BufferDataView = require("buffer-dataview");

function DataView2(buffer) {
  if (global.Buffer && buffer instanceof global.Buffer) {
    return new BufferDataView(buffer);
  }
  return new DataView(buffer);
}

function Buffer2(n) {
  if (global.Buffer) {
    return new global.Buffer(n);
  }
  return new Uint8Array(n).buffer;
}

module.exports = {
  DataView2: DataView2,
  Buffer2: Buffer2,
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"buffer-dataview":2}],2:[function(require,module,exports){

/**
 * Module exports.
 */

module.exports = DataView;

/**
 * Very minimal `DataView` implementation that wraps (doesn't *copy*)
 * Node.js Buffer instances.
 *
 *  Spec: http://www.khronos.org/registry/typedarray/specs/latest/#8
 *  MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/DataView
 *
 * @param {Buffer} buffer
 * @param {Number} byteOffset (optional)
 * @param {Number} byteLength (optional)
 * @api public
 */

function DataView (buffer, byteOffset, byteLength) {
  if (!(this instanceof DataView)) throw new TypeError('Constructor DataView requires \'new\'');
  if (!buffer || null == buffer.length) throw new TypeError('First argument to DataView constructor must be a Buffer');
  if (null == byteOffset) byteOffset = 0;
  if (null == byteLength) byteLength = buffer.length;
  this.buffer = buffer;
  this.byteOffset = byteOffset | 0;
  this.byteLength = byteLength | 0;
}

/**
 * "Get" functions.
 */

DataView.prototype.getInt8 = function (byteOffset) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  return this.buffer.readInt8(offset);
};

DataView.prototype.getUint8 = function (byteOffset) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  return this.buffer.readUInt8(offset);
};

DataView.prototype.getInt16 = function (byteOffset, littleEndian) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    return this.buffer.readInt16LE(offset);
  } else {
    return this.buffer.readInt16BE(offset);
  }
};

DataView.prototype.getUint16 = function (byteOffset, littleEndian) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    return this.buffer.readUInt16LE(offset);
  } else {
    return this.buffer.readUInt16BE(offset);
  }
};

DataView.prototype.getInt32 = function (byteOffset, littleEndian) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    return this.buffer.readInt32LE(offset);
  } else {
    return this.buffer.readInt32BE(offset);
  }
};

DataView.prototype.getUint32 = function (byteOffset, littleEndian) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    return this.buffer.readUInt32LE(offset);
  } else {
    return this.buffer.readUInt32BE(offset);
  }
};

DataView.prototype.getFloat32 = function (byteOffset, littleEndian) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    return this.buffer.readFloatLE(offset);
  } else {
    return this.buffer.readFloatBE(offset);
  }
};

DataView.prototype.getFloat64 = function (byteOffset, littleEndian) {
  if (arguments.length < 1) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    return this.buffer.readDoubleLE(offset);
  } else {
    return this.buffer.readDoubleBE(offset);
  }
};

/**
 * "Set" functions.
 */

DataView.prototype.setInt8 = function (byteOffset, value) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  // wrap the `value` from -128 to 128
  value = ((value + 128) & 255) - 128;
  this.buffer.writeInt8(value, offset);
};

DataView.prototype.setUint8 = function (byteOffset, value) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  // wrap the `value` from 0 to 255
  value = value & 255;
  this.buffer.writeUInt8(value, offset);
};

DataView.prototype.setInt16 = function (byteOffset, value, littleEndian) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  // wrap the `value` from -32768 to 32768
  value = ((value + 32768) & 65535) - 32768;
  if (littleEndian) {
    this.buffer.writeInt16LE(value, offset);
  } else {
    this.buffer.writeInt16BE(value, offset);
  }
};

DataView.prototype.setUint16 = function (byteOffset, value, littleEndian) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  // wrap the `value` from 0 to 65535
  value = value & 65535;
  if (littleEndian) {
    this.buffer.writeUInt16LE(value, offset);
  } else {
    this.buffer.writeUInt16BE(value, offset);
  }
};

DataView.prototype.setInt32 = function (byteOffset, value, littleEndian) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  // wrap the `value` from -2147483648 to 2147483648
  value |= 0;
  if (littleEndian) {
    this.buffer.writeInt32LE(value, offset);
  } else {
    this.buffer.writeInt32BE(value, offset);
  }
};

DataView.prototype.setUint32 = function (byteOffset, value, littleEndian) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  // wrap the `value` from 0 to 4294967295
  value = value >>> 0;
  if (littleEndian) {
    this.buffer.writeUInt32LE(value, offset);
  } else {
    this.buffer.writeUInt32BE(value, offset);
  }
};

DataView.prototype.setFloat32 = function (byteOffset, value, littleEndian) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    this.buffer.writeFloatLE(value, offset);
  } else {
    this.buffer.writeFloatBE(value, offset);
  }
};

DataView.prototype.setFloat64 = function (byteOffset, value, littleEndian) {
  if (arguments.length < 2) throw new TypeError('invalid_argument');
  var offset = this.byteOffset + (byteOffset | 0);
  var max = this.byteOffset + this.byteLength - 1;
  if (offset < this.byteOffset || offset > max) {
    throw new RangeError('Offset is outside the bounds of the DataView');
  }
  if (littleEndian) {
    this.buffer.writeDoubleLE(value, offset);
  } else {
    this.buffer.writeDoubleBE(value, offset);
  }
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var _dataview2 = require("dataview2");

var _Reader = require("./Reader");

var _Reader2 = _interopRequireDefault(_Reader);

var _Writer = require("./Writer");

var _Writer2 = _interopRequireDefault(_Writer);

var _OSCElement2 = require("./OSCElement");

var _OSCElement3 = _interopRequireDefault(_OSCElement2);

var OSCBundle = (function (_OSCElement) {
  function OSCBundle() {
    var timetag = arguments[0] === undefined ? 0 : arguments[0];
    var elements = arguments[1] === undefined ? [] : arguments[1];

    _classCallCheck(this, OSCBundle);

    _get(Object.getPrototypeOf(OSCBundle.prototype), "constructor", this).call(this);

    this._.timetag = 0;
    this._.elements = [];
    this._.hasError = false;

    this.timetag = timetag;
    this.add.apply(this, _toConsumableArray(elements));
  }

  _inherits(OSCBundle, _OSCElement);

  _createClass(OSCBundle, [{
    key: "oscType",
    get: function () {
      return "bundle";
    }
  }, {
    key: "timetag",
    get: function () {
      return this._.timetag;
    },
    set: function (value) {
      if (!util.isTimetag(value)) {
        throw new Error("timetag must be an integer");
      }
      this._.timetag = value;
    }
  }, {
    key: "size",
    get: function () {
      var result = 0;

      result += 8; // "#bundle_"
      result += 8; // timetag
      result += this._.elements.length * 4;
      result += this._.elements.reduce(function (a, b) {
        return a + b.size;
      }, 0);

      return result;
    }
  }, {
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
        elements[_key] = arguments[_key];
      }

      elements.forEach(function (element) {
        if (element instanceof _OSCElement3["default"]) {
          _this._.elements.push(element);
        } else if (element && (typeof element === "object" || typeof element === "string")) {
          _this._.elements.push(_OSCElement3["default"].fromObject(element));
        } else {
          throw new Error("element must be a OSCMessage or OSCBundle");
        }
      });

      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._.timetag = 0;
      this._.elements = [];

      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new OSCBundle(this.timetag, this._.elements.map(function (element) {
        return element.clone();
      }));
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var obj = {
        timetag: this.timetag,
        elements: this._.elements.map(function (element) {
          return element.toObject();
        }),
        oscType: this.oscType };

      if (this._.hasError) {
        obj.error = true;
      }

      return obj;
    }
  }, {
    key: "toBuffer",
    value: function toBuffer() {
      var buffer = new _dataview2.Buffer2(this.size);

      this._writeTo(new _Writer2["default"](buffer));

      return buffer;
    }
  }, {
    key: "_writeTo",

    // private methods
    value: function _writeTo(writer) {
      writer.writeString("#bundle");
      writer.writeInt64(this.timetag);
      this._.elements.forEach(function (element) {
        writer.writeUInt32(element.size);
        element._writeTo(writer);
      });
    }
  }], [{
    key: "fromObject",
    value: function fromObject(obj) {
      if (obj == null || typeof obj !== "object") {
        obj = {};
      }
      return new OSCBundle(obj.timetag, obj.elements);
    }
  }, {
    key: "fromBuffer",
    value: function fromBuffer(buffer) {
      if (!util.isBlob(buffer)) {
        return new OSCBundle();
      }

      var reader = new _Reader2["default"](buffer);
      var header = reader.readString();

      if (header !== "#bundle") {
        return new OSCBundle();
      }

      var timetag = reader.readInt64();
      var elements = [];

      while (reader.hasNext()) {
        var _length = reader.readUInt32();
        var _buffer = reader.read(_length);

        elements.push(_OSCElement3["default"].fromBuffer(_buffer));
      }

      var bundle = new OSCBundle(timetag, elements);

      bundle._.hasError = reader.hasError();

      return bundle;
    }
  }]);

  return OSCBundle;
})(_OSCElement3["default"]);

exports["default"] = OSCBundle;

_OSCElement3["default"].OSCBundle = OSCBundle;
module.exports = exports["default"];

},{"./OSCElement":4,"./Reader":6,"./Writer":8,"./util":9,"dataview2":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var _Reader = require("./Reader");

var _Reader2 = _interopRequireDefault(_Reader);

var OSCElement = (function () {
  function OSCElement() {
    _classCallCheck(this, OSCElement);

    Object.defineProperty(this, "_", {
      value: {} });
  }

  _createClass(OSCElement, null, [{
    key: "fromObject",
    value: function fromObject(obj) {
      if (typeof obj === "string") {
        obj = { address: obj };
      } else if (obj == null || typeof obj !== "object") {
        obj = { address: "" };
      }

      if (typeof obj.timetag === "number") {
        return OSCElement.OSCBundle.fromObject(obj);
      }

      return OSCElement.OSCMessage.fromObject(obj);
    }
  }, {
    key: "fromBuffer",
    value: function fromBuffer(buffer) {
      if (!util.isBlob(buffer)) {
        return new OSCElement.OSCMessage();
      }

      var reader = new _Reader2["default"](buffer);

      if (reader.readString() === "#bundle") {
        return OSCElement.OSCBundle.fromBuffer(buffer);
      }

      return OSCElement.OSCMessage.fromBuffer(buffer);
    }
  }]);

  return OSCElement;
})();

exports["default"] = OSCElement;

// assign later
OSCElement.OSCMessage = null;
OSCElement.OSCBundle = null;
module.exports = exports["default"];

},{"./Reader":6,"./util":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var _Tag = require("./Tag");

var Tag = _interopRequireWildcard(_Tag);

var _dataview2 = require("dataview2");

var _Reader = require("./Reader");

var _Reader2 = _interopRequireDefault(_Reader);

var _Writer = require("./Writer");

var _Writer2 = _interopRequireDefault(_Writer);

var _OSCElement2 = require("./OSCElement");

var _OSCElement3 = _interopRequireDefault(_OSCElement2);

var OSCMessage = (function (_OSCElement) {
  function OSCMessage() {
    var address = arguments[0] === undefined ? "" : arguments[0];
    var args = arguments[1] === undefined ? [] : arguments[1];

    _classCallCheck(this, OSCMessage);

    _get(Object.getPrototypeOf(OSCMessage.prototype), "constructor", this).call(this);

    this._.types = ",";
    this._.args = [];
    this._.size = 0;
    this._.hasError = false;

    this.address = address;
    this.add.apply(this, _toConsumableArray(args));
  }

  _inherits(OSCMessage, _OSCElement);

  _createClass(OSCMessage, [{
    key: "oscType",
    get: function () {
      return "message";
    }
  }, {
    key: "address",
    get: function () {
      return this._.address;
    },
    set: function (value) {
      if (typeof value !== "string") {
        throw new Error("address must be string");
      }
      this._.address = value;
    }
  }, {
    key: "types",
    get: function () {
      return this._.types;
    }
  }, {
    key: "size",
    get: function () {
      var result = 0;

      result += util.size4(this._.address.length + 1);
      result += util.size4(this._.types.length + 1);
      result += this._.size;

      return result;
    }
  }, {
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      values.forEach(function (obj) {
        if (obj === null || typeof obj !== "object") {
          obj = _this._convert(obj);
        } else if (Array.isArray(obj)) {
          obj = { type: "array", value: obj };
        }

        var type = obj.type;
        var value = obj.value;

        if (type === "array") {
          if (!Array.isArray(value)) {
            throw new Error("Required '" + type + "', but got " + value);
          }

          _this._.types += "[";

          value.forEach(function (value) {
            _this.add(value);
          });

          _this._.types += "]";
        } else {
          if (!Tag.types.hasOwnProperty(type)) {
            throw new Error("Unsupport type: " + type);
          }

          if (!Tag.types[type].validate(value)) {
            throw new Error("Required '" + type + "', but got " + value);
          }

          _this._.types += Tag.types[type].tag;
          _this._.args.push({ type: type, value: value });
          _this._.size += Tag.types[type].size(value);
        }
      });

      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._.address = "";
      this._.types = ",";
      this._.args = [];
      this._.size = 0;

      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new OSCMessage(this.address, this._.args.map(function (obj) {
        return { type: obj.type, value: obj.value };
      }));
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var objArgs = [];
      var args = this._.args.slice();
      var types = this.types.slice(1).split("");
      var stack = [];

      for (var i = 0; i < types.length; i++) {
        var tag = types[i];
        if (tag === "[") {
          stack.push(objArgs);
          objArgs = [];
        } else if (tag === "]") {
          var pop = stack.pop();
          pop.push({ type: "array", value: objArgs });
          objArgs = pop;
        } else {
          objArgs.push(args.shift());
        }
      }

      var obj = {
        address: this.address,
        args: objArgs,
        oscType: this.oscType };

      if (this._.hasError) {
        obj.error = true;
      }

      return obj;
    }
  }, {
    key: "toBuffer",
    value: function toBuffer() {
      var buffer = new _dataview2.Buffer2(this.size);

      this._writeTo(new _Writer2["default"](buffer));

      return buffer;
    }
  }, {
    key: "_convert",

    // private methods
    value: function _convert(value) {
      switch (typeof value) {
        case "number":
          return { type: "float", value: value };
        case "string":
          return { type: "string", value: value };
        case "boolean":
          if (value) {
            return { type: "true", value: true };
          }
          return { type: "false", value: false };
      }
      return { type: "null", value: null };
    }
  }, {
    key: "_writeTo",
    value: function _writeTo(writer) {
      writer.writeString(this.address);
      writer.writeString(this.types);

      this._.args.forEach(function (arg) {
        Tag.types[arg.type].write(writer, arg.value);
      });
    }
  }], [{
    key: "fromObject",
    value: function fromObject(obj) {
      if (typeof obj === "string") {
        obj = { address: obj };
      } else if (obj == null || typeof obj !== "object") {
        obj = {};
      }
      return new OSCMessage(obj.address, obj.args);
    }
  }, {
    key: "fromBuffer",
    value: function fromBuffer(buffer) {
      if (!util.isBlob(buffer)) {
        return new OSCMessage();
      }

      var reader = new _Reader2["default"](buffer);
      var address = reader.readString();
      var tags = reader.readString();

      if (tags[0] !== ",") {
        return new OSCMessage(address);
      }

      var args = [];
      var stack = [];

      for (var i = 1; i < tags.length; i++) {
        var tag = tags[i];
        if (tag === "[") {
          stack.push(args);
          args = [];
        } else if (tag === "]") {
          if (stack.length < 1) {
            throw new Error("Unexpected token ']'");
          }
          var pop = stack.pop();
          pop.push({ type: "array", value: args });
          args = pop;
        } else {
          var type = Tag.tags[tag];
          if (!Tag.types.hasOwnProperty(type)) {
            throw new Error("Not supported tag '" + tag + "'");
          }
          args.push({ type: type, value: Tag.types[type].read(reader) });
        }
      }

      if (stack.length !== 0) {
        throw new Error("Unexpected token '['");
      }

      var msg = new OSCMessage(address, args);

      msg._.hasError = reader.hasError();

      return msg;
    }
  }]);

  return OSCMessage;
})(_OSCElement3["default"]);

exports["default"] = OSCMessage;

_OSCElement3["default"].OSCMessage = OSCMessage;
module.exports = exports["default"];

},{"./OSCElement":4,"./Reader":6,"./Tag":7,"./Writer":8,"./util":9,"dataview2":1}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _dataview2 = require("dataview2");

var TWO_TO_THE_32 = Math.pow(2, 32);

var Reader = (function () {
  function Reader(buffer) {
    _classCallCheck(this, Reader);

    this.view = new _dataview2.DataView2(buffer);
    this.index = 0;
    this.error = false;
  }

  _createClass(Reader, [{
    key: "read",
    value: function read(length) {
      if (this.view.byteLength < this.index + length) {
        this.index += length;
        this.error = true;
        return new _dataview2.Buffer2(0);
      }

      var buffer = new _dataview2.Buffer2(length);
      var view = new _dataview2.DataView2(buffer);

      for (var i = 0; i < length; i++) {
        view.setUint8(i, this.readUInt8());
      }

      return buffer;
    }
  }, {
    key: "readUInt8",
    value: function readUInt8() {
      this.index += 1;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return 0;
      }
      return this.view.getUint8(this.index - 1);
    }
  }, {
    key: "readInt32",
    value: function readInt32() {
      this.index += 4;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return 0;
      }
      return this.view.getInt32(this.index - 4);
    }
  }, {
    key: "readUInt32",
    value: function readUInt32() {
      this.index += 4;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return 0;
      }
      return this.view.getUint32(this.index - 4);
    }
  }, {
    key: "readInt64",
    value: function readInt64() {
      var hi = this.readUInt32();
      var lo = this.readUInt32();
      return hi * TWO_TO_THE_32 + lo;
    }
  }, {
    key: "readFloat32",
    value: function readFloat32() {
      this.index += 4;
      if (this.view.byteLength < this.index) {
        return 0;
      }
      return this.view.getFloat32(this.index - 4);
    }
  }, {
    key: "readFloat64",
    value: function readFloat64() {
      this.index += 8;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return 0;
      }
      return this.view.getFloat64(this.index - 8);
    }
  }, {
    key: "readString",
    value: function readString() {
      var result = "";
      var charCode = undefined;

      while (this.hasNext() && (charCode = this.readUInt8()) !== 0) {
        result += String.fromCharCode(charCode);
      }
      this.align();

      return result;
    }
  }, {
    key: "readBlob",
    value: function readBlob() {
      var length = this.readUInt32();
      var buffer = this.read(length);

      this.align();

      return buffer;
    }
  }, {
    key: "hasError",
    value: function hasError() {
      return this.error;
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      return this.index < this.view.byteLength;
    }
  }, {
    key: "align",
    value: function align() {
      while (this.hasNext() && this.index % 4 !== 0 && this.view.getUint8(this.index) === 0) {
        this.index += 1;
      }
    }
  }]);

  return Reader;
})();

exports["default"] = Reader;
module.exports = exports["default"];

},{"dataview2":1}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var types = {
  integer: {
    tag: "i",
    size: function size() {
      return 4;
    },
    validate: util.isInteger,
    write: function write(writer, value) {
      writer.writeInt32(value);
    },
    read: function read(reader) {
      return reader.readInt32();
    } },
  float: {
    tag: "f",
    size: function size() {
      return 4;
    },
    validate: util.isFloat,
    write: function write(writer, value) {
      writer.writeFloat32(value);
    },
    read: function read(reader) {
      return reader.readFloat32();
    } },
  string: {
    tag: "s",
    size: function size(value) {
      return util.size4(value.length + 1);
    },
    validate: util.isString,
    write: function write(writer, value) {
      writer.writeString(value);
    },
    read: function read(reader) {
      return reader.readString();
    } },
  blob: {
    tag: "b",
    size: function size(value) {
      return 4 + util.size4(value.byteLength || value.length);
    },
    validate: util.isBlob,
    write: function write(writer, value) {
      writer.writeBlob(value);
    },
    read: function read(reader) {
      return reader.readBlob();
    } },
  timetag: {
    tag: "t",
    size: function size() {
      return 8;
    },
    validate: util.isTimetag,
    write: function write(writer, value) {
      writer.writeInt64(value);
    },
    read: function read(reader) {
      return reader.readInt64();
    } },
  double: {
    tag: "d",
    size: function size() {
      return 8;
    },
    validate: util.isDouble,
    write: function write(writer, value) {
      writer.writeFloat64(value);
    },
    read: function read(reader) {
      return reader.readFloat64();
    } },
  "true": {
    tag: "T",
    size: function size() {
      return 0;
    },
    validate: function validate(value) {
      return value === true;
    },
    write: function write() {},
    read: function read() {
      return true;
    } },
  "false": {
    tag: "F",
    size: function size() {
      return 0;
    },
    validate: function validate(value) {
      return value === false;
    },
    write: function write() {},
    read: function read() {
      return false;
    } },
  "null": {
    tag: "N",
    size: function size() {
      return 0;
    },
    validate: function validate(value) {
      return value === null;
    },
    write: function write() {},
    read: function read() {
      return null;
    } },
  bang: {
    tag: "I",
    size: function size() {
      return 0;
    },
    validate: function validate(value) {
      return value === "bang";
    },
    write: function write() {},
    read: function read() {
      return "bang";
    } } };

exports.types = types;
var tags = {};

exports.tags = tags;
Object.keys(types).forEach(function (key) {
  tags[types[key].tag] = key;
});

},{"./util":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _dataview2 = require("dataview2");

var TWO_TO_THE_32 = Math.pow(2, 32);

var Writer = (function () {
  function Writer(buffer) {
    _classCallCheck(this, Writer);

    this.view = new _dataview2.DataView2(buffer);
    this.index = 0;
    this.error = false;
  }

  _createClass(Writer, [{
    key: "writeUInt8",
    value: function writeUInt8(value) {
      this.index += 1;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return;
      }
      this.view.setUint8(this.index - 1, value);
    }
  }, {
    key: "writeInt32",
    value: function writeInt32(value) {
      this.index += 4;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return;
      }
      this.view.setInt32(this.index - 4, value);
    }
  }, {
    key: "writeUInt32",
    value: function writeUInt32(value) {
      this.index += 4;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return;
      }
      this.view.setUint32(this.index - 4, value);
    }
  }, {
    key: "writeInt64",
    value: function writeInt64(value) {
      var hi = value / TWO_TO_THE_32 >>> 0;
      var lo = value >>> 0;

      this.writeUInt32(hi);
      this.writeUInt32(lo);
    }
  }, {
    key: "writeFloat32",
    value: function writeFloat32(value) {
      this.index += 4;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return;
      }
      this.view.setFloat32(this.index - 4, value);
    }
  }, {
    key: "writeFloat64",
    value: function writeFloat64(value) {
      this.index += 8;
      if (this.view.byteLength < this.index) {
        this.error = true;
        return;
      }
      this.view.setFloat64(this.index - 8, value);
    }
  }, {
    key: "writeString",
    value: function writeString(value) {
      for (var i = 0; i < value.length; i++) {
        this.writeUInt8(value.charCodeAt(i));
      }

      this.writeUInt8(0);
      this.align();
    }
  }, {
    key: "writeBlob",
    value: function writeBlob(value) {
      var view = new _dataview2.DataView2(value);
      var length = view.byteLength;

      this.writeUInt32(length);

      for (var i = 0; i < length; i++) {
        this.writeUInt8(view.getUint8(i));
      }

      this.align();
    }
  }, {
    key: "hasError",
    value: function hasError() {
      return this.error;
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      return this.index < this.view.byteLength;
    }
  }, {
    key: "align",
    value: function align() {
      while (this.index % 4 !== 0) {
        this.writeUInt8(0);
      }
    }
  }]);

  return Writer;
})();

exports["default"] = Writer;
module.exports = exports["default"];

},{"dataview2":1}],9:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size4 = size4;
exports.isInteger = isInteger;
exports.isFloat = isFloat;
exports.isString = isString;
exports.isBlob = isBlob;
exports.isTimetag = isTimetag;
exports.isDouble = isDouble;

function size4(num) {
  return Math.ceil((num | 0) / 4) << 2;
}

function isInteger(value) {
  return (value | 0) === value;
}

function isFloat(value) {
  return value === value && typeof value === "number";
}

function isString(value) {
  return typeof value === "string";
}

function isBlob(value) {
  return value instanceof ArrayBuffer || value instanceof global.Buffer;
}

function isTimetag(value) {
  return typeof value === "number" && isFinite(+value) && value >= 0 && Math.floor(value) === value;
}

function isDouble(value) {
  return value === value && typeof value === "number";
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _OSCElement = require("./OSCElement");

var _OSCElement2 = _interopRequireDefault(_OSCElement);

var _OSCMessage = require("./OSCMessage");

var _OSCMessage2 = _interopRequireDefault(_OSCMessage);

var _OSCBundle = require("./OSCBundle");

var _OSCBundle2 = _interopRequireDefault(_OSCBundle);

exports["default"] = {
  OSCMessage: _OSCMessage2["default"],
  OSCBundle: _OSCBundle2["default"],
  fromBuffer: function fromBuffer(buffer) {
    return _OSCElement2["default"].fromBuffer(buffer).toObject();
  },
  toBuffer: function toBuffer(obj) {
    return _OSCElement2["default"].fromObject(obj).toBuffer();
  } };
module.exports = exports["default"];

},{"./OSCBundle":3,"./OSCElement":4,"./OSCMessage":5}]},{},[10])(10)
});