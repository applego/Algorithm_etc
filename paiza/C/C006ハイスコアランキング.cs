using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//n s p
/*
 あなたはとあるアイテム集めゲームのユーザーランキングを作ることになりました。

アイテムの種類はN個あり、アイテムは種類ごとに得点が異なります。
各アイテム種別毎の1個あたりの得点はCiで表現され、ユーザーが持っている
それぞれのアイテムの数はXiで表現されます。
（アイテムiの１個当たりの得点はCi、ユーザーの持ち数はXiという事です）

ユーザーのスコアは、各アイテム持ち数×各アイテムの得点の総和となります。

例）
　アイテム種別毎の得点
　　C1 = 1.5, C2 = 1.2, C3 = 2, C4 = 0.4

　ユーザーのアイテム持ち数
　　X1 = 49, X2 = 30, X3 = 2, X4 = 6486

　上記の場合スコアS
　　S = C1 * X1 + C2 * X2 + C3 * X3 + C4 * X4
　　　= 49 * 1.5 + 1.2 * 30 + 2 * 2 + 0.4 * 6486
　　　= 2707.9
　　　≒ 2708 
　として算出します。

Sの値が小数になった場合は、小数第一位を四捨五入し、整数に
します。以上のスコア計算を、M人のユーザーに行い、トップKのスコア(Ｋ＝３の場合トップ３)を
出力してください。

    入力例1
4 10 3
1.5 1.2 2 0.4
208 200 3 99988
255 150 50 65472
103 748 39 48571
159 403 32 89928
254 300 67 78492
249 298 47 45637
253 382 89 37282
250 350 78 76782
251 371 69 67821
256 312 89 54382

出力例1
40553 
36757 
32272


     */

namespace paiza3
{
    public class C006
    {
        protected class ItemRanking
        {
            public int ItemCnt;
            public int UserCnt;
            public int TopCnt;

            public ItemRanking(int a,int b,int c)
            {
                this.ItemCnt = a;
                this.UserCnt = b;
                this.TopCnt = c;
            }

            //public List<double> Lst_ItemPoint = new List<double>();

            //protected void Set_Lst_ItemPoint(List<double> v_lstItemPoints)
            //{
            //    Lst_ItemPoint = v_lstItemPoints;
            //}

            


        }

        protected double CalcUserItemPoints(List<double> v_lst_itempoint, List<int> v_lstItemCnt)
        {
            double result = 0;
            for (int i = 0; i < v_lstItemCnt.Count; i++)
            {
                result += (v_lst_itempoint[i] * v_lstItemCnt[i]);
            }
            bool isdecimal = IsDecimal(result);
            if (isdecimal)
            {
                //小数だったら
                double ret = Math.Round(result, MidpointRounding.AwayFromZero);
                result = ret;
            }

            return result;
        }

        public static bool IsDecimal(double dValue)
        {
            if (dValue - System.Math.Floor(dValue) != 0)
            {
                return true;
            }

            return false;
        }

        public void Do()
        {
            var arrTmpInput = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            var ItemNum = arrTmpInput[0];  //アイテム数
            var UserNum = arrTmpInput[1];  //ユーザー数
            var TopK = arrTmpInput[2];  //トップx人表示（出力）

            var arrTmpInput_ItemPOints = Console.ReadLine().Split(' ').Select(x => double.Parse(x)).ToList();

            List<double> lst_ItemRanking = new List<double>();
            for(int userIndex = 0; userIndex < UserNum; userIndex++)
            {
                //List<int> userItemCnt = new List<int>();
                //for (int itemIndex = 0; itemIndex < ItemNum; itemIndex++)
                //{
                var itemcnt = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
                double point = CalcUserItemPoints(arrTmpInput_ItemPOints, itemcnt);
                lst_ItemRanking.Add(point);
                    //userItemCnt.AddRange(itemcnt);
                //}
            }

            var output = lst_ItemRanking.OrderByDescending(x => x);

            lst_ItemRanking.Sort();
            lst_ItemRanking.Reverse();
            //lst_ItemRanking.Sort((a, b) => b - a);
            for(int a = 0; a < TopK; a++)
            {
                Console.WriteLine(lst_ItemRanking[a]);
            }

            Console.ReadLine();
        }
        
        protected class page_element
        {
            protected int searchresutlindex;
            protected int pagenum;
            public int Searchresutlindex { get { return searchresutlindex; } set { searchresutlindex = value; } }
            public int Pagenum { get { return pagenum; } set { pagenum = value; } }
            public page_element(int si,int pn)
            {
                Searchresutlindex = si;
                Pagenum = pn;
            }
        }
    }
}
