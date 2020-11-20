using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    class B055タクシー料金
    {
        public class TaxiFee
        {
            int DistFirst { get; set; }
            int FeeFirst { get; set; }
            int DistAdd { get; set; }
            int FeeAdd { get;  set; }
            public TaxiFee(int a,int b,int c ,int d)
            {
                this.DistFirst = a;
                this.FeeFirst = b;
                this.DistAdd = c;
                this.FeeAdd = d;
            }
            public int GetFee(int x)
            {
                int Fee = this.FeeFirst;

                if (x < this.DistFirst)
                {
                    //初乗り距離より短かったら初乗り料金
                    return this.FeeFirst;
                }
                else
                {
                    //一回目の追加運賃
                    x -= this.DistFirst;
                    Fee += FeeAdd;

                    var addCnt = Math.Floor(((double)x / (double)this.DistAdd));
                    Fee += ((int)addCnt * this.FeeAdd);
                    return Fee;
                    if (x <= 0)
                        return Fee;
                    while (true)
                    {
                        x -= this.DistAdd;
                        if (x < this.DistAdd)
                        {
                            //次の可算距離より小さければ
                            return Fee;
                        }
                        else if(x == this.DistAdd)
                        {
                            Fee += this.FeeAdd;
                            return Fee;
                        }
                        else
                        {
                            Fee += this.FeeAdd;
                        }
                    }
                }
            }
        }
        public void Answer()
        {
            int N;
            int X;
            /*
             * 
入力例1
2 700
600 200 200 400
900 800 400 500
出力例1
600 800
入力例2
2 8000
2000 730 280 90
1052 410 237 80
出力例2
2710 2810
入力例3
3 600
600 200 200 400
900 800 400 500
200 200 200 300
出力例3
600 1100
             */
            var inputf = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            N = inputf[0];
            X = inputf[1];
            List<TaxiFee> taxiFees = new List<TaxiFee>();
            for(int i = 0; i < N; i++)
            {
                var input = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                taxiFees.Add(new TaxiFee(input[0], input[1], input[2], input[3]));
            }
            int minValue = int.MaxValue;
            int maxValue = 0;
            taxiFees.ForEach(taxi =>
            {
                var fee = taxi.GetFee(X);
                if (fee < minValue)
                {
                    minValue = fee;
                }
                if (fee > maxValue)
                {
                    maxValue = fee;
                }
            });
            Console.WriteLine($"{minValue} {maxValue}");
            //Console.ReadKey();
        }
    }
}
