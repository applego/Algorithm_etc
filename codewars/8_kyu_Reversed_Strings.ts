export function solution(str: string): string {
  return str  //[...`${str}`]
    .split('')
    .reverse()
    .join('');
}
