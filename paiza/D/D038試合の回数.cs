using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D038試合の回数
	{
		public static void Answer()
		{
			int N = int.Parse(Console.ReadLine());
			int rerult = N * (N - 1) / 2;
			Console.WriteLine(rerult);
		}
	}
}
