using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D072データのバックアップ
	{
		public static void Answer()
		{
			string[] str = Console.ReadLine().Split(' ');
			int X = int.Parse(str[0]);
			int Y = int.Parse(str[1]);
			int P = int.Parse(str[2]);

			int i = 0;
			while (true)
			{
				if (X <= i * Y)
					break;

				i++;
			}
			int result = i * P;
			Console.WriteLine(result);
		}
	}
}
