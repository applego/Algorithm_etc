using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D103逆さ読み
	{
		static void Answer()
		{
			var line = System.Console.ReadLine();
			char[] chars = line.ToArray();
			Array.Reverse(chars);

			System.Console.WriteLine(chars);
		}
	}
}
