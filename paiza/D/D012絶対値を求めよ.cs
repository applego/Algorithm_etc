using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D012絶対値を求めよ
	{
		static void Answer()
		{
			var line = System.Console.ReadLine();
			var ans = 0;
			var intline = int.Parse(line);
			if (intline >= 0)
			{
				ans = intline;
			}
			else
			{
				ans = -(intline);
			}
			System.Console.WriteLine(ans);
		}
	}
}
