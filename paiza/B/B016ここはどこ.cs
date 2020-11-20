using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    /*
     入力例2
7 6 1
3 4
L 5
出力例2
5 4
         */
    class B016ここはどこ
    {
        int Width = 0;
        int Height = 0;
        int N = 0;
        Point FirstPoint;
        public void Answer()
        {
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
            var input1  = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            Width = input1[0]-1;
            Height = input1[1]-1;
            N = input1[2];

            var input2 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            FirstPoint = new Point(input2[0], input2[1]);

            List<List<string>> loglist = new List<List<string>>();
            for (int i = 0; i < N; i++)
            {
                var row_ = Console.ReadLine().Split(' ').ToList();
                loglist.Add(row_);
            }
            loglist.ForEach(log =>
            {
                move1log(ref FirstPoint,log);
            });

            Console.WriteLine($"{FirstPoint.X} {FirstPoint.Y}");
            Console.ReadKey();
        }

        void move1log(ref Point point,List<string> log)
        {
            switch (log[0])
            {
                case "U":
                    point.Y = (point.Y + int.Parse(log[1]))%(Height+1);
                    break;
                case "D":
                    int um = (Height + 1) - int.Parse(log[1]);
                    point.Y = (point.Y + um) % (Height + 1);
                    break;
                case "R":
                    point.X = (point.X + int.Parse(log[1])) % (Width + 1);
                    break;
                case "L":
                    int rm = (Width + 1) - int.Parse(log[1]);
                    point.X = (point.X + rm) % (Width + 1);
                    break;
            }
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
