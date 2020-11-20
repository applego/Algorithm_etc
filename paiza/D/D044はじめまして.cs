using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.D
{
	class D044はじめまして
	{
		public static void Answer()
		{
			string[] input = Console.ReadLine().Split(' ');
			string name = input[0];
			string sex = input[1];

			if (sex == "M")
			{
				Console.WriteLine("Hi, Mr. " + name);
			}
			else if (sex == "F")
			{
				Console.WriteLine("Hi, Ms. " + name);
			}
		}
	}
}
