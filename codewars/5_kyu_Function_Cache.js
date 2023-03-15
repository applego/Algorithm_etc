function cache(func) {
  let calls = {};
  return function () {
    let key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}


// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
    let complexFunction = function (arg1, arg2) {
      if (arg1 < arg2)
        return arg2;
      else
        return arg1;
    };
    let cachedFunction = cache(complexFunction);
    let ans1 = cachedFunction('foo', 'bar');
    let ans2 = cachedFunction('foo', 'bar');
    let ans3 = cachedFunction('foo', 'baz');
    assert.strictEqual(ans1, ans2);
    assert.notEqual(ans1, ans3);
  });
});
