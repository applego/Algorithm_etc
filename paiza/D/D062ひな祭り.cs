using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D062
    {
        public void Do()
        {
            //string str = "2 3 5";

            string str = Console.ReadLine();
            string[] arstr = str.Split(' ');

            string result1 = "";
            string result2 = "";
            string result3 = "";
            for(int i = 1;i <= int.Parse(arstr[0]); i++)
            {
                result1 += i.ToString();
            }
            for(int i = int.Parse(arstr[0])+1;i<= int.Parse(arstr[0])+ int.Parse(arstr[1]); i++)
            {
                result2 += i.ToString();
            }
            for(int i = int.Parse(arstr[0]) + int.Parse(arstr[1]) + 1; i <= int.Parse(arstr[0])  + int.Parse(arstr[1]) + int.Parse(arstr[2]); i++)
            {
                result3 += i.ToString();
            }
            string result11 = result1.Replace("10", "J").Replace("1", "A").Replace("2", "B").Replace("3", "C").Replace("4", "D").Replace("5", "E").Replace("6", "F").Replace("7", "G").Replace("8", "H").Replace("9", "I");
            string result12 = result2.Replace("10", "J").Replace("1", "A").Replace("2", "B").Replace("3", "C").Replace("4", "D").Replace("5", "E").Replace("6", "F").Replace("7", "G").Replace("8", "H").Replace("9", "I");
            string result13 = result3.Replace("10", "J").Replace("1", "A").Replace("2", "B").Replace("3", "C").Replace("4", "D").Replace("5", "E").Replace("6", "F").Replace("7", "G").Replace("8", "H").Replace("9", "I");

            Console.WriteLine(result11);
            Console.WriteLine(result12);
            Console.WriteLine(result13);

        }
    }
}

//入力例1
//2 3 5
//出力例1
//AB
//CDE
//FGHIJ
