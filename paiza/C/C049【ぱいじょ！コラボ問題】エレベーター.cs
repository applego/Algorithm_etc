using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

#region
/*
入力例1
3 
3 
1 
4

出力例1
7

入力例2
8 
17 
28 
11 
62 
64 
4 
7 
17

出力例2
170     */
#endregion


namespace paiza3
{
    class C049
    {
        public void Do()
        {
            List<int> input_1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_2 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_3 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_4 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();

            //List<DateTime> lstDatetime = new List<DateTime>();
            //List<List<string>> listlist = new List<List<string>>();
            //listlist.Add(input_1);

            List<int> lstInput = new List<int>();
            for (int i = 0; i < input_1[0]; i++)
            {
                lstInput.Add(int.Parse(Console.ReadLine()));
            }
            int first = 1;
            bool isFirst = true;
            int answer = 0;

            for (int i = 0; i < lstInput.Count; i++)
            {
                if (isFirst)
                {
                    var diff = lstInput[i] - first;
                    var zettaiti = Math.Abs(diff);
                    answer += zettaiti;
                    isFirst = false;
                }
                else
                {
                    var diff = lstInput[i] - lstInput[i - 1];
                    var zettaiti = Math.Abs(diff);
                    answer += zettaiti;
                }
            }

            Console.WriteLine(answer);
            Console.ReadKey();

            //遅い順にソート
            //lstDatetime.Sort((a,b)=>b-a);

            //var isAnser = false;
            //DateTime answerTime = DateTime.MinValue;
            //for(int i = input_2[0]-1; i >= 0; i--)
            //{
            //    if (!isAnser)
            //    {
            //        var time = CalcArriveTime(input_1, lstDatetime[i]);
            //        if (time[1] < timelimit)
            //        {
            //            isAnser = true;
            //            answerTime = time[0];
            //        }
            //    }
            //}
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
           // var strAns = answerTime.ToString("hh:mm");
            //Console.WriteLine();
            //Console.ReadKey();
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
