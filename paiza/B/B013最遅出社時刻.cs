using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

#region
/*
条件
すべてのテストケースで以下の条件を満たします。
1 ≦ a, b, c ≦ 30
1 ≦ N ≦ 180
h_i:m_i は 6:00 から 8:59 の間の時刻

時刻 (h_1:m_1), (h_2:m_2), ..., (h_N:m_N) は早い順に並んでいます。また、同じ時刻に発車する電車は存在しません。
遅刻せずに出社することができる電車が、少なくとも 1 本は存在します。
入力例1
30 30 10 
3 
6 0 
7 0 
8 0

出力例1
07:30

入力例2
30 30 10 
3 
6 0 
7 0 
8 0

出力例2
07:30

入力例3
25 30 30 
2 
7 20 
8 0

出力例3
06:55

入力例4
10 10 10
6
8 5
8 15
8 25
8 35
8 45
8 55

出力例4
08:25

    最後の電車に乗って間に合うか⇒
    最後から二番目の電車に乗って間に合うか
    ...



    https://paiza.jp/challenges/share/o5rRJ_sK5qt3E7j2RHDETPpo2Q1qgItBote7i_tp1x0?source=social
     */
#endregion


namespace paiza3
{
    class B013
    {
        public void Do()
        {
            // [0]:a [1]:b [2]:c      
            var timelimit = new DateTime(2018, 1, 1, 9, 0, 0); //これよりちいさいなら
            List<int> input_1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            List<int> input_2 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_3 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_4 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();

            List<DateTime> lstDatetime = new List<DateTime>();
            //List<List<string>> listlist = new List<List<string>>();
            //listlist.Add(input_1);
            for (int i = 0; i < input_2[0]; i++)
            {
                var tmpLine = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
                lstDatetime.Add(new DateTime(2018, 1, 1, tmpLine[0], tmpLine[1], 0));
                //listlist.Add(new List<int>(Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList()));
            }
            //遅い順にソート
            //lstDatetime.Sort((DateTime a,DateTime b)=>b-a);

            var isAnser = false;
            DateTime answerTime = DateTime.MinValue;
            for(int i = input_2[0]-1; i >= 0; i--)
            {
                if (!isAnser)
                {
                    var time = CalcArriveTime(input_1, lstDatetime[i]);
                    if (time[1] < timelimit)
                    {
                        isAnser = true;
                        answerTime = time[0];
                    }
                }
            }
            //lstDatetime.ForEach(x =>
            //{
            //    if (!isAnser)
            //    {
            //        var time = CalcArriveTime(input_1, x);
            //        if (time[1] < timelimit)
            //        {
            //            isAnser = true;
            //            answerTime = time[0];
            //        }
            //    }
            //});
            var strAns = answerTime.ToString("hh:mm");
            Console.WriteLine(strAns);
            Console.ReadKey();
        }

        private DateTime[] CalcArriveTime(List<int> lst_1, DateTime dateTime)
        {
            var a = lst_1[0];
            var leaveTime = dateTime.AddMinutes(-(a));
            var arriveTime = dateTime.AddMinutes(lst_1[1] + lst_1[2]);
            return new DateTime[] { leaveTime, arriveTime };
        }

        protected class DistributionMachine
        {
            public DistributionMachine(int machineId, int numOfDistribution, int remainder)
            {
                MachineId = machineId;
                NumOfDistribution = numOfDistribution;
                Remainder = remainder;
            }

            public int MachineId { get; set; }
            public int NumOfDistribution { get; set; }
            public int Remainder { get; set; }


            public void SetRemainder(int numOfCandy)
            {
                this.Remainder = numOfCandy % this.NumOfDistribution;
            }
        }
    }
}
