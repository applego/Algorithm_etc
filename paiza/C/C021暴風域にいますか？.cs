using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

#region
/*
入力例1
3 7
2
3
4

出力例1
2

入力例2
5 15
12
13
7
5
8

出力例2
4

    https://paiza.jp/challenges/share/o5rRJ_sK5qt3E7j2RHDETPpo2Q1qgItBote7i_tp1x0?source=social
     */
#endregion


namespace paiza3
{
    
    public class C021暴風域にいますか
    {
        public int xc = 0;
        public int yc = 0;
        public int r_1 = 0;
        public int r_2 = 0;

        enum RetString
        {
            yes,no
        }

        private double CalcBouhuuiki(int x,int y)
        {
            double calcresult = Math.Pow(x - xc,2) + Math.Pow(y - yc,2);
            return calcresult;
        }

        public void Do()
        {
            var input1 = Console.ReadLine().Split(' ').Select(x=>int.Parse(x)).ToList();
            xc = input1[0];
            yc = input1[1];
            r_1 = input1[2];
            r_2 = input1[3];

            var n = Convert.ToInt32(Console.ReadLine());
            List<List<int>> lstHankei = new List<List<int>>();
            for (int i = 0; i < n; i++)
            {
                List<int> tmplst = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
                lstHankei.Add(tmplst);
            }
            var minline = Math.Pow(r_1, 2);
            var maxline = Math.Pow(r_2, 2);
            foreach(var li in lstHankei)
            {
                var calcResult = CalcBouhuuiki(li[0], li[1]);
                if(minline <= calcResult && calcResult <= maxline)
                {
                    Console.WriteLine(RetString.yes.ToString());
                }
                else
                {
                    Console.WriteLine(RetString.no.ToString());
                }
            }
        }

    }

}
