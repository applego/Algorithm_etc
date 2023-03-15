function highAndLow(numbers) {
    // ...

    ary = numbers.split(' ').map(e => parseInt(e, 10));
    const aryMax = function (a, b) { return Math.max(a, b); }
    const aryMin = function (a, b) { return Math.min(a, b); }
    let max = ary.reduce(aryMax);
    let min = ary.reduce(aryMin);
    return max + " " + min;
}