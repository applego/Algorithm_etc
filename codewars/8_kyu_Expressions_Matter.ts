// const patterns = ['12brackets12add', '23brackets23add', 'nobrackets12add', 'nobrackets12mul'] as const;
// type Patterns = typeof patterns[number];

// export function expressionsMatter(a: number, b: number, c: number): number {
//   let max: number = -1;
//   for (const pattern of patterns) {

//   }

//   return max;
// }

/*
1.　全通り試して最大値
   1,2をかっこ
    → 1,2を足す（掛けるならかっこいらん）
    → 3が1ならたす、以外なら掛ける
   2,3をかっこ
    → 2,3を足す
    → 1が１なら足す、以外なら掛ける
   かっこしない
    - 1,2を掛ける
    - 1,2を足す

   1を足す場合は足したほうが大きくなる
   それ以外は掛けたほうが大きくなる


 2. 何かロジックがあるか
*/

// Stateパターンする
/**
 * Stateというよりはパターン..
 */
interface calcState {
  calc(a: number, b: number, c: number): number;
}

class addInBracketsMul implements calcState {
  public calc = (a: number, b: number, c: number): number => {
    return (a + b) * c;
  };
}

class addAll implements calcState {
  public calc = (a: number, b: number, c: number): number => {
    return a + b + c;
  };
}

class addMul implements calcState {
  public calc = (a: number, b: number, c: number): number => {
    return a + b * c;
  };
}

class mulAddInBrackets implements calcState {
  public calc = (a: number, b: number, c: number): number => {
    return a * (b + c);
  };
}

class mulAll implements calcState {
  public calc = (a: number, b: number, c: number): number => {
    return a * b * c;
  };
}

class Calculater {
  protected state: calcState;
  constructor(state: calcState) {
    this.state = state;
  }
  public setState = (state: calcState): void => {
    this.state = state;
  };
  public calc = (a: number, b: number, c: number): number => {
    return this.state.calc(a, b, c);
  };
}

// const states = [addInBracketsMul, addAll, addMul, mulAddInBrackets] as const;
// type states = typeof states[number];

class testAllState {
  constructor(private a: number, private b: number, private c: number) {}
  public getMax = (): number => {
    let max: number = Number.MIN_SAFE_INTEGER;
    const calculater = new Calculater(new addInBracketsMul());
    let val = calculater.calc(this.a, this.b, this.c);
    if (val > max) max = val;
    calculater.setState(new addAll());
    val = calculater.calc(this.a, this.b, this.c);
    if (val > max) max = val;
    calculater.setState(new addMul());
    val = calculater.calc(this.a, this.b, this.c);
    if (val > max) max = val;
    calculater.setState(new mulAddInBrackets());
    val = calculater.calc(this.a, this.b, this.c);
    if (val > max) max = val;
    calculater.setState(new mulAll());
    val = calculater.calc(this.a, this.b, this.c);
    if (val > max) max = val;

    return max;
  };
}

export function expressionsMatter(a: number, b: number, c: number): number {
  return new testAllState(a, b, c).getMax();
}
