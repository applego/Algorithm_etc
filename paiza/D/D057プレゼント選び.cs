using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D057
    {
        public static void Do()
        {
            int n = int.Parse(Console.ReadLine());

            string[] str = Console.ReadLine().Split(' ');
            if (n == 1)
            {
                Console.WriteLine(str[0]);
            }
            else if (n == 2)
            {
                Console.WriteLine(str[1]);

            }
            else if (n == 3)
            {
                Console.WriteLine(str[2]);

            }

        }
    }
}

//入力例1
//3
//cartoy plamodel gameconsole
//出力例1
//gameconsole