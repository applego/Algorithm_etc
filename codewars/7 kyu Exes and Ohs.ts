// xとoが同じ数か
export function xo(str: string): boolean {
  const cntx = (str.match(/x/ig) || []).length;
  const cnto = (str.match(/o/ig) || []).length;
  return cntx === cnto;
}
