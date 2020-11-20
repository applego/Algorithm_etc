using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.B
{
	class B012チェックディジット
	{
		static void Answer()
		{
			int n = int.Parse(Console.ReadLine());

			List<string> lststr_card_num = new List<string>();

			for (int i = 0; i < n; i++)
			{
				lststr_card_num.Add(Console.ReadLine());
			}

			List<int> lst_X = new List<int>();
			int even;
			int odd_x;
			int X;

			for (int i = 0; i < lststr_card_num.Count; i++)
			{
				//evenを算出
				even = calc_even(lststr_card_num[i]);

				//odd-Xを算出
				odd_x = calc_odd_X(lststr_card_num[i]);

				//Xを算出
				X = calc_X(even, odd_x);
				lst_X.Add(X);
			}
			foreach (int x in lst_X)
			{
				Console.WriteLine(x.ToString());
			}
		}
		static int calc_X(int even, int odd_x)
		{
			int X = 0;
			for (int x = 0; x < 10; x++)
			{
				int tmp_x = even + odd_x + x;
				if (tmp_x % 10 == 0)
					X = x;
			}
			return X;
		}
		//偶数桁の数字をそれぞれ2倍し総和をとったものをeven
		//（ただし、2倍したあと2桁の数字になるものは、
		//1の位と10の位の数を足して1桁の数字にしたあと、総和をとる）
		static int calc_even(string str_cardnum)
		{
			int even = 0;
			Char[] cs = str_cardnum.ToCharArray();
			for (int i = 0; i < cs.Length; i += 2)
			{
				int tmp_e = int.Parse(cs[i].ToString()) * 2;
				if (tmp_e >= 10)
				{
					tmp_e = hutaketa_to_hitoketa(tmp_e);
				}
				even += tmp_e;
			}
			return even;
		}
		//奇数桁の数字の総和をとったものをodd
		//→Xは奇数桁なのでoddは算出できない
		static int calc_odd_X(string str_cardnum)
		{
			int odd = 0;
			Char[] cs = str_cardnum.ToCharArray();
			for (int i = 1; i < (cs.Length - 2); i += 2)
			{
				int tmp_o = int.Parse(cs[i].ToString());

				odd += tmp_o;
			}
			return odd;
		}

		static int hutaketa_to_hitoketa(int even1)
		{
			int even2 = 0;
			foreach (char c in even1.ToString())
			{
				int n = int.Parse(c.ToString());
				even2 += n;
			}
			return even2;
		}
	}
}
