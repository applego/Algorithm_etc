using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D075足りないカード
	{
		static void Answer()
		{
			List<int> mylist = new List<int>();
			for (int a = 1; a <= 5; a++)
			{
				mylist.Add(a);
			}
			int i = 0;
			while (true)
			{
				int b = 0;
				int c = int.Parse(Console.ReadLine());
				while (true)
				{
					if (mylist[b] == c)
					{
						mylist.Remove(c);
						break;
					}
					b++;
				}
				if (i == 3) { break; }
				i++;
			}

			Console.WriteLine(mylist[0]);
		}
	}
}
