using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D063
    {
        public void Do()
        {
            string str = "300";
            //string str = Console.ReadLine();
            char c = str[0];
            Console.WriteLine(c);
            if(c == '2')
            {
                Console.WriteLine("ok");
            }
            else if(c == '4')
            {
                Console.WriteLine("error");
            }
            else
            {
                Console.WriteLine("unknown");
            }
        }
    }
}

