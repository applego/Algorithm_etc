using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D014小文字を大文字に
	{
		static void Answer()
		{
			var line = System.Console.ReadLine();
			string UpperLine = line.ToUpper();
			System.Console.WriteLine(UpperLine);
		}
	}
}
