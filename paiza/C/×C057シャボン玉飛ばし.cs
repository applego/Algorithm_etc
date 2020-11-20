using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.C
{
	class C057シャボン玉飛ばし
	{
		static void Answer()
		{
			List<int> lst_in_1 = Console.ReadLine().Split(' ').ToList().ConvertAll(x => int.Parse(x));

			List<int> lst_first_p = new List<int>(){
			lst_in_1[1],lst_in_1[2]
		};

			List<List<int>> lst_all_p = new List<List<int>>();
			lst_all_p.Add(lst_first_p);
			//test-data
			List<List<int>> lst_testdata = new List<List<int>>();
			for (int i = 0; i < lst_in_1[0]; i++)
			{
				lst_testdata.Add(Console.ReadLine().Split(' ').ToList().ConvertAll(x => int.Parse(x)));
			}

			bool is_became_mainasu = false;
			for (int i = 1; i < lst_in_1[0] + 1; i++)
			{

				List<int> tmp_p = new List<int>(){
				lst_all_p[i-1][0] + lst_testdata[i-1][0],lst_all_p[i-1][1] + lst_testdata[i-1][1]
			};
				if (lst_all_p[i - 1][1] + lst_testdata[i - 1][1] <= 0)
				{
					is_became_mainasu = true;
					string ans = String.Empty;
					if (lst_testdata[i - 1][0] > 0)
					{
						ans = (lst_all_p[i - 1][0] + lst_testdata[i - 1][0]).ToString();
					}
					else
					{
						ans = lst_all_p[i - 1][0].ToString();
					}
					Console.WriteLine(ans);
					break;
				}
				else
				{
					lst_all_p.Add(tmp_p);
				}
			}
			if (!is_became_mainasu)
			{
				int max_x = 0;
				List<int> lst_x = lst_all_p.Select(x => x[0]).ToList();
				max_x = lst_x.Max();
				Console.WriteLine(max_x.ToString());
			}
		}
	}
}
