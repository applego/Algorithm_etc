'use strict';

const performance = require('perf_hooks').performance;

export default class TimeMeasure{
  public static measure(name: string, func:(any)) {
    const start = performance.now();
    func();
    const end = performance.now();

    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`${name}: ${elapsedStr}`);
  }
}

// module.exports = TimeMeasure
