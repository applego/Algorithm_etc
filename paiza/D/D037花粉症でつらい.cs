using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D037花粉症でつらい
	{
        public void Do()
        {
			double n = int.Parse(Console.ReadLine());
			double m = int.Parse(Console.ReadLine());

			double a = Math.Truncate(m / n);
			double shousuu = (m / n) % 1;
			if (shousuu > 0)
			{
				a += 1;
			}
			Console.WriteLine(a);
		}
    }
}


//入力例2
//2000 1 1
//出力例2
//2000/1/1