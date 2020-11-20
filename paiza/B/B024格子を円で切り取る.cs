using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    class B024格子を円で切り取る
    {
        public void Answer()
        {
            double input_r;
            /*
            for(int i = 0; i < K; i++)
            {
                var input = int.Parse(Console.ReadLine());
                var otherlist = lists
                    .Select((v, index) => new { Value = v, Index = index })
                    .Where(item => item.Index != input - 1&&item.Value>0);
                lists[input - 1] += otherlist.Count();
                var otherindexlist = otherlist.Select(item => item.Index);
                otherindexlist.ToList().ForEach(x =>
                {
                    lists[x]--;
                });
            }
             */
            input_r = double.Parse(Console.ReadLine());
            var ceil_r = Math.Ceiling(input_r);
            var l_taikaku = input_r * Math.Sqrt(2);

            List<Point> points = new List<Point>();

            for(int i = 0; i < ceil_r; i++)
            {
                for(int j = 0; j < ceil_r; j++)
                {
                    Point point = new Point(i, j);
                    point.CalcDistance();
                    points.Add(point);
                }
            }
            var ans_list = points.Where(a => a.Distance <= input_r);
            Console.WriteLine(ans_list.Count()*4);
            Console.ReadKey();
        }
        class Point
        {
            public int X { get; set; }
            public int Y { get; set; }
            public double Distance { get; set; }
            public Point(int x, int y)
            {
                X = x;
                Y = y;
            }
            public void CalcDistance()
            {
                this.Distance = Math.Sqrt(Math.Pow(this.X, 2) + Math.Pow(this.Y, 2));
            }

        }
    }
}
