export function reversedWords(str: string): string {
  const reversedWords: string = str.split(' ')
    .reverse()
    .join(' ');
  console.log(reversedWords);
  return reversedWords;
}
