using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D104送料の計算
	{
		static void Answer()
		{
			int ans;
			//Console.WriteLine("D104");
			var line = int.Parse(Console.ReadLine());
			if (line < 10)
			{
				ans = 1000;
			}
			else
			{
				ans = line * 150;
			}
			Console.WriteLine(ans);
		}
	}
}
