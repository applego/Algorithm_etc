using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D055ワインのキャッチコピー
	{
		public static void Answer()
		{
			string str = Console.ReadLine();
			string reault = str.Insert(0, "Best in ");
			Console.WriteLine(reault);
		}
	}
}
