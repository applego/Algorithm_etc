using System;
using System.Collections.Generic;
using System.Text;

namespace paiza3
{
    class D066
    {
        public void Do()
        {
            //string str = "33 10";

            string str = Console.ReadLine();
            string[] strnum = str.Split(' ');
            List<int> lstnum = new List<int>();
            foreach (string s in strnum)
            {
                lstnum.Add(int.Parse(s));
            }
            if(lstnum[0] - lstnum[1] > 0)
            {
                Console.WriteLine("No");
            }else
            {
                Console.WriteLine(lstnum[1] - lstnum[0]);
            }
        }
    }
}
