

// type lowercaseCounter = {
//   counters: { alpha: string, cnt: number; }[];
// }
// type lowercaseCounter = {
//   cnts: Dictionary[];
// }

// interface lowercaseCounter{
//   [key: string]: number;
// }

type lowercaseCounter = {
  [key: string]: number;
};

// type comparison = '1' | '2' | '=';
enum enmComparison {
  one = 1,
  two = 2,
  equal = 3//'='
}
type mergedCounter = {
  alpha: string,
  biggerCnt: number,
  // comparison:comparison
  comparison: enmComparison
}

export class G964 {
  // private name: string;
  private counter: lowercaseCounter;
  private static range = (first: string, last: string): string[] => {
    const firstc = first.charCodeAt(0);
    const lastc = last.charCodeAt(0);
    let result: string[] = [];
    for (let i = firstc; i <= lastc; i++){
      result.push(String.fromCodePoint(i));
    }
    return result;
  }
  // private readonly CharCodeOfa = 'a'.charCodeAt(0);
  private static Alphabets = G964.range('a', 'z');
  private static initializeCounter = (): lowercaseCounter => {
    let counter: lowercaseCounter = {};
    G964.Alphabets.forEach((v) => {
      // const dic: lowercaseCounter = {};
      // dic[v] = 0;
      counter[v] = 0;
    });
    return counter;
  }

  constructor(private name: string,private str:string) {
    this.counter = G964.initializeCounter();
  }

  private count = (): void => {
    this.str.split('').forEach(c => {
      if (G964.Alphabets.includes(c)) {
        this.counter[c] += 1;
      }
    });
  }
  private static merge = (counters1: G964, counters2: G964): mergedCounter[] => {
    let mergedcounters: mergedCounter[] = [];
    G964.Alphabets.forEach(alpha => {
      const cnts1 = counters1.counter[alpha];
      const cnts2 = counters2.counter[alpha];
      let mergecounter: mergedCounter = { alpha: alpha, biggerCnt: 0, comparison: enmComparison.equal };
      if (cnts1 > cnts2) { mergecounter.biggerCnt = cnts1; mergecounter.comparison = enmComparison.one; }
      else if (cnts1 === cnts2) { mergecounter.biggerCnt = cnts1; mergecounter.comparison = enmComparison.equal; }
      else { mergecounter.biggerCnt = cnts2; mergecounter.comparison = enmComparison.two; }
      mergedcounters.push(mergecounter);
    });
    return mergedcounters;
  }

  private static sort = (mergedCounter: mergedCounter[]): mergedCounter[] => {
    mergedCounter.sort((s1: mergedCounter, s2: mergedCounter) => {
      if (s1.biggerCnt < s2.biggerCnt) return 1;
      else if (s1.biggerCnt > s2.biggerCnt) return -1;
      if (s1.comparison < s2.comparison) return -1;
      else if (s1.comparison > s2.comparison) return 1;
      if (s1.alpha > s2.alpha) return 1;
      else if (s1.alpha < s2.alpha) return -1;
      return 0;
    });
    return mergedCounter;
  }

  public static mix = (s1: string, s2: string): string => {
    let counterS1 = new G964('s1', s1);
    counterS1.count();
    let counterS2 = new G964('s2', s2);
    counterS2.count();

    let mergedCounter: mergedCounter[] = G964.merge(counterS1, counterS2);
    const sortedMergedCounter = G964.sort(mergedCounter);

    const result = sortedMergedCounter
        .filter(smc => smc.biggerCnt > 1)
        .map(smc => {
        const comparison = smc.comparison === enmComparison.equal ?
          '=' : smc.comparison.toString();
        const alpha = [...Array(smc.biggerCnt)].map(_ => smc.alpha).join('');
        return `${comparison}:${alpha}`;
      }).join('/');
    return result;
    }
}

/*
cntS1 =
{
  a:0,
  b:0,
  .
  .
  .
  y:0,
  z:0
 }
 s1 小文字のカウント

 s2 小文字のカウント

 a〜zまで比較
  - s1 > s2
  - s1 = s2
  - s1 < s2

  cntMerged = {
  'a':
    {
      which:'1',
      cnt:3
    },
  'b':
    {
      which:'=',
      cnt:2
    }
  }

cnt でソート
alphaでソート

`${which}:${Array(cnt).map(alpha).join()}`
.join('/')

*/


// * BP
type Occ = {[prop: string]: {source: string, occ: number}};

export class G964_BP {
  private static getOccurences = (s: string, sourceName: string): Occ => {
    return s.split('') // split in single chars
      .filter(c => /[a-z]/.test(c)) // is char lowercase letter?
      .reduce((acc, curr) => { // count the char occurences

        //! if(acc[curr] == null)
        //!   acc[curr] = {source: sourceName, occ: 1};
        //! else
        //!   acc[curr].occ++;

        return acc;
      }, {});
  }
  private static merge = (s1: Occ, s2: Occ): string => {
    for(let propname in s2) { // Add all elements from s2 to s1 if they are bigger or change source to '=' if they are equal
      if(s1[propname] == null || s1[propname].occ < s2[propname].occ)
        s1[propname] = s2[propname];
      else if(s1[propname].occ == s2[propname].occ)
        s1[propname].source = '=';
    }


    return Object.keys(s1)
      .map(letter => ({ letter, ...s1[letter] })) // object key/value pair to array of objects with key as value
      .filter(o => o.occ > 1) // filter out everything that is <= 1
      .map(o => `${o.source}:${o.letter.repeat(o.occ)}`) // To the final string form
      .sort((a, b) => { // Sort by length or lexographical order when same length

        if(a.length == b.length) {
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
        } else {
          return b.length - a.length;
        }

      }).join('/'); // make one string, joined by '/'
  }

  public static mix = (s1: string, s2: string): string => {
    return G964_BP.merge(G964_BP.getOccurences(s1, '1'), G964_BP.getOccurences(s2, '2'));
  }
}

// * BP 2
export class G964_2 {
  public static mix = (s1: string, s2: string):string =>
    'abcdefghijklmnopqrstuvwxyz'
      .split('')
      // .reduce((rs, ll) => [...rs, [s1, s2].map(s => s.replace(RegExp(`[^${ll}]`, 'g'), '')).reduce((s1, s2) => s1.length == s2.length ? '=:' + s1 : s1.length > s2.length ? '1:' + s1 : '2:' + s2)], [])
      // .filter(a => a.length >= 4)
      // .sort((a, b) => a.length != b.length
      //   ? b.length - a.length : a.charCodeAt(0) - b.charCodeAt(0))
      .join('/');
}
