using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D108薬の効き目
	{
		static void Answer()
		{
			int line = int.Parse(Console.ReadLine());

			int cnt = 0;
			int obj_hour_effective = 0;

			while (true)
			{
				obj_hour_effective += line;
				cnt++;
				if (obj_hour_effective >= 24)
				{
					break;
				}
			}

			Console.WriteLine(cnt);
		}
	}
}
