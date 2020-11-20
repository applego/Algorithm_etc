using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C051カード並べ
	{
		static void Answer()
		{
			var in1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
			//var in2 = Console.ReadLine().Split(' ').Select(x=>int.Parse(x)).ToList();
			in1.Sort();
			in1.Reverse();

			string a = in1[0].ToString();
			string b = in1[1].ToString();
			string c = in1[2].ToString();
			string d = in1[3].ToString();

			int maxval = int.Parse(a + c) + int.Parse(b + d);
			Console.WriteLine(maxval);
		}
	}
}
