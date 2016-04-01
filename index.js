var toCss = require('to-css');
var insertStyles = require('insert-styles');

module.exports = function (styles) {
  insertStyles(toCss(styles));
};
