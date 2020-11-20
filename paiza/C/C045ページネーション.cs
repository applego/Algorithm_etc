using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//n s p

namespace paiza3
{
    public class C045ページネーション
    {
        public void Do()
        {
            var arrTmpInput = Console.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
            var n = arrTmpInput[0];  //結果件数
            var s = arrTmpInput[1];  //ページサイズ
            var p = arrTmpInput[2];  //表示指定ページ

            //指定ページの検索結果インデックスを全て表示する（ 区切り）※結果がなければ"none"
            var pageCnt = Math.Ceiling((double)n / s);
            
            List<page_element> page_Elements = new List<page_element>();
            page_element pe;
            int v_startResultIndex = 1;
            for (int pageIndex = 1;pageIndex <= pageCnt; pageIndex++)  //ページ毎
            {
                for(int resultIndex = v_startResultIndex; resultIndex <= s * pageIndex; resultIndex++)  //検索結果毎
                {
                    if (resultIndex > n)
                        break;
                    pe = new page_element(resultIndex, pageIndex);
                    page_Elements.Add(pe);
                }
                v_startResultIndex += s;
            }
            var output = page_Elements.Where(x => x.Pagenum == p).Select(y => y.Searchresutlindex).ToList();
            string strOutput = "";
            int i = 0;
            output.ForEach(x =>
            {
                if (i == 0)
                    strOutput += x.ToString();
                else
                    strOutput += (" " + x.ToString());

                i++;
            });
            if (strOutput == "")
                strOutput = "none";

            Console.WriteLine(strOutput);
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
