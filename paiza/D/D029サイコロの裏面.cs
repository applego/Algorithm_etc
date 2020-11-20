using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D029サイコロの裏面
	{
		static void Answer()
		{
			var line = System.Console.ReadLine();
			int intLine = int.Parse(line);
			//Console.WriteLine(intLine);
			System.Console.WriteLine(7 - intLine);
		}
	}
}
