using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D046
    {
        public void Do()
        {
            string[] str = Console.ReadLine().Split(' ');

            List<int> lsteggs = new List<int>();
            for(int i = 0; i < str.Length; i++)
            {
                lsteggs.Add(int.Parse(str[i]));
            }

            int max = lsteggs.Max();
            Console.WriteLine(max);
        }
    }
}
