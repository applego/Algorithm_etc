using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    class B027カードゲームのシミュレーション
    {
        int H = 0;
        int W = 0;
        int N = 0;
        List<int> AnswerCardNum;
        public void Answer()
        {
            //var in1 = Console.ReadLine().Split(' ').Select(x=>int.Parse(x)).ToList();
            //var in2 = Console.ReadLine().Split(' ').Select(x=>int.Parse(x)).ToList();

            /*
2 2 2
1 2
2 1
4
1 1 2 1
1 1 1 2
1 1 2 2
1 2 2 1

2 5 3
5 8 8 6 3
3 6 3 3 5
8
1 4 2 2
1 3 2 1
2 4 2 3
1 3 1 5
2 5 1 1
2 1 1 2
1 5 2 1
1 2 1 3
             */
            var in1 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            H = in1[0];
            W = in1[1];
            N = in1[2];
            AnswerCardNum = new List<int>(new int[N]);

            int[,] arrayCardNum = new int[H, W];
            //初期配置カードの数を取得
            for (int h = 0; h < H; h++)
            {
                //★
                var inputCardNum = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                for (int w = 0; w < W; w++)
                {
                    arrayCardNum[h, w] = inputCardNum[w];
                }
            }

            int L = int.Parse(Console.ReadLine());
            List<List<int>> lstLs = new List<List<int>>();
            for (int i = 0; i < L; i++)
            {
                lstLs.Add(Console.ReadLine().Split(' ').Select(x=>int.Parse(x)-1).ToList());
            }

            int N_i = 0;
            for (int i = 0; i < L; i++)
            {
                var val1 = arrayCardNum[lstLs[i][0], lstLs[i][1]];
                var val2 = arrayCardNum[lstLs[i][2], lstLs[i][3]];
                if (val1 != val2)
                {
                    //違う数字のとき
                    N_i = ChangeTurn(N_i);
                    
                }
                else
                {
                    //同じ数字のとき
                    //arrayCardNum[lstLs[i][0], lstLs[i][1]] = -1;
                    //arrayCardNum[lstLs[i][2], lstLs[i][3]] = -1;
                    AnswerCardNum[N_i] += 2;
                }
            }
            AnswerCardNum.ForEach(item => {
                Console.WriteLine(item);
            });
            //Console.WriteLine("Hello test!");
        }

        private int ChangeTurn(int n)
        {
            if (n == N-1)
            {
                return 0;
            }
            else
            {
                return n + 1;
            }
        }
    }
}
