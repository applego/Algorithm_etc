
export function iqTest(numbers: string): number {
  const numbers2: number[] = numbers.split(' ').map(n => parseInt(n));
  // console.log(numbers2.findIndex(v => { v % 2 === 0; }));//!v=>{}があると見つからない（ヒットしない）なぜ？
  const cnt_even = numbers2
    .filter(n => n % 2 === 0)
    .length;
  if (cnt_even === 1) {
    return numbers2.findIndex(val => val % 2 === 0)+1;
  } else {
    return numbers2.findIndex(val => val % 2 !== 0)+1;
  }
}

//天才　BP
export function iqTest_(numbers: string): number {
  let evenness: number[] = numbers.split(' ').map(x=>Number(x)%2);
  return evenness.reduce((a,b)=>a+b) == 1 ? evenness.indexOf(1)+1 : evenness.indexOf(0)+1;
}
//天才　BP2
export function iqTest__(numbers: string): number {
  const isEven : Array<boolean> = numbers.split(" ").map(v => parseInt(v) % 2 === 0);
  const oddsCount : number = isEven.filter(v => v === true).length;
  const evensCount : number = isEven.filter(v => v === false).length;
  return isEven.indexOf(oddsCount < evensCount) + 1;
}

export function iqTest_not(numbers: string): number {
  console.log(numbers);
  let evens: number[] = [];
  let odds: number[] = [];
  const is_even = function (n: number): boolean{
    return n % 2 == 0 ? true : false;
  }
  //is_found == true &&
  let is_found = false;
  let is_ret_is_even = false;
  for (let str_n in numbers.split(' ')) {
    console.log('---------');
    console.log(str_n);
    console.log(evens);
    console.log(odds);
    const n = parseInt(str_n);
    if (is_found === true) {
      if (is_ret_is_even === true && evens.length > 0)
        return evens[0];
      if (is_ret_is_even === false && odds.length > 0)
        return odds[0];
    }
    if (is_even(n)) {
      if (is_found && is_ret_is_even) {
        return n;
      }
      if (evens.length > 0) {
        is_found = true;
        is_ret_is_even = false;
        if (odds.length > 0) {
          return odds[0];
        }
      }
      evens.push(n);
    } else {
      if (is_found && !is_ret_is_even) {
        return n;
      }
      if (odds.length > 0) {
        is_found = true;
        is_ret_is_even = true;
        if (evens.length > 0) {
          return evens[0];
        }
      }
      odds.push(n);
    }
  }
  return 0;
}

// enum AnimalType {Notdecided,Decided};
export default class IqTest{
  private evens: number[];
  private odds: number[];
  private _is_found: boolean = false;
  private _is_returnval_is_even:boolean = false;
  constructor(public targetnum: number) {
    this.evens = [];
    this.odds = [];
  }
  private isEven(num: number): boolean{
    return num % 2 == 0 ? true : false;
  }
  private push_even(num: number): void{
    this.evens.push(num);
  }
  private push_odd(num: number): void{
    this.odds.push(num);
  }
  set is_found(is_found: boolean) {
    this._is_found = is_found;
  }
  set is_returnval_is_even(is_even: boolean) {
    this._is_returnval_is_even=is_even;
  }
  get is_found(): boolean {
    return this._is_found;
  }
  get is_returnval_is_even(): boolean {
    return this._is_returnval_is_even;
  }

  public iqTest(numbers: string): number|undefined{
    for (let strnum in numbers.split(' ')) {
      if (this.is_found) {
        if (this.is_returnval_is_even) {

        }
      }
      const num = parseInt(strnum);
      if (this.isEven(num)) {
        if (this.evens.length >= this.targetnum) {
          this.is_found = true;
          if (this.odds[this.targetnum - 1]) {
            return this.odds[this.targetnum - 1];
          } else {
            continue;
          }
        }
        else
          this.push_even(num);
      } else {
        if (this.odds.length >= this.targetnum) {
          console.log(this.evens[this.targetnum-1])
          return this.evens[this.targetnum-1];
        }
        else
          this.push_odd(num);
      }
    }
  }
}