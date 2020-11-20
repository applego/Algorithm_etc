using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D056かまくらづくり
	{
		public static void Answer()
		{
			string[] str = Console.ReadLine().Split(' ');
			double r1 = double.Parse(str[0]);
			double r2 = double.Parse(str[1]);

			Console.WriteLine(Math.Pow(r1, 3) - Math.Pow(r2, 3));
		}
	}
}
