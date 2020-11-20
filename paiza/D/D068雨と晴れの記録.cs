using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D068
    {
        public static int CountChar(string s,char c)
        {
            return s.Length - s.Replace(c.ToString(), "").Length;
        }
        public void Do()
        {
            //List<char> lstwea = new List<char>();
            int n =int.Parse(Console.ReadLine());
            string str = Console.ReadLine();

            int S = CountChar(str, 'S');
            int R = CountChar(str, 'R');

            Console.WriteLine(S + " " + R);
        }
    }
}


//あなたは文字列として記録された天気の分析をしています。
//その文字列は晴れの日を "S" 雨の日を "R" とし、 1 日ごとに記録していった長さ n の文字列です。

////文字列に記録された晴れの日数と、雨の日数をスペース区切りで出力してください。
//入力例1
//5
//SSRSR
//出力例1
//3 2