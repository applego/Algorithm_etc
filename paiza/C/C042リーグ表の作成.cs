using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class C042
    {
        public void Do()
        {
            int N = int.Parse(Console.ReadLine());
            int I = N * (N - 1) / 2;
            string[,] arrayresult;
            arrayresult = new string[N+1, N+1];

            for (int i = 0; i<I;i++)
            {
                string[] row1 = Console.ReadLine().Split(' ');
                //if (row1[0] == "") { break; }
                int n1 = int.Parse(row1[0]);
                int n2 = int.Parse(row1[1]);

                
                arrayresult[n1, n2] = "W";
                arrayresult[n2, n1] = "L";
            }

            for(int i = 1; i <= N; i++)
            {
                for(int j = i; j<= N; j++)
                {
                    if (arrayresult[i, j] == null)
                        arrayresult[i, j] = "-";
                }
            }

            for (int i = 1; i <= N; i++)
            {
                string result = "";
                for (int j = 1; j <= N; j++)
                {
                    if(!(j == N)) { result += arrayresult[i, j].ToString() + " "; }
                    else { result += arrayresult[i, j].ToString(); }
                }
                Console.WriteLine(result);
            }
        }
    }
}

//入力
//N
//f_1 s_1
//f_2 s_2
//...
//f_M s_M

//    出力
//    r_
//{1,1}
//r_{1,2} ... r_{1,N}
//r_{2,1} r_{2,2} ... r_{2,N}
//...
//r_{N,1} r_{N,2} ... r_{N,N}

//入力例1
//3
//1 3
//2 1
//2 3
//出力例1
//- L W
//W - W
//L L -