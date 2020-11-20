using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Runtime.CompilerServices;

namespace paiza3
{
    public class D119円周率の日
    {
        string pai = "3.141592653589793";
        private int _N;
        public int N{
            get => _N;
            set => _N = value;
        }
        public D119円周率の日()
        {
            _N = int.Parse(Console.ReadLine());
        }

        public void Answer()
        {
            Console.WriteLine(pai.Substring(0, _N + 2));
        }
    }
}
