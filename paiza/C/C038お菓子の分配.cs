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
    class C038
    {
        public void Do()
        {
            List<int> input_1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_2 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_3 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //List<int> input_4 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();

            List<List<int>> listlist = new List<List<int>>();
            listlist.Add(input_1);
            for(int i = 0; i < input_1[0]; i++)
            {
                listlist.Add(new List<int>(Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList()));
            }

            DistributionMachine distributionMachine;
            List<DistributionMachine> distributionMachines = new List<DistributionMachine>();
            for (int i = 0; i < input_1[0]; i++)
            {
                distributionMachine = new DistributionMachine(i+1, listlist[i + 1][0],listlist[0][1]%listlist[i+1][0]);
                distributionMachines.Add(distributionMachine);
            }

            //余りの数で昇順
            distributionMachines.Sort((a, b) => a.Remainder - b.Remainder);

            List<DistributionMachine> outputDistributionMachine = distributionMachines.FindAll(x => x.Remainder == distributionMachines.Select(y => y.Remainder).Min());
            //余りが最小の機会が複数あった場合NumOfDistributionの降順にソート
            if(outputDistributionMachine.Count > 1)
            {
                outputDistributionMachine.Sort((a, b) => b.NumOfDistribution - a.NumOfDistribution);
            }
            Console.WriteLine(outputDistributionMachine[0].MachineId);

            string isRepeat = Console.ReadLine();

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
