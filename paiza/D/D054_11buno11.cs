using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D054_11buno11
	{
		public static void Answer()
		{
			string str = Console.ReadLine();
			int n = CountChar(str, '1');
			if (n >= 11)
			{
				Console.WriteLine("OK");
			}
			else
			{
				Console.WriteLine(11 - n);
			}
		}
		public static int CountChar(string s, char c)
		{
			return s.Length - s.Replace(c.ToString(), "").Length;
		}
	}
}
