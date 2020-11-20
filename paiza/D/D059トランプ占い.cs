using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D059
    {
        public void Do()
        {
            string[] str = Console.ReadLine().Split(' ');

            if(str[0] == "J" & str[1]== "J")
            {
                Console.WriteLine("J Q");
            }
            else
            {
                Console.WriteLine(str[0] + " " + str[1]);
            }

        }
    }
}

//入力例1
//K Q
//出力例1
//K Q
//入力例2
//J J
//出力例2
//J Q