using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C034先生の宿題
	{
		static void Answer()
		{
			string[] inp = Console.ReadLine().Split(' ');
			int x = 0;
			if (inp[0] == "x")
			{
				if (inp[1] == "+")
					x = int.Parse(inp[4]) - int.Parse(inp[2]);
				if (inp[1] == "-")
					x = int.Parse(inp[2]) + int.Parse(inp[4]);
			}
			else if (inp[2] == "x")
			{
				if (inp[1] == "+")
					x = int.Parse(inp[4]) - int.Parse(inp[0]);
				if (inp[1] == "-")
					x = int.Parse(inp[0]) - int.Parse(inp[4]);
			}
			else if (inp[4] == "x")
			{
				if (inp[1] == "+")
					x = int.Parse(inp[0]) + int.Parse(inp[2]);
				if (inp[1] == "-")
					x = int.Parse(inp[0]) - int.Parse(inp[2]);
			}
			Console.WriteLine(x);
		}
	}
}
