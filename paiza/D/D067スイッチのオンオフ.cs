using System;

namespace paiza3
{
    class D067
    {
        public void Do()
        {
            int n = Convert.ToInt32(Console.ReadLine());

            if(n%2 == 0)
            {
                Console.WriteLine("OFF");
            }
            else
            {
                Console.WriteLine("ON");
            }
        }
    }
}


//あなたはスイッチの状態を表示するプログラムを作成しています。
//そのスイッチは1度押すと "ON" と "OFF" が切り替わります。

//スイッチの初期状態は "OFF" でスイッチを押した回数 n が入力されるので n 回スイッチが押された後の状態を出力してください。

//評価ポイント