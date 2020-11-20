using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D035
    {
        public void Do()
        {
            string str = "\n\n\n\n福利厚生は基本、各事業部毎に異なります。自分の所属する事業部の商品は社割できるが、同じ会社でも違う事業部の商品は基本社割できません。\nまた、年に何回か各事業部毎に社内セールがあり、それはかなり格安で購入できます。\n洋服、バッグ、アクセサリー、生活雑貨とかなり幅広く展開してる為、幅広い商品を格安で手に入れることができます。";
            str = str.Replace("【良い点】", "");
            //str = str.Replace("", "");
            string str2 = "30 時間 / 月";
            str2 = str2.Replace("時間 / 月", "");
            
        }
    }
}


//入力例2
//2000 1 1
//出力例2
//2000/1/1