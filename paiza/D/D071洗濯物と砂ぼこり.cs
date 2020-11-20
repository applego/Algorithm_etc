using System;
using System.Text;

namespace paiza3
{
    class D071
    {
        public void Do()
        {
            string strinput = Console.ReadLine();

            string[] strsplits = strinput.Split(' ');
            int tem = int.Parse(strsplits[0]);
            int ho = int.Parse(strsplits[1]);

            if (tem < 25 && ho > 40)
            {
                Console.WriteLine("No");
            }
            else if (tem >= 25 && ho <= 40)
            {
                Console.WriteLine("No");
            }
            else
            {
                Console.WriteLine("Yes");
            }
        }
    }
}

//気温が 25 ℃以上の日、もしくは湿度が 40 % 以下の日は干します。それ以外の日は干しません。
//ただし、上記の干す条件を満たす日のうち、気温が 25 ℃以上かつ、湿度 40 % 以下の日は砂ぼこりが舞うので干しません。

//t m

