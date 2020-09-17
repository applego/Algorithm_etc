export function sakuraFall(v: number): number {
    if (v <= 0)
        return 0;
    const distance_cm: number = 5 * 80;
    console.info(distance_cm / v);
    return distance_cm / v;
}

// sakuraFall(5);
// sakuraFall(10);
// sakuraFall(-1);
// sakuraFall(0);

// console.log("sakuraFall");

// 引数・戻り値に型を定義する(省略しても可)
export function f(x: number): string {
    return x.toLocaleString() + '円';
}

// 省略可能な引数は?を使う
export function f2(x: number, y: string = '円'): string {
    return x.toLocaleString() + y;
}