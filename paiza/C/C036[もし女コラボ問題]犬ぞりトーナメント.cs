using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

#region
/*
入力例2
3 2
4 1
833 897 901 925
870 855

出力例2
2
1
     
     */
#endregion


namespace paiza3
{
    class C036
    {
        public void Do()
        {
            List<int> input_1 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            List<int> input_2 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            List<int> input_3 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            List<int> input_4 = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();

            EntryPerson ep1 = new EntryPerson(1, "e1");
            EntryPerson ep2 = new EntryPerson(2, "e2");
            EntryPerson ep3 = new EntryPerson(3, "e3");
            EntryPerson ep4 = new EntryPerson(4, "e4");

            List<EntryPerson> lstEntryPerson = new List<EntryPerson>() {
                ep1,ep2,ep3,ep4
            };

            //EntryPersonControler epcontrol = new EntryPersonControler();

            //1試合目かどうか　予選のタイムをセット
            foreach (var ep in lstEntryPerson)
            {
                ep.Is1kaisen = GetIs1kaisen(ep, input_1);
                ep.Time_1kaisen = input_3[ep.EntryId-1];
            }

            //予選の組み合わせをセット
            List<EntryPerson> lst1kaisen = new List<EntryPerson>();
            List<EntryPerson> lst2kaisen = new List<EntryPerson>();

            System.Diagnostics.Stopwatch sw = new System.Diagnostics.Stopwatch();
            sw.Start();

            foreach (var ep in lstEntryPerson)
            {
                if (ep.Is1kaisen)
                    lst1kaisen.Add(ep);
                else
                    lst2kaisen.Add(ep);
            }

            sw.Stop();

            #region test
            //lst1kaisen.Clear();
            //lst2kaisen.Clear();

            //System.Diagnostics.Stopwatch sw2 = new System.Diagnostics.Stopwatch();
            //sw2.Start();

            //こっちの方が遅かった
            //lst1kaisen.AddRange(
            //    lstEntryPerson.FindAll(x => x.Is1kaisen== true)
            //    );
            //lst2kaisen.AddRange(
            //    lstEntryPerson.FindAll(x => x.Is1kaisen == false)
            //    );

            //sw2.Stop();

            #endregion 

            //予選の結果をセット
            SetVSResult2(lst1kaisen[0], lst1kaisen[1]);
            SetVSResult2(lst2kaisen[0], lst2kaisen[1]);

            //決勝の結果をセット
            List<EntryPerson> lstFinal = new List<EntryPerson>();
            foreach (var ep in lstEntryPerson)
            {
                if (ep.Isfinal)
                    lstFinal.Add(ep);
            }


            //Is_finaがtrueが優勝
            //Sortすればいいか 全部そうすればよかった　余計なメソッドいらない　どうすればそういう発想になったか一般化できる法則を考える？
            // エントリーID昇順
            lstFinal.Sort((a, b) => a.EntryId - b.EntryId);

            for(int i = 0; i < lstFinal.Count; i++)
            {
                lstFinal[i].Time_final = input_4[i];
            }
            //決勝のタイムで昇順
            lstFinal.Sort((a, b) => a.Time_final - b.Time_final);

            //回答
            Console.WriteLine(lstFinal[0].EntryId);
            Console.WriteLine(lstFinal[1].EntryId);

            Console.ReadLine();
        }

        protected class EntryPerson
        {
            public EntryPerson(int entryId, string name)
            {
                EntryId = entryId;
                Name = name;
            }
            
            public string Name { get; set; }
            public int EntryId { get; set; }
            public bool Is1kaisen { get; set; }
            public int Time_1kaisen { get; set; }
            public bool Win_1kaisen { get; set; }
            public bool Isfinal { get; set; }
            public int Time_final { get; set; }
            public bool Win_final { get; set; }

            //1回戦の参加者かどうかをkaesu
            private bool GetIs1kaisen(EntryPerson entryPerson, List<int> lst1)
            {
                return entryPerson.Is1kaisen = lst1.Contains(entryPerson.EntryId);
            }
            //決勝以外の結果をセット
            private void SetYosen(List<EntryPerson> lstEntryPerson, List<int> lstResultYosen)
            {
                lstEntryPerson.ForEach(x => x.Time_1kaisen = lstResultYosen[x.EntryId - 1]);
            }

            //試合の結果をセット
            private void SetVSResult2(EntryPerson e1, EntryPerson e2)
            {
                if (e1.Time_1kaisen < e2.Time_1kaisen)
                {
                    e1.Isfinal = true;
                    e2.Isfinal = false;
                }
                else
                {
                    e1.Isfinal = false;
                    e2.Isfinal = true;
                }
            }

        }

        public class EntryPersonControler
        {
            
        }

        //1回戦の参加者かどうかをkaesu
        private bool GetIs1kaisen(EntryPerson entryPerson, List<int> lst1)
        {
            return entryPerson.Is1kaisen = lst1.Contains(entryPerson.EntryId);
        }
        //決勝以外の結果をセット
        private void SetYosen(List<EntryPerson> lstEntryPerson, List<int> lstResultYosen)
        {
            lstEntryPerson.ForEach(x => x.Time_1kaisen = lstResultYosen[x.EntryId]);
        }

        //試合の結果をセット
        private void SetVSResult2(EntryPerson e1, EntryPerson e2)
        {
            if (e1.Time_1kaisen < e2.Time_1kaisen)
            {
                e1.Isfinal = true;
                e2.Isfinal = false;
            }
            else
            {
                e1.Isfinal = false;
                e2.Isfinal = true;
            }
        }

        private void setTableVal(List<int> lst,List<int> lst0,List<int> lst1,ref int[,] t)
        {
            ////1行目
            //int r0d = lst0[1] - lst0[0]; //等差
            //setRowVal(lst0[0], r0d, 0, ref t);

            ////2行目
            //int r1d = lst1[1] - lst1[0];
            //setRowVal(lst1[0], r1d, 1, ref t);
            
            for (int row_num = 0; row_num < t.GetLength(0); row_num++)
            {
                int d;
                switch (row_num)
                {
                    case 0:
                        d = lst0[1] - lst0[0];
                        setRowVal(lst0[0], d, row_num, ref t);
                        break;
                    case 1:
                        d = lst1[1] - lst1[0];
                        setRowVal(lst1[0], d, row_num, ref t);
                        break;
                    default:
                        //int x_0 = t[row_num - 2,0] + t[row_num - 1,0];
                        //int x_1 = t[row_num - 2, 1] + t[row_num - 1, 1];
                        //d = x_1 - x_0;
                        int d_tate0 = t[row_num - 1, 0] - t[row_num - 2, 0];
                        int d_tate1 = t[row_num - 1, 1] - t[row_num - 2, 1];
                        int x_0 = t[row_num - 1, 0] + d_tate0;
                        int x_1 = t[row_num - 1, 1] + d_tate1;
                        d = x_1 - x_0;
                        setRowVal(x_0, d, row_num, ref t);
                        break;
                }  
            }
        }
        private void setRowVal(int a,int d,int rowCnt,ref int[,] t)
        {
            for(int col_num = 0;col_num < t.GetLength(1); col_num++)
            {
                t[rowCnt, col_num] = a + ( d * col_num);
            }
        }

        //2次元配列用に入れ物を用意する
        //public struct IndexedItem2<T>
        //{
        //    public T Element { get; }
        //    public int X { get; }
        //    public int Y { get; }
        //    internal IndexedItem2(T element, int x, int y)
        //    {
        //        this.Element = element;
        //        this.X = x;
        //        this.Y = y;
        //    }
        //}

        //拡張メソッド
        //public static IEnumerable<IndexedItem2<T>> WithIndex<T>(this T[,] self)
        //{
        //    if(self == null)
        //    {
        //        throw new ArgumentNullException(nameof(self));
        //    }
        //    for (int x = 0; x < self.GetLength(0); x++)
        //        for (int y = 0; y < self.GetLength(1); y++)
        //            yield return new IndexedItem2<T>(self[x, y], x, y);
        //}
        //
        public  void Do1()
        {
            //input 1st row [0]に行数　[1]に列数が入る
            List<int> LstArr_1stRow = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();

            DataTable dataTable = new DataTable("table1");
            DataRow dr;

            //DataTableの列を生成
            for(int i = 0; i < LstArr_1stRow[1]; i++)
            {
                string columnName = "coiumn" + i.ToString();
                dataTable.Columns.Add(columnName,Type.GetType("System.Int32"));
            }

            //2nd row
            List<int> LstArr_2ndRow = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            //3rd row
            List<int> LstArr_3rdRow = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();

            //行（横方向）の等差を取得


            //列（縦方向）の等差を取得


            //DataTableに値をセット
        }
        ///// <summary>
        ///// 横方向の等差を返す
        ///// </summary>
        ///// <param name="arg_lst2ndrow"></param>
        ///// <returns>横の等差</returns>
        //private int getHorizonTousa(List<int> arg_lst2ndrow,int arg_rownum)
        //{
            
        //    return arg_lst2ndrow[1] - arg_lst2ndrow[0];
        //}
        /// <summary>
        /// 1,2行目をセット
        /// </summary>
        /// <param name="arg_lst2ndrow"></param>
        /// <param name="arg_lst3rdrow"></param>
        /// <returns>縦の等差</returns>
        private void set12row(List<int> arg_lst1strow,ref List<int> arg_lst2ndrow, ref List<int> arg_lst3rdrow,ref DataTable dataTable)
        {
            int colcnt = arg_lst1strow[1];
            int rowcnt = arg_lst1strow[0];

            int row1diff = arg_lst2ndrow[1] - arg_lst2ndrow[0];
            int row2diff = arg_lst3rdrow[1] - arg_lst3rdrow[0];

            for(int i = 1; i < rowcnt-1; i++)
            {
                arg_lst2ndrow.Add(arg_lst2ndrow[i] + row1diff);
                arg_lst3rdrow.Add(arg_lst3rdrow[i] + row2diff);
            }
            DataRow dr;
            for(int i = 0; i < 2; i++)
            {
                dr = dataTable.NewRow();

            }
        }



    }


}
