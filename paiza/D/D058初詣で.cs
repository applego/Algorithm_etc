using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D058
    {
        public static string mymethod(int n,char c)
        {
            string result = "";
            for(int i = 0;i < n; i++)
            {
                result += c;
            }
            return result;
        }
        public void Do()
        {
            string[] str = Console.ReadLine().Split(' ');
            string result = "";
            result += mymethod(int.Parse(str[0]), 'A');
            result += mymethod(int.Parse(str[1]), 'B');
            result += mymethod(int.Parse(str[2]), 'A');

            Console.WriteLine(result);
        }
    }
}

//入力例2
//5 7 5
//出力例2
//AAAAABBBBBBBAAAAA 