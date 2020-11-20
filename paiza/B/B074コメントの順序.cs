using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Paiza.B
{
    /*
     * あなたは動画共有サイトを開発しています。
サイト上のそれぞれの動画には、ユーザーがコメントをつけることができます。
あなたは、できるだけ注目の高いコメントを一番上に表示すべきと考え、開発を進めています。

ユーザーはコメントに対し、「いいね」をつけることとコメントに返信コメントをつけることができます。
そのため、各コメントは以下の 3 つの情報を持ちます。

・コメントの ID
・返信先のコメントの ID
・コメントにつけられた「いいね」数

あるコメントについて、注目度は以下のように定義します。

(注目度) = (「いいね」数) + (返信コメントの注目度の合計)

あなたのタスクは、注目度の一番高いコメントの ID を出力することです。

下図には入力例 1 の場合を示しました。

        入力例1
6
3 None 5
7 3 3
8 7 4
5 3 3
12 None 8
17 12 9

     */
	class B074コメントの順序
	{
        class Comment
        {
            public int ID{get;private set;}
            public int ReplyID{get;private set;}//Noneは0
            public int IineNum{get;set;}
            //public bool IsNone{get;set;}=false;
            public List<Comment> lstReplys{get;set;}
            public int Tyuumokudo{get;set;}
            public Comment(int id,int replyid,int iinenum)
            {
                this.ID = id;
                this.ReplyID = replyid;
                this.IineNum = iinenum;
                this.lstReplys = new List<Comment>();
            }
            public void SetTyuumokudo()
            {
                int tyuumokudo = this.IineNum;

                this.lstReplys.ForEach(a=>{
                    if(a.lstReplys.Count>0){
                        tyuumokudo += GetRepsIine(a);
                    }else{
                        tyuumokudo += a.IineNum;
                    }
                });

                //tyuumokudo += this.lstReplys.Sum(a=>a.IineNum);
                this.Tyuumokudo = tyuumokudo;
            }
            private int GetRepsIine(Comment c)
            {
                int sumIine = c.IineNum;
                c.lstReplys.ForEach(a=>{
                    if(a.lstReplys.Count>0){
                        sumIine += GetRepsIine(a);
                    }else{
                        sumIine += a.IineNum;
                    }
                });
                return sumIine;
            }
        }
        class CommentTyuumokudoCounter
        {
            public List<Comment> lstComments{get;set;}
            public CommentTyuumokudoCounter(List<Comment> comments)
            {
                this.lstComments = comments;
            }

            public int CalcMaxTyuumokudoCommentID()
            {
                var c = lstComments.Aggregate((result, next)=> result.Tyuumokudo > next.Tyuumokudo ? result : next);
                return c.ID;
                 //var c = lstComments.Max(a=>a.Tyuumokudo);
            }
        }
		public static void Answer()
		{
            int n = int.Parse(Console.ReadLine());
            List<Comment> lstComments = new List<Comment>();
            for(int i=0;i<n;i++)
            {
                int a,b,c;
                var tmpComment = Console.ReadLine().Split(' ');
                a = int.Parse(tmpComment[0]);
                c = int.Parse(tmpComment[2]);
                if(tmpComment[1]=="None"){
                    b = 0;
                    Comment comment = new Comment(a,b,c);
                    lstComments.Add(comment);
                }else{
                    b = int.Parse(tmpComment[1]);
                    Comment comment = new Comment(a,b,c);

                    lstComments.FirstOrDefault(com=>com.ID==b)?.lstReplys.Add(comment);
                    lstComments.Add(comment);
                }
            }
            for(int i=0;i<n;i++){
                if(lstComments[i].ReplyID==0){
                    lstComments[i].SetTyuumokudo();
                }
            }

            CommentTyuumokudoCounter tyuumokudoCounter = new CommentTyuumokudoCounter(lstComments);
            var ans = tyuumokudoCounter.CalcMaxTyuumokudoCommentID();
            Console.WriteLine(ans);
		}
	}
}
