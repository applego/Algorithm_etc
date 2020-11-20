using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C037アニメの日時
	{
		public static void Answer()
		{
			string[] input = Console.ReadLine().Split(' ');
			string month = input[0].Substring(0, 2);
			int day = int.Parse(input[0].Substring(3, 2));
			string time = input[1];
			int h = int.Parse(time.Substring(0, 2));
			int m = int.Parse(time.Substring(3, 2));

			while (true)
			{
				if (h < 24) { break; }

				if (h - 24 > 0)
				{
					h -= 24;
					day += 1;
				}
			}
			StringBuilder sb = new StringBuilder();
			sb.Append(string.Format("{0:00}", month) + "/"); ;
			sb.Append(string.Format("{0:00}", day));
			sb.Append(" ");
			sb.Append(string.Format("{0:00}", h));
			sb.Append(":");
			sb.Append(string.Format("{0:00}", m));

			//DateTime time = Convert.ToDateTime("01/27 24:30");
			Console.WriteLine(sb);
		}
	}
}
