using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D060
    {
        public void Do()
        {
            string str = Console.ReadLine();
            string[] strs = str.Split(' ');

            int a = int.Parse(strs[0]);
            int b = int.Parse(strs[1]);

            Console.WriteLine(a - b);
        }
    }
}
