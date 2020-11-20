using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.B
{
    /*
あなたの手元には N × N ピクセルのグレースケール画像があります。 各ピクセルの画素値は 0 から 255 までの整数で指定されています。

あなたは上司から、この画像を縦横それぞれ K 分の 1 (K は N の約数) の大きさに縮小してほしいと頼まれました。 縮小の手順を正確に述べると、次のようになります。

1. 元の画像を K × K ピクセルのブロックに区切る。その結果、N/K × N/K 個のブロックができる。(図左)
2. 各ブロックに対して、ブロックに含まれるピクセルの画素値の平均値 (小数点以下切り捨て) を計算する。(図中央)
3. 各ブロックを新しい一つのピクセルと見なし、N/K × N/K ピクセルの画像を作る。
　ここで、新しいピクセルの画素値は 2. で計算した平均値とする。(図右)

        入力例1
6 3
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
4 5 6 1 2 3
4 5 6 1 2 3
4 5 6 1 2 3

     */
    class B019グレースケール画像の縮小
    {
        class Point
        {
            public int X { get; set; }
            public int Y { get; set; }
            public int Val { get; set; }
            public Point(int x,int y,int val)
            {
                this.X = x;
                this.Y = y;
                this.Val = val;
            }
        }

        class Shukushouer
        {
            public int K { get; set; }
            List<Point> beforePoints { get; set; }
            List<Point> afterPoints { get; set; }
            public Shukushouer(List<Point> points,int k)
            {
                this.beforePoints = points;
                this.K = k;
                this.afterPoints = new List<Point>();
            }
            public void ExecShukushou_SetAfter()
            {
                foreach(var p in beforePoints)
                {
                    
                }
            }
        }

		public static void Answer()
		{
            var i1 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int N = i1[0];
            int K = i1[1];

            int N_K = N / K;

            int[,] array2D = new int[N_K, N_K];
            List<Dictionary<(int, int), int>> diclist = new List<Dictionary<(int, int), int>>();
            for (int i = 0; i < N; i++)
            {
                var row = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                for (int j = 0; j < N; j++)
                {
                    Dictionary<(int, int), int> dic = new Dictionary<(int, int), int>();
                    dic[(j, i)] = row[j];
                    diclist.Add(dic);
                }
            }

            List<List<int>> list_ans = new List<List<int>>(N_K*N_K);

            int index_x = 0;
            int index_y = 0;
            int index_ans = 0;
            diclist.ForEach(a =>
            {
                int index = 0;
                while (index < N_K)
                {
                    if (index_x < N_K)
                    {
                        list_ans[index_ans].Add(a[(index_x, index_y)]);
                        index_x++;
                    }
                    index_ans++;
                    index++;
                }
            });

            int counter = 0;
            //List<Dictionary<(int, int), double>> diclist_ans = new List<Dictionary<(int, int), double>>();
            for (int i = 0; i < N_K; i++)
            {
                for (int j = 0; j < N_K; j++)
                {


                }
            }
            List<int> anslist = new List<int>();

            //for(int i=0;i<n;i++){

            //}
            //var ans = string.Join(" ",);
            Console.WriteLine("");
		}
	}
}
