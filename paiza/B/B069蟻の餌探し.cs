using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.B
{
	class B069蟻の餌探し
    {
        /*
         * あなたは蟻をケージで飼育し、餌を探す様子を観察をしています。
ケージを縦 H cm　、横 W cm の大きさで、 1 cm 四方に区切って蟻の行動をおおまかに把握します。
左上から縦に y 番目かつ横に x 番目の座標を (y,x) とすると、蟻の巣は座標 (1,1) に作られています。
また、蟻は縦または横方向にしか動くことができません。

蟻はフェロモンと呼ばれる物質を道標として、餌にたどり着くことが知られています。
すなわち、蟻はフェロモンの有る座標のみ通ることができます。
そこで、ケージ内の各座標について、フェロモンの有無を測定できる装置を設置しました。

今、 N 個の餌をケージに配置します。
蟻は、あらかじめ測定しておいたフェロモンの情報のみにしたがって行動するとします。
このとき、蟻はすべての餌にたどり着くことができるでしょうか。
それを調べるプログラムを作成してください。
         */
        public static void Answer()
		{
            var l1 = Console.ReadLine().Split(' ');
            int H = int.Parse(l1[0]);int W = int.Parse(l1[1]);

            List<Pt> listFeloPt = new List<Pt>();

            AuntHouse auntHouse = new AuntHouse(W, H);
            auntHouse.SetAuntMasus();
            int N = int.Parse(Console.ReadLine());
            auntHouse.SetEsa(N);
            #region comment
            //bool[,] array_felomon = new bool[W, H];
            //List<int[]> listEsa = new List<int[]>();
            //List<Pt> listEsaPt = new List<Pt>();
            //for (int i = 0; i < N; i++)
            //{
            //    var ll = Console.ReadLine().Split(' ');
            //    //var esa = new int[2] { int.Parse(ll[0]), int.Parse(ll[1]) };
            //    ////var esa = new int[int.Parse(ll[0]), int.Parse(ll[1])];
            //    //listEsa.Add(esa);

            //    listEsaPt.Add(new Pt(int.Parse(ll[1])-1, int.Parse(ll[0])-1));
            //}

            //Dictionary<string, Pt> dicDrection = new Dictionary<string, Pt>()
            //{
            //    {"上",new Pt(0,-1) },
            //     {"右",new Pt(1,0) },
            //      {"下",new Pt(0,1) },
            //       {"左",new Pt(-1,0) },
            //};

            //var test = dicDrection["上"] + new Pt(0, 0);
            #endregion
            bool isContinue = true;

            while (isContinue)
            {

            }
		}
        public class Pt
        {
            public int X;
            public int Y;
            public Pt(int x,int y)
            {
                X = x;
                Y = y;
            }
        }
        public class AuntHouse
        {
            public int W { get; private set; }
            public int H { get; private set; }
            public List<AuntMasu> AuntMasus { get; set; }
            public AuntHouse(int w,int h)
            {
                this.W = w;
                this.H = h;
            }
            public void SetAuntMasus()
            {
                for(int row=0;row < this.H; row++)
                {
                    string li = Console.ReadLine();
                    for (int col = 0; col < this.W; col++)
                    {
                        bool isFelo = li[col] == '#';
                        AuntMasus.Add(new AuntMasu(col, row, isFelo));
                    }
                }
            }
            public void SetEsa(int n)
            {
                for(int i = 0; i < n; i++)
                {
                    var ll = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                    this.AuntMasus.FirstOrDefault(m => m.X == ll[1]-1 && m.Y == ll[0]-1).isEsa = true;
                }
            }
        }
        public class AuntMasu:Pt
        {
            //public Pt Pt { get; set; }
            public bool isFelo { get; private set; }
            public bool isEsa { get;  set; }
            public AuntMasu(int x, int y,bool isFelo)
                : base(x, y)
                {
                this.isFelo = isFelo;
                }
            }
        public class Aunt
        {
            public Pt PtNow { get; set; } = new Pt(0, 0);
            public AuntHouse AuntHouse { get; set; }
            public string PreAction { get; set; }
        }
	}
}
