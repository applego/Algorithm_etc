using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C013嫌いな数字
	{
		public static void Answer()
		{
			var in1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
			var in2 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
			List<int> list_roomnum = new List<int>();
			for (int i = 0; i < in2[0]; i++)
			{
				list_roomnum.Add(int.Parse(Console.ReadLine()));
			}

			var n嫌い = in1[0].ToString();
			int cc = 0;
			list_roomnum.ForEach(x => {
				if (!x.ToString().Contains(n嫌い))
				{
					Console.WriteLine("{0}", x);
					cc++;
				}
			});
			if (cc == 0)
			{
				Console.WriteLine("none");
			}
		}
	}
}
