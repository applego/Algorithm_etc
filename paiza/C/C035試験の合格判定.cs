using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class C035
    {
        public void Do()
        {
            int N = int.Parse(Console.ReadLine());
            int lstPass = 0;


            for (int i = 0; i < N; i++)
            {
                string[] inp1 = Console.ReadLine().Split(' ');
                string BunRi = inp1[0];
                int sumPoint = 0;
                for (int j = 1; j <= 5; j++)
                {
                    sumPoint += int.Parse(inp1[j]);
                }
                if (sumPoint >= 350)
                {
                    if (BunRi == "s")
                    {
                        int sumRikei = int.Parse(inp1[2]) + int.Parse(inp1[3]);
                        if (sumRikei >= 160)
                            lstPass += 1;
                    }
                    else /*if (BunRi == "l")*/
                    {
                        int sumBunkei = int.Parse(inp1[4]) + int.Parse(inp1[5]);
                        if (sumBunkei >= 160)
                            lstPass += 1;
                    }
                }
            }
            Console.WriteLine(lstPass);

        }
    }
}


////5
//s 70 78 82 57 74
//l 68 81 81 60 78
//s 63 76 55 80 75
//s 90 100 96 10 10
//l 88 78 81 97 93

//全科目の合計得点が 350 点以上
//理系の受験者の場合は理系 2 科目(数学、理科) の合計得点が 160 点以上
//文系の受験者の場合は文系 2 科目(国語、地理歴史) の合計得点が 160 点以上