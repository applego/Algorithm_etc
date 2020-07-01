var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    array = [...iterable];
    if (array.length === 0)
        return []
    ans = [array[0]];
    //console.log(ans);
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] === array[i])
            continue;
        ans.push(array[i]);
    }
    return ans;
}