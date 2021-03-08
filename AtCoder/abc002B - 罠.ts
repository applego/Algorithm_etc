export const answer = (input: string): string => {
  // const ans = input.replace(/a|i|u|e|o/g, ''); // yarn testはpass,AtcodeのサイトだとNG
  const ans = input.split('\n')[0].replace(/[aiueo]/g, ''); //splitが肝だった../[aiueo]/の方が↑より早い
  console.log(ans);
  return ans;
};

// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// answer(input);
