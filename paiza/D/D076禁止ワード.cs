using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D076禁止ワード
	{
		static void Answer()
		{
			string ngword = Console.ReadLine();
			string testword = Console.ReadLine();

			if (testword == testword.Replace(ngword, ""))
			{
				Console.WriteLine(testword);
			}
			else
			{
				Console.WriteLine("NG");
			}
		}
	}
}
