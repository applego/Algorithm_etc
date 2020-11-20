using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D061
    {
        public void Do()
        {
            int c = int.Parse(Console.ReadLine());

            if (c == 0)
            {
                Console.WriteLine(1);
            }
            else
            {
                Console.WriteLine(c * 3);
            }
        }
    }
}

//入力例1
//2 3 5
//出力例1
//AB
//CDE
//FGHIJ
