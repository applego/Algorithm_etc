/**
消える魔球
V m/s
T s
S s
D m

T 秒後のボールの位置（ピッチャーからの距離）は V * T
S 秒後のボールの位置（ピッチャーからの距離）は V * S

 */
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, x]: string[] = input[0].split(' ');
const arr: string[] = input[1].split(' ');

const arrRemoveX = arr.filter((v) => v !== x);
console.log(arrRemoveX.join(' '));
