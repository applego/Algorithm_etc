function descendingOrder(n) {
    //...
    strArray = [...String(n)];
    intArray = [];
    for (let i = 0; i < strArray.length; i++) {
        intArray.push(parseInt(strArray[i]));
    }
    intArray.sort(function (a, b) {
        return b - a;
    });
    ans = '';
    for (let i = 0; i < intArray.length; i++) {
        ans += String(intArray[i]);
    }
    return parseInt(ans);
}