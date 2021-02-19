// const EvenOrOdd = ['Even', 'Odd'] as const;
// type typeEvenOrOdd = typeof EvenOrOdd[number];

//* 参考） https:www.cyokodog.net/blog/typescript-enum-replacement/

const EvenOrOdd = {
  Even: 'Even',
  Odd: 'Odd',
} as const;
type EvenOrOdd = typeof EvenOrOdd[keyof typeof EvenOrOdd];

export function even_or_odd(n: number): EvenOrOdd {
  return n % 2 == 0 ? EvenOrOdd.Even : EvenOrOdd.Odd;
}
