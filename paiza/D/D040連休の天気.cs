using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D040連休の天気
	{
		public static void Answer()
		{
			List<int> lstresult = new List<int>();
			for (int i = 0; i < 7; i++)
			{
				int rain = int.Parse(Console.ReadLine());
				if (rain <= 30)
				{
					lstresult.Add(rain);
				}

			}
			Console.WriteLine(lstresult.Count);
		}
	}
}
