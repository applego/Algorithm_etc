// import { reverse } from "dns";

/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function _reverse(str: string): string{
  return str.split('').reverse().join('');
}
export function reverseWords(str: string): string {
  return str.split(' ').map(word => _reverse(word)).join(' ');
}

//BP 別メソッド作ってないだけでやってることは同じかな
export function reverseWords_(str: string): string {
  return str
    .split(' ')
    .map(word => word
      .split('')
      .reverse()
      .join('')
    )
    .join();
}
