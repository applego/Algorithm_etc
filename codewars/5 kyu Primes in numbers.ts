export class G964 {

  public static primeFactors = (n:number) => {
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
}