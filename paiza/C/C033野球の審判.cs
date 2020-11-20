using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C033野球の審判
	{
		static void Answer()
		{
			int n = int.Parse(Console.ReadLine());
			int ball = 0;
			int strike = 0;
			for (int i = 0; i < n; i++)
			{
				string str1 = Console.ReadLine();
				if (str1 == "ball")
				{
					ball += 1;
					if (ball == 4)
					{
						Console.WriteLine("fourball!");
						return;
					}
					else { Console.WriteLine("ball!"); }
				}
				else if (str1 == "strike")
				{
					strike += 1;
					if (strike == 3)
					{
						Console.WriteLine("out!");
						return;
					}
					else { Console.WriteLine("strike!"); }
				}
			}

		}
	}
}
