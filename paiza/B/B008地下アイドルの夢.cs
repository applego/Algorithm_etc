using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3
{
    class B008
    {
        public void Do()
        {
            string strInput = Console.ReadLine();
            string[] ArrStrInput = strInput.Split(' ');
            int Nin = int.Parse(ArrStrInput[0]);
            int Mkai = int.Parse(ArrStrInput[1]);

            List<int> ansIncomeList = new List<int>();

            for(int i = 0; i < Mkai; i++)
            {
                List<int> tempIncomeRow = new List<int>();
                string[] arrStrInputrow = Console.ReadLine().Split(' ');
                foreach(string s in arrStrInputrow)
                {
                    tempIncomeRow.Add(int.Parse(s));
                }
                if (tempIncomeRow.Sum() > 0)
                    ansIncomeList.Add(tempIncomeRow.Sum());
            }
            Console.WriteLine(ansIncomeList.Sum());
        }
    }
}

/*
 「0だった。今年の利益は0。去年も0。その前も、さらにその前も、ずっとずっと0。来年こそは必ず……」 

そう語るあなたの友人の地下アイドルをプロデュースすることになりました。 

彼女のファンクラブには会員がN人います。彼女はファンクラブ会員限定のライブイベントを行いますが、 
ライブごとにある一定の開催費用がお客一人当たりにかかります。彼女のファンクラブ会員はとても結束力が強く、 
どんなライブも開催すれば全員が必ず参加していました。そこで全員から一人当たりの費用以上の入場料を徴収すれば赤字にはなりませんが、 
以前それを実行したところファンクラブ会員が激減してしまったため、現在は無料でライブを開催し、 
グッズを売ることで売上を得る戦略をとっています。 

来年は全部でM回のライブイベントを開催予定です。 
ただし、すべてのライブを適当に開催すると赤字だらけになる可能性があるので、開催するライブを適切に選択する必要があります。 
それぞれのライブごとに各ファンクラブ会員がもたらす損益の情報が存在します。損益とは過去の統計情報から得た、 
そのイベントにおいて各会員に対し予測されるグッズの購入額から、会員一人当たりのライブ開催費用を引いたものです。 
ある会員があまりグッズを買わないと予測されると、この値は負になることがあります。 
これはその会員が損失をもたらすことを意味しています。 

例えば会員数N = 3, イベント回数M = 5 で、ライブイベントの情報が以下のとおりだったとしましょう。 
  */

//入力例2
//2000 1 1
//出力例2
//2000/1/1