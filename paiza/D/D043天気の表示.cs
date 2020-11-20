using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D043天気の表示
	{
		public static void Answer()
		{
			int n = int.Parse(Console.ReadLine());

			if (0 <= n && n <= 30)
			{
				Console.WriteLine("sunny");
			}
			else if (31 <= n && n <= 70)
			{
				Console.WriteLine("cloudy");
			}
			else
			{
				Console.WriteLine("rainy");
			}
		}
	}
}
