using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    /*
     入力例1
3
6 1 8
7 5 3
2 0 0
出力例1
6 1 8
7 5 3
2 9 4
         */
    class B051汚れてしまった魔方陣
    {
        public void Answer()
        {
            /*
            for(int i = 0; i < K; i++)
            {
                var input = int.Parse(Console.ReadLine());
                var otherlist = lists
                    .Select((v, index) => new { Value = v, Index = index })
                    .Where(item => item.Index != input - 1&&item.Value>0);
                lists[input - 1] += otherlist.Count();
                var otherindexlist = otherlist.Select(item => item.Index);
                otherindexlist.ToList().ForEach(x =>
                {
                    lists[x]--;
                });
            }
             */
            var N = int.Parse(Console.ReadLine());
            List<List<int>> mahoujin = new List<List<int>>();
            List<int> use_num = new List<int>();
            List<List<int>> zero_list=new List<List<int>>();

            for (int i = 1; i <= Math.Pow(N, 2); i++)
            {
                use_num.Add(i);
            }

            int sum_c = 0;
            for (int i = 0; i < N; i++)
            {
                var row_ = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                if (!row_.Contains(0)&& row_.Sum() > sum_c)
                {
                    sum_c = row_.Sum();
                }
                mahoujin.Add(row_);
                int index = 0;
                row_.ForEach(item =>
                {
                    use_num.Remove(item);
                    if (item == 0)
                    {
                        zero_list.Add(new List<int> { i, index });
                    }
                    index++;
                });
            }
            //列
            List<List<int>> collist = new List<List<int>>();
            for(int i = 0; i < N; i++)
            {
                List<int> col = new List<int>();
                for(int j = 0; j < N; j++)
                {
                    col.Add(mahoujin[j][i]);
                }
                collist.Add(col);
                var tmpsum_col = col.Sum();
                if(!col.Contains(0)&& tmpsum_col > sum_c)
                {
                    sum_c = tmpsum_col;
                }
            }
            bool isContinue = true;
            while (true)
            {
                for(int r=0;r<N;r++)
                {
                    if (mahoujin[r].Contains(0))
                    {
                        if (mahoujin[r].Where(a => a == 0).Count() == 1)
                        {
                            var sum_r = mahoujin[r].Sum();
                            for(int c = 0; c < N; c++)
                            {
                                if(mahoujin[r][c] == 0)
                                {
                                    mahoujin[r][c] = (sum_c - sum_r);
                                }
                            }
                        }
                    }
                }
                for (int c = 0; c < N; c++)
                {
                    if (collist[c].Contains(0))
                    {
                        if (collist[c].Where(a => a == 0).Count() == 1)
                        {
                            var sum_col = collist[c].Sum();
                            for (int r = 0; r < N; r++)
                            {
                                if (collist[c][r] == 0)
                                {
                                    mahoujin[r][c] = (sum_c - sum_col);
                                    use_num.Remove(sum_c - sum_col);
                                }
                            }
                        }
                    }
                }
                mahoujin.ForEach(ieie =>
                {
                    isContinue = false;
                    if (ieie.Contains(0))
                        isContinue = true;
                });
                if (!isContinue)
                    break;
            }
            mahoujin.ForEach(ieieie =>
            {
                Console.WriteLine(String.Join(" ", ieieie));
            });
            Console.ReadKey();
        }
        class Point
        {
            public int X { get; set; }
            public int Y { get; set; }
            public double Distance { get; set; }
            public Point(int x, int y)
            {
                X = x;
                Y = y;
            }
            public void CalcDistance()
            {
                this.Distance = Math.Sqrt(Math.Pow(this.X, 2) + Math.Pow(this.Y, 2));
            }

        }
    }
}
