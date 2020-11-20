using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D039正三角形かどうか
	{
		public static void Answer()
		{
			int i = 0;
			List<int> lstsannkaku = new List<int>();
			while (true)
			{
				i++;
				lstsannkaku.Add(int.Parse(Console.ReadLine()));

				if (i == 3)
					break;
			}
			if (lstsannkaku[0] == lstsannkaku[1] && lstsannkaku[1] == lstsannkaku[2])
			{
				Console.WriteLine("YES");
			}
			else
			{
				Console.WriteLine("NO");
			}
		}
	}
}
