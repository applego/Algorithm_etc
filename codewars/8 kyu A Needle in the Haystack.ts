export function findNeedle(haystack: any[]): string {
  const strBase = 'found the needle at position ';
  const needleIdx = haystack.findIndex((v) => v === 'needle');
  return strBase + needleIdx;
}
