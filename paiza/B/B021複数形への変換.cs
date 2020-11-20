using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    class B021複数形への変換
    {
        private static string GetHukusuukei(string v)
        {
            string hukusuu = "";
            string last_2 = v.Substring(v.Length - 2);
            string last_1 = v.Substring(v.Length - 1);
            List<string> es_2_list = new List<string> { "sh", "ch" };
            List<string> aiueo_list = new List<string> { "a", "i", "u", "e", "o" };

            if (es_2_list.Contains(last_2) || last_1 == "s"||last_1=="o"||last_1=="x")
            {
                hukusuu = v + "es";
            }
            else if(last_1=="f")
            {
                v = v.Remove(v.Length-1);
                hukusuu = v + "ves";
            }
            else if (last_2 == "fe")
            {
                v = v.Remove(v.Length-2);
                hukusuu = v + "ves";
            }
            else if(last_1 == "y")
            {
                var last_2nd = v.Substring(v.Length - 2);
                last_2nd = last_2nd.Remove(last_2nd.Length - 1);
                if (!aiueo_list.Contains(last_2nd))
                {
                    v = v.Remove(v.Length-1);
                    hukusuu = v + "ies";
                }
                else
                {
                    hukusuu = v + "s";
                }
            }
            else
            {
                hukusuu = v + "s";
            }
            return hukusuu;
        }
        public void Answer()
        {
            int N;
            /*

             */
            var inputf = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            N = inputf[0];
            List<string> anslist = new List<string>();
            for(int i = 0; i < N; i++)
            {
                var input = Console.ReadLine();
                var ans = GetHukusuukei(input);
                anslist.Add(ans);
            }
            //var answerlist = lists
            //    .Select((v,index)=>new { Value = v, Index = index })
            //    .Where(item => item.Value==lists.Max())
            //    .OrderBy(item=>item.Index)
            //    .Select(item=>item.Index+1);
            anslist.ForEach(item => { Console.WriteLine(item); });
            Console.ReadKey();
        }
    }
}
