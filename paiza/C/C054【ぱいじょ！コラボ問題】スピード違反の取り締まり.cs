using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

#region
/*
入力例1入力例1
3 40
0 0
1 30
2 80

出力例1
YES

入力例2
5 60 
1 50 
2 100 
3 150 
5 200 
8 250

出力例2
NO    */
#endregion


namespace paiza3
{
    class C054
    {
        public class SpeedJudge
        {
            protected int time;
            protected int distance;
            protected double speed;
            protected bool isOver;
            protected int limitSpeed;
            public int Time { get { return time; } set { time = value; } }
            public int Distance { get { return distance; } set { distance = value; } }
            public double Speed { get { return speed; } set { speed = value; } }
            public bool IsOver { get { return isOver; } set { isOver = value; } }
            public int LimitSpeed { get { return limitSpeed; } set { limitSpeed = value; } }

            public SpeedJudge(int time, int distance, int limit)
            {
                this.Time = time;
                this.Distance = distance;
                this.Speed = distance / time;
                this.LimitSpeed = limit;
                this.IsOver = JudgeIsOver(Speed, LimitSpeed);
            }
            protected bool JudgeIsOver(double speed, int limit)
            {
                if (speed > limit)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        public void Do()
        {
            List<int> input_1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_2 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_3 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_4 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<DateTime> lstDatetime = new List<DateTime>();
            //List<List<string>> listlist = new List<List<string>>();
            //listlist.Add(input_1);

            List<List<int>> list_int = new List<List<int>>();
            List<SpeedJudge> lst_speedJudge = new List<SpeedJudge>();
            int first_0 = 0;
            int first_1 = 0;
            for (int i = 0; i < input_1[0]; i++)
            {
                if (i == 0)
                {
                    var tmpfirst = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
                    list_int.Add(tmpfirst);
                    first_0 = tmpfirst[0];
                    first_1 = tmpfirst[1];
                }
                else
                {
                    var tmp = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
                    list_int.Add(tmp);
                    SpeedJudge sp = new SpeedJudge(list_int[i][0] - list_int[i-1][0], list_int[i][1] - list_int[i - 1][1], input_1[1]);
                    lst_speedJudge.Add(sp);
                }

            }

            bool judge = lst_speedJudge.Any(x => x.IsOver == true);
            if (judge)
            {
                Console.WriteLine("YES");
            }
            else
            {
                Console.WriteLine("NO");
            }
            Console.ReadKey();
            //for (int i = 0; i < input_1[0]; i++)
            //{
            //    var tmp = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //    SpeedJudge sp = new SpeedJudge(tmp[0], tmp[1], input_1[1]);
            //    lst_speedJudge.Add(sp);
            //}


            int first = 1;
            bool isFirst = true;
            int answer = 0;



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
