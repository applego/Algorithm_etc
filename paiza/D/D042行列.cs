using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D042行列
	{
		public static void Answer()
		{
			string[] str1 = Console.ReadLine().Split(' ');
			int a = int.Parse(str1[0]);
			int b = int.Parse(str1[1]);
			string[] str2 = Console.ReadLine().Split(' ');
			int c = int.Parse(str2[0]);
			int d = int.Parse(str2[1]);

			Console.WriteLine(a * d - b * c);
		}
	}
}
