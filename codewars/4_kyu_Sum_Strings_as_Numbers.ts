export function sumStrings(a: string, b: string): string {
  // const nSum = Number(a) + Number(b);
  const nSum = BigInt(Number(a)) + BigInt(Number(b));
  return nSum.toString();
}

// JSしかないため.jsに移動
