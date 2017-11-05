(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function (window) {
  'use strict';

  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxVQUFDLE1BQUQsRUFBWTtBQUNYOztBQUNBLE1BQUksZ0JBQWdCLDRCQUFwQjtBQUNBLE1BQUksTUFBTSxPQUFPLEdBQWpCO0FBQ0EsTUFBSSxRQUFRLElBQUksS0FBaEI7QUFDQSxNQUFJLFlBQVksSUFBSSxTQUFwQjtBQUNBLE1BQUksY0FBYyxJQUFJLFdBQXRCO0FBQ0EsTUFBSSxVQUFVLElBQUksS0FBSixDQUFVLFVBQVYsRUFBc0IsSUFBSSxTQUFKLEVBQXRCLENBQWQ7QUFDQSxTQUFPLE9BQVAsR0FBaUIsT0FBakI7QUFDQSxNQUFJLGNBQWMsSUFBSSxXQUFKLENBQWdCLGFBQWhCLENBQWxCO0FBQ0EsY0FBWSxnQkFBWixDQUE2QixRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsT0FBekIsQ0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxXQUFaO0FBRUQsQ0FiRCxFQWFHLE1BYkgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKCh3aW5kb3cpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBsZXQgRk9STV9TRUxFQ1RPUiA9ICdbZGF0YS1jb2ZmZWUtb3JkZXI9XCJmb3JtXCJdJztcbiAgbGV0IEFwcCA9IHdpbmRvdy5BcHA7XG4gIGxldCBUcnVjayA9IEFwcC5UcnVjaztcbiAgbGV0IERhdGFTdG9yZSA9IEFwcC5EYXRhU3RvcmU7XG4gIGxldCBGb3JtSGFuZGxlciA9IEFwcC5Gb3JtSGFuZGxlcjtcbiAgbGV0IG15VHJ1Y2sgPSBuZXcgVHJ1Y2soJ25jYy0xNzAxJywgbmV3IERhdGFTdG9yZSgpKTtcbiAgd2luZG93Lm15VHJ1Y2sgPSBteVRydWNrO1xuICBsZXQgZm9ybUhhbmRsZXIgPSBuZXcgRm9ybUhhbmRsZXIoRk9STV9TRUxFQ1RPUik7XG4gIGZvcm1IYW5kbGVyLmFkZFN1Ym1pdEhhbmRsZXIobXlUcnVjay5jcmVhdGVPcmRlci5iaW5kKG15VHJ1Y2spKTtcbiAgY29uc29sZS5sb2coZm9ybUhhbmRsZXIpO1xuXG59KSh3aW5kb3cpO1xuIl19
