const alph: { [name: string]: number } = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
};

// type availableLength = 3 | 4 | 5;
// const AvailableLength = {
//   3: 'three',
//   4: 'four',
//   5: 'five',
// } as const;
// type AvailableLength = typeof AvailableLength[keyof typeof AvailableLength];
// AvailableLength[3];

export function recover(str: string): string {
  //have fun ^.^
  let result = '';
  for (let i = 0; i < str.length; i++) {
    for (const digit of Object.keys(alph)) {
      const tmp = str.slice(i, i + digit.length);
      if ([...tmp].sort().join('') === [...digit].sort().join('')) {
        result += alph[digit];
        break;
      }
    }
  }
  return result || 'No digits found';
}
