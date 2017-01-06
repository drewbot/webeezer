(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  console.log('Hello ' + _main2.default.owner);
  console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

  $('#copyright').append(_main2.default.getCopyright());
});

},{"./main.js":2}],2:[function(require,module,exports){
'use strict';

var mainObj = {
  owner: 'Drew Botka',
  copyright: new Date().getFullYear(),
  isTouchDevice: function isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  getCopyright: function getCopyright() {
    return '&copy; ' + this.copyright + ' ' + this.owner + '. All Rights Reserved.';
  }
};

module.exports = mainObj;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsRUFBRSxZQUFXO0FBQ1gsVUFBUSxHQUFSLFlBQXFCLGVBQVEsS0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFRLGFBQVIsS0FBMEIsY0FBMUIsR0FBMEMsU0FBdEQ7O0FBRUEsSUFBRSxZQUFGLEVBQWdCLE1BQWhCLENBQXVCLGVBQVEsWUFBUixFQUF2QjtBQUVELENBTkQ7Ozs7O0FDRkEsSUFBSSxVQUFVO0FBQ1osU0FBTyxZQURLO0FBRVosYUFBVyxJQUFJLElBQUosR0FBVyxXQUFYLEVBRkM7QUFHWixlQUhZLDJCQUdJO0FBQ2QsV0FBTyxDQUFDLEVBQUUsa0JBQWtCLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQyxFQUFFLHNCQUFzQixPQUFPLFNBQS9CLENBQXhDO0FBQ0QsR0FMVztBQU1aLGNBTlksMEJBTUc7QUFDYix1QkFBaUIsS0FBSyxTQUF0QixTQUFtQyxLQUFLLEtBQXhDO0FBQ0Q7QUFSVyxDQUFkOztBQVdBLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgbWFpbk9iaiBmcm9tICcuL21haW4uanMnO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhgSGVsbG8gJHttYWluT2JqLm93bmVyfWApO1xuICBjb25zb2xlLmxvZyhtYWluT2JqLmlzVG91Y2hEZXZpY2UoKSA/ICdUb3VjaCBEZXZpY2UnOiAnRGVza3RvcCcpO1xuXG4gICQoJyNjb3B5cmlnaHQnKS5hcHBlbmQobWFpbk9iai5nZXRDb3B5cmlnaHQoKSk7XG5cbn0pO1xuIiwidmFyIG1haW5PYmogPSB7XG4gIG93bmVyOiAnRHJldyBCb3RrYScsXG4gIGNvcHlyaWdodDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICBpc1RvdWNoRGV2aWNlKCkge1xuICAgIHJldHVybiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8ICEhKCdtc21heHRvdWNocG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yKTtcbiAgfSxcbiAgZ2V0Q29weXJpZ2h0KCkge1xuICAgIHJldHVybiBgJmNvcHk7ICR7dGhpcy5jb3B5cmlnaHR9ICR7dGhpcy5vd25lcn0uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuYFxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5PYmo7XG4iXX0=