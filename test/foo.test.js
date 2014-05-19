/* global describe, it */
var assert = require('power-assert');

var foo = require('../lib/foo');

describe("foo", function() {
  // should success
  it("should call bar", function() {
    var bar = foo.bar("hello");
    assert.ok(bar.name === "hello");
  });

  // should raise error
  it("should call baz", function(done) {
    var baz = foo.baz("world", 999);
    assert.ok(baz.name === "wolrd999");
  });

});