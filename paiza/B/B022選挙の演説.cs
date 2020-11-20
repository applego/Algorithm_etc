using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    class B022選挙の演説
    {
        public void Answer()
        {
            int M;
            int N;
            int K;
            /*

             */
            var inputf = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            M = inputf[0];
            N = inputf[1];
            K = inputf[2];
            List<int> lists = new List<int>();
            for(int i = 0; i < M; i++)
            {
                lists.Add(new int());
            }
            lists.Add(N);
            for(int i = 0; i < K; i++)
            {
                var input = int.Parse(Console.ReadLine());
                var otherlist = lists
                    .Select((v, index) => new { Value = v, Index = index })
                    .Where(item => item.Index != input - 1&&item.Value>0);
                lists[input - 1] += otherlist.Count();
                var otherindexlist = otherlist.Select(item => item.Index);
                otherindexlist.ToList().ForEach(x =>
                {
                    lists[x]--;
                });
            }
            lists.RemoveAt(lists.Count-1);
            var answerlist = lists
                .Select((v,index)=>new { Value = v, Index = index })
                .Where(item => item.Value==lists.Max())
                .OrderBy(item=>item.Index)
                .Select(item=>item.Index+1);
            answerlist.ToList().ForEach(x => {
                Console.WriteLine(x);
            });
            Console.ReadKey();
        }
    }
}
