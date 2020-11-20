using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Common
{
	class MeasureTime: Stopwatch
    {
        #region 旧（Stopwatch継承前)
        public static Stopwatch GetStartedSW()
		{
			Stopwatch sw = new Stopwatch();
			sw.Start();
			return sw;
		}
        public static void WriteSWResult(string shori, ref Stopwatch sw, bool isReset)
        {
            // 結果表示
            TimeSpan ts = sw.Elapsed;
            Console.WriteLine($"■{shori}にかかった時間:{ts}  {sw.ElapsedMilliseconds}");
            if (isReset)
                sw.Reset();
        }
        #endregion
        #region 新 継承後
        //Stopwatch _stopwatch;
        public MeasureTime()
            :base()
        {
            //_stopwatch = new Stopwatch();
        }
        public void WriteSWResult(string shori)
        {
            // 結果表示
            TimeSpan ts = this.Elapsed;
            Console.WriteLine("{0,20 }",
            $@"■{shori}にかかった時間:
{ts}  {this.ElapsedMilliseconds}");
        }
        #endregion
    }
}
