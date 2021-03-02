/*
using System;
using System.Linq;

class G
{
	static void Main()
	{
		var n = int.Parse(Console.ReadLine());
		var a = new int[n - 1].Select(_ => Console.ReadLine().Split().Select(int.Parse).ToArray()).ToArray();

		var M = int.MinValue;
		Perm(new int[n], 0, g =>
		{
			var r = 0;
			for (int i = 0; i < n; i++)
				for (int j = i + 1; j < n; j++)
					if (g[i] == g[j]) r += a[i][j - i - 1];
			M = Math.Max(M, r);
		});
		Console.WriteLine(M);
	}

	static void Perm(int[] g, int i, Action<int[]> action)
	{
		for (int x = 0; x < 3; x++)
		{
			g[i] = x;
			if (i == g.Length - 1) action(g);
			else Perm(g, i + 1, action);
		}
	}
}
*/
export class G {
  static main(input: string): number {
    const inputArr = input.split('\n');
    const n = Number(inputArr.shift());
    let a = inputArr.map((_) => _.split(' ').map(Number));
    // console.log(a);

    let m = Number.MIN_SAFE_INTEGER;
    G.perm(Array(n), 0, (g) => {
      let r = 0;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (g[i] === g[j]) r += a[i][j - i - 1];
        }
      }
      m = Math.max(m, r);
    });
    console.log(m);
    return m;
  }
  static perm(g: Array<number>, i: number, action: (g: Array<number>) => void) {
    for (let x: number = 0; x < 3; x++) {
      g[i] = x;
      if (i === g.length - 1) action(g);
      else this.perm(g, i + 1, action);
    }
  }
}

// * 提出用
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// G.Main(input);
