using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C039古代の数式
	{
		public static int CountChar(string s, char c)
		{
			return s.Length - s.Replace(c.ToString(), "").Length;
		}

		static void Answer()
		{
			string str = Console.ReadLine();
			int ten = CountChar(str, '<');
			int one = CountChar(str, '/');

			int result = ten * 10 + one * 1;
			Console.WriteLine(result);
		}
	}
}
