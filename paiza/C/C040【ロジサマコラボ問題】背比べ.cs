using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C040_ロジサマコラボ問題_背比べ
	{
		/*
6
le 120.3
ge 115.7
le 122.0
ge 116.9
le 119.1
le 117.6
			 */
		public static void Answer()
		{
			var N = int.Parse(Console.ReadLine());
			List<double> le_list = new List<double>();
			List<double> ge_list = new List<double>();
			for (int i = 0; i < N; i++)
			{
				var row = Console.ReadLine().Split(' ');
				if (row[0] == "le")
					le_list.Add(double.Parse(row[1]));
				else
					ge_list.Add(double.Parse(row[1]));
			}
			Console.WriteLine($"{ge_list.Max().ToString("F1")} {le_list.Min().ToString("F1")}");
		}
	}
}
