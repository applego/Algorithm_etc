using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D102運賃の計算
	{
		static void Answer()
		{
			int Hatunori = 100;
			int Itikukan = 10;
			int fee = Hatunori + int.Parse(Console.ReadLine()) * Itikukan;
			Console.WriteLine(fee);
		}
	}
}
