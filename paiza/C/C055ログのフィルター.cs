using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C055ログのフィルター
	{
		static void Answer()
		{
			List<string> list_ans = new List<string>();
			//Console.WriteLine("D104");
			var logCnt = int.Parse(Console.ReadLine());
			var importantStr = Console.ReadLine();

			for (int i = 0; i < logCnt; i++)
			{
				var logRow = Console.ReadLine();
				if (logRow.Contains(importantStr))
				{
					list_ans.Add(logRow);
				}
			}
			if (list_ans.Count > 0)
			{
				foreach (var item in list_ans)
				{
					Console.WriteLine(item);
				}

			}
			else
			{
				Console.WriteLine("None");
			}
		}
	}
}
