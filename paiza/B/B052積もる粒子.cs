using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

#region
/*
 * ・粒子は落ちた際、落ちた地点より低い東西南北の隣接地点があれば、更にそこへ落ちる
　　・複数の移動先があった場合、時計回り(北, 東, 南, 西)の順序で落ちた地点より低い地点に落ちる
・粒子は落ちる事が出来なくなった際に固定され、地形の一部となる
・マップの外に出るような移動は不可能であり、移動先とはみなされない
条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ H, W ≦ 100
・1 ≦ N ≦ 1,000
・全ての i (1 ≦ i ≦ N) に対し以下を満たす
　・1 ≦ x_i ≦ W
　・1 ≦ y_i ≦ H
入力例1
4 3 7
2 3
2 3
2 3
2 3
2 3
2 3
2 3
出力例1
0 1 0
0 1 0
1 2 1
0 1 0
入力例2
5 3 5
1 1
1 1
1 1
1 1
1 1
出力例2
2 1 1
1 0 0
0 0 0
0 0 0
0 0 0
入力例3
3 3 10
2 3
2 2
3 3
1 1
3 2
3 3
1 1
2 2
1 1
3 3
出力例3
2 1 1
1 1 1
0 1 2     
     */
#endregion


namespace paiza3
{
    class B052積もる粒子
    {
        int H,W = 0;//1 ≦ H, W ≦ 100
        int N = 0;//1 ≦ N ≦ 1,000
        //List<List<int>> AnswerList; //粒子の数を代入 行数だけList<int>を持つ
        public void Do()
        {
            List<int> input_1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            H = input_1[0];
            W = input_1[1];
            N = input_1[2];

            int[,] AnswerArray = new int[W,H];
            
            List<Point> PointList = new List<Point>();//入力値をPoint（自作のリストで取得
            //List<int[,]> ArrayList = new List<int[,]>();
            for (int i = 0; i < N; i++)
            {
                int[] tmp = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                //ArrayList.Add(new int[tmp[0], tmp[1]]);
                PointList.Add(new Point(tmp[0], tmp[1]));
                SetRyushi(ref AnswerArray, new Point(tmp[0]-1, tmp[1]-1));
            }

            //粒子を配置
                //配置時の配置状況が必要
            //出力
            for(int i = 0; i < H; i++)
            {
                string row = "";
                for (int j = 0; j < W; j++)
                {
                    //Console.WriteLine(AnswerArray[j, i]);
                    if (j == 0)
                    {
                        row += AnswerArray[j, i];
                    }
                    else
                    {
                        row += (" " +AnswerArray[j,i]);
                    }
                }
                Console.WriteLine(row);
            }
            
        }

        private void SetRyushi(ref int[,] v_answerArray,Point v_point)
        {
            var P_first = v_answerArray[v_point.X, v_point.Y];
            //P_firstが0だったら配置
            if(P_first == 0)
            {
                v_answerArray[v_point.X, v_point.Y] = 1;
            }
            else
            {
                //北東南西
                if(CheckInside(v_point.X , v_point.Y - 1) && P_first > v_answerArray[v_point.X, v_point.Y - 1])
                {
                    //var P_nouth = v_answerArray[v_point.X - 1, v_point.Y-2];
                    //if (P_first > P_nouth)
                    //{
                        if(v_answerArray[v_point.X, v_point.Y - 1] > 0)
                    {
                        SetRyushi(ref v_answerArray, new Point(v_point.X, v_point.Y - 1));
                    }
                    else
                    {
                        v_answerArray[v_point.X, v_point.Y - 1] += 1;
                    }
                    //}
                }
                else
                {
                    //SetRyushi(ref v_answerArray, new Point(v_point.X + 1, v_point.Y));
                    if(CheckInside(v_point.X + 1, v_point.Y)&&P_first> v_answerArray[v_point.X + 1, v_point.Y])
                    {
                        //var P_east = v_answerArray[v_point.X + 1, v_point.Y];
                        //if (P_first > P_east)
                        //{
                        if (v_answerArray[v_point.X + 1, v_point.Y] > 0)
                        {
                            SetRyushi(ref v_answerArray, new Point(v_point.X + 1, v_point.Y));
                        }
                        else
                        {
                            v_answerArray[v_point.X + 1, v_point.Y] += 1;
                        }
                        //}
                    }
                    else
                    {
                        if(CheckInside(v_point.X, v_point.Y+1)&& P_first > v_answerArray[v_point.X, v_point.Y + 1])
                        {
                            //var P_south = v_answerArray[v_point.X - 1, v_point.Y];
                            //if (P_first > P_south)
                            //{
                            if(v_answerArray[v_point.X, v_point.Y + 1] > 0)
                            {
                                SetRyushi(ref v_answerArray, new Point(v_point.X, v_point.Y + 1));
                            }
                            else
                            {
                                v_answerArray[v_point.X, v_point.Y + 1] += 1;
                            }
                            //}
                        }
                        else
                        {
                            if(CheckInside(v_point.X - 1, v_point.Y)&&P_first> v_answerArray[v_point.X - 1, v_point.Y])
                            {
                                //var P_west = v_answerArray[v_point.X - 2, v_point.Y - 1];
                                //if (P_first > P_west)
                                //{
                                if (v_answerArray[v_point.X - 1, v_point.Y] > 0)
                                {
                                    SetRyushi(ref v_answerArray, new Point(v_point.X - 1, v_point.Y));
                                }
                                else
                                {
                                    v_answerArray[v_point.X - 1, v_point.Y] += 1;
                                }
                                //}
                            }
                            else
                            {
                                v_answerArray[v_point.X, v_point.Y] += 1;
                            }
                        }
                    }
                }
            }
        }
        
        private bool CheckInside(int x,int y)
        {
            if (0 > x || x > W-1)
                return false;
            if (0 > y || y > H-1)
                return false;

            return true;
        }
    }

    class Point
    {
        public int X { get; set; }
        public int Y { get; set; }
        public Point(int x,int y)
        {
            X = x;
            Y = y;
        }
        public override string ToString()
        {
            return $"({X},{Y})";
        }
    }
}
