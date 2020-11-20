using System;
using System.Text;

namespace paiza3
{
    class D007
    {
        static void Do(string[] args)
        {
            //Console.Write("正の整数を入力--------");
            int N = int.Parse(Console.ReadLine());

            StringBuilder sb = new StringBuilder();

            for (int i = 1; i <= N; i++)
            {
                sb.Append("*");
            }

            Console.WriteLine(sb);
        }
    }
}
