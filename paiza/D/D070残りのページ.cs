using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D070残りのページ
	{
		public static void Answer()
		{
			char delimiterChar = ' ';

			string[] strAns = Console.ReadLine().Split(delimiterChar);

			Console.WriteLine(int.Parse(strAns[0]) - int.Parse(strAns[1]));

			//string strans = Console.ReadLine();
			//int m = Convert.ToInt32(strans[0]);
			//int n = Convert.ToInt32(strans[2]);

			//Console.WriteLine(m - n);

			//int m = int.Parse(Console.ReadLine());
			//int n = int.Parse(Console.ReadLine());
			//int ans = m - n;
			//Console.WriteLine(ans);
		}
	}
}
