using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Common
{
    static class Extension
    {
        public static int ToInt(this string num)
        {
            return int.Parse(num);
        }
    }
}
