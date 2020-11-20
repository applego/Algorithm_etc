using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.B
{
    /*
     * あなたは、並木道の木に電飾を施す仕事をしています。しかし、予算に限りがあるため使える電球の数に限りがあります。
全ての木に均等に電球を割り振るのは面白くないと考えたあなたは、木によって備え付ける電球の数を変えました。電球の数が少なく歩行が危険な区間があると困るので、ある木から別の木までの間に電球がいくつ備え付けられているか調査することにしました。

調査の結果、区間の木の電球の平均個数が、安全基準 M を満たしていない場合は、平均個数が安全基準を満たすように、その区間の木に均等に電球を追加します。ただし、追加する電球は安全の基準を満たすために必要最小限の個数に止めるようにします。また、安全の基準はその区間に備え付けられている電球の数の平均がいくつ以上という形で与えられます。

並木道の木の数、それぞれの木に備え付けられている電球の数および Q 個の電球の数を調べたい区間が与えられるので、全ての区間を調査して必要な電球を備え付けた後の並木道の状態を出力するプログラムを作成してください。ただし、調査および電球の追加は与えられた区間の順番に行うものとします。

入力例 1 では、以下のようになります。

        入力例1
5 6
4 3 6 1 3
3
1 3
1 5
2 3

     */
    class B073イルミネーションの調査
	{
		public static void Answer()
		{
            var i1 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int N = i1[0];
            int M = i1[1];

            List<int> trees = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int Q = int.Parse(Console.ReadLine());

            int[] s = new int[trees.Count+1];
            s[0] = 0;
            for(int i = 0; i < trees.Count; i++)
            {
                s[i + 1] = s[i] + trees[i];
            }

            for (int i=0;i<Q;i++)
            {
                var kukan = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                //区間の合計
                int kukan_right = kukan[1];
                int kukan_left = kukan[0]-1;
                var kukan_sum = s[kukan_right] - s[kukan_left];

                //区間の平均
                var kukan_n = kukan_right - kukan_left;
                var kukan_ave = (double)kukan_sum / kukan_n;
                if (kukan_ave < M)
                {
                    //基準以下
                    //この区間で必要な総数
                    var tmpNeeds = M * kukan_n;
                    var lack_n = tmpNeeds - kukan_sum;
                    var tmp_add = (double)lack_n / kukan_n;
                    var add_n = (int)Math.Ceiling(tmp_add);
                    for(int j = kukan_left; j < kukan_right; j++)
                    {
                        trees[j] += add_n;
                    }
                    s = new int[trees.Count + 1];
                    s[0] = 0;
                    for (int k = 0; k < trees.Count; k++)
                    {
                        s[k + 1] = s[k] + trees[k];
                    }
                }

            }
            //for(int i=0;i<n;i++){

            //}
            var ans = string.Join(" ",trees);
            Console.WriteLine(ans);
		}
	}
}
