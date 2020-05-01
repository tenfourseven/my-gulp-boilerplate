(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const sayHi = require('./test');
const add = require('./test2');

console.log('Hi from app.js');
sayHi();
add(9, 3);
},{"./test":2,"./test2":3}],2:[function(require,module,exports){
function sayHi(){
  console.log('Hi from test.js again');
}

module.exports = sayHi;

},{}],3:[function(require,module,exports){
const add = (a, b) => { 
  let result = a + b;
  console.log(result);
};


module.exports = add;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL2FwcC5qcyIsInNyYy9hcHAvdGVzdC5qcyIsInNyYy9hcHAvdGVzdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3Qgc2F5SGkgPSByZXF1aXJlKCcuL3Rlc3QnKTtcclxuY29uc3QgYWRkID0gcmVxdWlyZSgnLi90ZXN0MicpO1xyXG5cclxuY29uc29sZS5sb2coJ0hpIGZyb20gYXBwLmpzJyk7XHJcbnNheUhpKCk7XHJcbmFkZCg5LCAzKTsiLCJmdW5jdGlvbiBzYXlIaSgpe1xyXG4gIGNvbnNvbGUubG9nKCdIaSBmcm9tIHRlc3QuanMgYWdhaW4nKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzYXlIaTtcclxuIiwiY29uc3QgYWRkID0gKGEsIGIpID0+IHsgXHJcbiAgbGV0IHJlc3VsdCA9IGEgKyBiO1xyXG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhZGQ7Il19
