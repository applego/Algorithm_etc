using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class C016
    {
        static void Do(string[] args)
        {
            string strinput = Console.ReadLine();

            char[] cs = strinput.ToCharArray();

            List<char> lstchar = new List<char>();
            foreach(char c in cs)
            {
                if(c == 'A'){ lstchar.Add('4');}
                else if(c == 'E') { lstchar.Add('3'); }
                else if(c == 'G') { lstchar.Add('6'); }
                else if (c == 'I') { lstchar.Add('1'); }
                else if (c == 'O') { lstchar.Add('0'); }
                else if (c == 'S') { lstchar.Add('5'); }
                else if (c == 'Z') { lstchar.Add('2'); }
                else { lstchar.Add(c); }
            }
            string result = "";
            for(int i = 0; i < lstchar.Count; i++)
            {
                result += lstchar[i];
            }
            Console.WriteLine(result);
        }
    }
}
//A	4
//A	4
//E	3
//G	6
//I	1
//O	0
//S	5
//Z	2