using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D052
    {
        public void Do()
        {
            int n = int.Parse(Console.ReadLine());

            int i = 0;
            int result = 0;
            while (true)
            {
                i++;
                result += i;

                if (i == n)
                    break;
            }
            Console.WriteLine(result);
        }
    }
}
