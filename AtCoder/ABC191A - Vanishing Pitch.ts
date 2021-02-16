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

const [v, t, s, d]: number[] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

if (v * t <= d && d <= v * s) {
  console.log('No');
} else {
  console.log('Yes');
}
