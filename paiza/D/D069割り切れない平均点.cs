using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D069
    {
        public void Do()
        {
            string strinput = Console.ReadLine();
            //string strinput = "0 10 20 30 40 50 60";

            string[] point = strinput.Split(' ');
            List<int> lstp = new List<int>();
            for(int i = 0; i < point.Length;i++)
            {
                lstp.Add(int.Parse(point[i]));
            }
            double sum = 0;
            for(int i = 0; i< lstp.Count; i++)
            {
                sum += lstp[i];
            }
            double average = sum / lstp.Count;
            double result = Math.Round(average, 1, MidpointRounding.AwayFromZero);
            Console.WriteLine(result.ToString("#.0"));
        }
    }
}


//小数点 1 桁まで計算し、小数点以下 2 桁目で四捨五入することにしました。 
//    7 個の整数が半角スペース区切り