
/**
 *
 s = "abcd\nefgh\nijkl\nmnop"
oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"

// *
abcd
efgh
ijkl
mnop

aeim
bfjn
cgko
dhlp

0からnまで列をとっていく
配列（\n)区切りの前から

// *
miea
njfb
...
0からnまで列をとっていく
配列（\n)区切りの後ろから

//*
abcd|aeim
efgh|bfjn

もとの文字列からの配列と１つ目の関数の結果からできる配列
組み合わせる

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)

diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)

rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) It is initial string + string obtained by symmetry with respect to the main diagonal.
s = "abcd\nefgh\nijkl\nmnop" -->
"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
or printed for the last:

selfie_and_diag1
abcd|aeim
efgh|bfjn
ijkl|cgko
mnop|dhlp


 */

/**
 *
 */
export function rot90Clock(strng: string): string {
  const arrRev = strng.split('\n').reverse();

  let arrResult: string[] = [];
  for (let i = 0; i < arrRev.length; i++){
    const elnew = arrRev.map(el => {
      return el[i];
    }).join("");
    arrResult.push(elnew);
  }
  return arrResult.join('\n');
}

export function diag1Sym(strng: string): string {
  const arr = strng.split('\n');
  // const lenEle = arr[0].length;
  // const lenArr = arr.length;
  // if (lenEle !== lenArr) throw new Error("not match");

  let arrResult: string[] = [];
  for (let i = 0; i < arr.length; i++){
    const elnew = arr.map(el => {
      return el[i];
    }).join("");
    arrResult.push(elnew);
  }
  return arrResult.join('\n');
}

export function selfieAndDiag1(strng: string): string {
  const arrSelf = strng.split('\n');
  const arrDiag = diag1Sym(strng).split('\n');
  let arrResult: string[] = [];
  for (let i = 0; i < arrSelf.length; i++){
    const elnew = `${arrSelf[i]}|${arrDiag[i]}`;
    arrResult.push(elnew);
  }
  return arrResult.join('\n');
}

export function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
}


// for submit
export function rot90Clock____(strng: string): string {
  return  strng.split('\n')
      .reverse()
      .map((v, i, arr) => {
        return arr.map(el => el[i]).join('');
      }).join('\n');
}

export function diag1Sym____(strng: string): string {

  return strng.split('\n')
    .map((v, i, arr) => {
      return arr.map(el => el[i]).join('');
    }).join('\n');
}

export function selfieAndDiag1____(strng: string): string {
  const arrSelf = strng.split('\n');
  const arrDiag = diag1Sym(strng).split('\n');
  let arrResult: string[] = [];
  for (let i = 0; i < arrSelf.length; i++){
    const elnew = `${arrSelf[i]}|${arrDiag[i]}`;
    arrResult.push(elnew);
  }
  return arrResult.join('\n');
}

export function oper____(fct: (s: string) => string, s: string): string {
  return fct(s);
}
