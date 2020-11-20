using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D050
    {
        public static int okasi(int n)
        {
            if(n > 5)
            {
                return 5;
            }
            else
            {
                return n;
            }
        }
        public void Do()
        {
            string[] nums = Console.ReadLine().Split(' ');
            int n1 = int.Parse(nums[0]);
            int n2 = int.Parse(nums[1]);

            Console.WriteLine(okasi(n1) + okasi(n2));

        }
    }
}
