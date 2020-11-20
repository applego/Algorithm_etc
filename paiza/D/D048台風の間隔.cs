using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D048
    {
        public void Do()
        {
            string[] typhoons;
            typhoons = new string[5];
            for (int i = 0; i < 5; i++)
            {
                typhoons[i] = Console.ReadLine();
            }
            for (int i = 0; i < 4; i++)
            {

                Console.WriteLine(int.Parse(typhoons[i + 1]) - int.Parse(typhoons[i]));
            }
        }
    }
}
