var toCss = require('to-css');
var test = require('tape');

test('load and compile all sheets', function (t) {
  testSheet('normalize');
  testSheet('minimal');

  function testSheet (name) {
    t.test(name, function (t) {
      t.doesNotThrow(grab(name), name + ' loads');
      t.doesNotThrow(compile(name), name + ' compiles');
      t.end();
    });
  }
});

function grab (style) {
  return function () {
    require('./' + style);
  };
}

function compile (style) {
  return function () {
    toCss(require('./' + style));
  };
}
