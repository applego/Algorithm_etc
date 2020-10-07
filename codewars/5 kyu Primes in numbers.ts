export class G964 {

  public static primeFactors_ = (n:number) => {
      var i = 2, count, output = '';
      while(n > 1) {
        count = 0;
        while(n % i == 0) {
          count++;
          n /= i;
        }
        switch(count) {
          case 0 : output += ""; break;
          case 1 : output += "(" +i + ")"; break;
          default : output += "(" +i + "**" +count + ")";
        }
        i++;
      }
    return output;
  }
  public static primeFactors = (n:number) => {
    let i = 2, count, output = '';
    while (n > 1) {
      count = 0;
      while (n % i == 0) {
        count++;
        n /= i;
      }
      switch (count) {
        case 0: /*output += "";*/ break;
        case 1: output += `(${i})`; break;
        default: output +=`(${i}**${count})`; break;
      }
      i++;
    }
    return output;
  }
}
//本問とは関係なし
//https://zenn.dev/uhyo/articles/readable-code
//enum は古い機能リテラル型、ユニオン型
type SizeString = "small" | "medium" | "large";
function getFontSize(size: SizeString): number {
  if (size === "small") {
      return 10;
  } else if (size === "medium") {
      return 16;
  } else  {
      return 24;
  }
}