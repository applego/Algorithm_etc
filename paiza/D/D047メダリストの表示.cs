using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class D047
    {
        public void Do()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("Gold ");
            sb.Append(Console.ReadLine());
            Console.WriteLine(sb);

            sb.Clear();
            sb.Append("Silver ");
            sb.Append(Console.ReadLine());
            Console.WriteLine(sb);

            sb.Clear();
            sb.Append("Bronze ");
            sb.Append(Console.ReadLine());
            Console.WriteLine(sb);
        }
    }
}
