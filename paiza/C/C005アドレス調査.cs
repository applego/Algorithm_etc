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
    
    class C005
    {
        public class image_c30
        {
            protected int m_Gaso;
            protected bool m_IsWhite;
            public int Gaso { get { return m_Gaso; } set { m_Gaso = value; } }
            public bool IsWhite
            {
                get { return m_IsWhite; }
                set { m_IsWhite = value; }
            }
            //public int ID { get; set; }
            //public int ChargeCount { get; set; }
            public image_c30(int gaso)
            {
                this.Gaso = gaso;
                if (gaso >= 128)
                    this.IsWhite = true;
                else
                    this.IsWhite = false;

            }


        }
        public void Do()
        {
            List<int> input_1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_2 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_3 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_4 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();

            List<string> lststring = new List<string>();
            for(int i = 0; i < input_1[0]; i++)
            {
                lststring.Add(Console.ReadLine());
            }

            for(int i = 0; i < input_1[0]; i++)
            {
                bool output = true;
                //var a = Console.ReadLine();
                var b = lststring[i].Where(c => c == '.').Count();
                if(b != 3)
                {
                    output = false;
                }
                else
                {
                    var d = lststring[i].Split('.').Select(x => int.Parse(x)).ToList();
                    d.ForEach(x => {
                        if (0 <= x && x <= 255) { } else { output = false; }
                    }
                    );
                }
                Console.WriteLine("{0}", output);
            }


            List<List<int>> listlist = new List<List<int>>();
            List<List<image_c30>> lstImage_c30s = new List<List<image_c30>>();
            
            //listlist.Add(input_1);
            for (int i = 0; i < input_1[0]; i++)
            {
                List<int> templist = new List<int>(Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList());
                listlist.Add(templist);
                List<image_c30> templist_c30 = new List<image_c30>();
                templist.ForEach(x =>

                templist_c30.Add(new image_c30(x))
                );
                lstImage_c30s.Add(templist_c30);
            }

            foreach(var row in lstImage_c30s)
            {
                var aaa = row.Select(x => Convert.ToInt32(x.IsWhite).ToString());
                Console.WriteLine("{0}", String.Join(" ", aaa));
            }

            for (int i = 0; i < input_1[0]; i++)
            {
                //for()
            }

            //var duplicationList = input_2
            //                                .GroupBy(i => i)
            //                                .Where(g => g.Count() > 0)
            //                                .Select(g => new { id = g.Key, duplicationCount = g.Count() })
            //                                .ToList();
            //var duplicatioList2 = duplicationList
            //                                .Where(a => a.duplicationCount == duplicationList.Select(b => b.duplicationCount).Max())
            //                                .OrderBy(b => b.id);

            //Console.WriteLine("{0}", String.Join(" ", duplicatioList2.Select(a => a.id).ToList()));

            //.Select(c=>)
            //.OrderByDescending(a => a.duplicationCount)
            //.ThenBy(b => b.id);


            var narabetalist = listlist.OrderByDescending(x => x[0])
                .ThenByDescending(y => y[1])
                .ThenByDescending(z => z[2]);

            //listlist.ForEach(x =>
            //Console.WriteLine("{0}", String.Join(" ", x))
            //);

            foreach (var i in narabetalist)
            {
                Console.WriteLine("{0}", String.Join(" ", i));
            }

            //MyClass mc = new MyClass();
            //listlist.Sort(mc);
            //Array.Sort(listlist, mc);

            listlist.ForEach(x =>
            Console.WriteLine("{0}", String.Join(" ", x))
            );


            DistributionMachine distributionMachine;
            List<DistributionMachine> distributionMachines = new List<DistributionMachine>();
            for (int i = 0; i < input_1[0]; i++)
            {
                distributionMachine = new DistributionMachine(i + 1, listlist[i + 1][0], listlist[0][1] % listlist[i + 1][0]);
                distributionMachines.Add(distributionMachine);
            }

            //余りの数で昇順
            distributionMachines.Sort((a, b) => a.Remainder - b.Remainder);

            List<DistributionMachine> outputDistributionMachine = distributionMachines.FindAll(x => x.Remainder == distributionMachines.Select(y => y.Remainder).Min());
            //余りが最小の機会が複数あった場合NumOfDistributionの降順にソート
            if (outputDistributionMachine.Count > 1)
            {
                outputDistributionMachine.Sort((a, b) => b.NumOfDistribution - a.NumOfDistribution);
            }
            Console.WriteLine(outputDistributionMachine[0].MachineId);

            string isRepeat = Console.ReadLine();
        }


        //class MyClass : IComparer
        //{
        //    public int Compare(List<int> a, List<int> b)
        //    {
        //        int ia = a[0];
        //        int ib = b[0];

        //        int temp = ia.CompareTo(ib);
        //        if (temp != 0)
        //        {
        //            return temp;
        //        }
        //        else
        //        {
        //            ia = a[1];
        //            ib = b[1];

        //            temp = ia.CompareTo(ib);
        //            if (temp != 0)
        //            {
        //                return temp;
        //            }
        //            else
        //            {
        //                ia = a[2];
        //                ib = b[2];

        //                return ia.CompareTo(ib);
        //            }
        //        }
        //    }
        //}

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
