export function divisors(n: number) :number{
    let lenDives: number = n === 1 ? 1 : 2; // 1, n
    for (let i = 2; i < n; i++){
        if (n % i === 0)
            lenDives += 1;
    }
    return lenDives;
}

export function divisors2(n: number) :number{
    return [...Array(n)].map((v, i) => ++i) // 1...n
        .reduce((previousVal: number, currentVal: number, currentIdx: number, array: number[]) => {
            // console.log(previousVal, currentVal, currentIdx);
            return previousVal + (n % currentVal === 0 ? 1 : 0);
    }, 0);
}
