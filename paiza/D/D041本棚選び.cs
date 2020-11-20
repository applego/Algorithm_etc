using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D041本棚選び
	{
		public static void Answer()
		{
			string[] input = Console.ReadLine().Split(' ');
			int n = int.Parse(input[0]);
			int buy = int.Parse(input[1]) * int.Parse(input[2]);

			if (n < buy)
			{
				Console.WriteLine("OK");
			}
			else
			{
				Console.WriteLine("NG");
			}
		}
	}
}
