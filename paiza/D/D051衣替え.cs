using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D051
    {
        public void Do()
        {
            string[] hukutati = Console.ReadLine().Split(' ');

            int W = 0;
            int S = 0;
            foreach (string s in hukutati)
            {
                if (s == "S")
                    S++;

                if (s == "W")
                    W++;
                
            }
            if(W >= 5)
            {
                Console.WriteLine("OK");
            }
            else
            {
                Console.WriteLine("NG");
            }

        }
    }
}
