using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace paiza3
{
    class B025うさぎジャンプ
    {
        int N;
        int M;
        int K;
        //List<int> shigemi_lists = new List<int>();
        Dictionary<int, int> shigemi_dic = new Dictionary<int, int>();

        public void Answer()
        {
            //var shigemi_lists_ = new List<int>().Select((a,b)=>new { Value = a, Index = b });

            /*

             */
            var inputf = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            N = inputf[0];
            M = inputf[1];
            K = inputf[2];
            for(int i = 0; i < N; i++)
            {
                //shigemi_lists.Add(new int());
                shigemi_dic.Add(i, new int());
            }
            for(int i = 0; i < M; i++)
            {
                //shigemi_lists[int.Parse(Console.ReadLine())-1] = 1;
                shigemi_dic[int.Parse(Console.ReadLine()) - 1] = 1;
            }
            for(int i = 0; i < K; i++)
            {
                //ChangeUsagi(ref shigemi_lists);
                ChangeUsagi(ref shigemi_dic);
            }

            Console.ReadKey();
        }
        private bool IsIkkosakiniusagiiru(Dictionary<int,int> vs, int i)
        {
            bool result;
            if (i == N - 1)
            {
                result = (vs[0] > 0);
            }
            else
            {
                result = (vs[i + 1] > 0);
            }
            return result;
        }
        private bool IsIkkosakiniusagiiru(List<int> vs,int i)
        {
            bool result;
            if (i == N-1)
            {
                result = (vs[0]>0);
            }
            else
            {
                result = (vs[i + 1] > 0);
            }
            return result;
        }
        private void ChangeUsagi(ref Dictionary<int,int> vs)
        {
            var usagiiruindexlist = vs
                .Where(a => a.Value > 0)
                .Select(a => a.Key);

            //.Select((v, i) => new { Value = v, Index = i })
            //.Where(item => item.Value > 0)
            //.Select(item => item.Index);

            //List<int> vs2 = new List<int>(vs);
            Dictionary<int, int> vs2 = new Dictionary<int, int>(vs);
            usagiiruindexlist.ToList().ForEach(item =>
            {
                var v_i = item;
                for (int i = 0; i < N; i++)
                {
                    //var v_i = item%(N+i);
                    if (i != 0 && v_i == N - 1)
                    {
                        v_i = 0;
                    }
                    else if (i != 0)
                    {
                        v_i++;
                    }
                    if (IsIkkosakiniusagiiru(vs2, v_i))
                    {
                        continue;
                    }
                    else
                    {
                        //一個先にうさぎがいないとき
                        if (v_i == N - 1)
                        {
                            vs2[0] = 1;
                        }
                        else
                        {
                            vs2[v_i + 1] = 1;
                        }
                        vs2[item] = 0;
                        break;
                    }
                }
            });
            vs = vs2;
        }
        private void ChangeUsagi(ref List<int> vs)
        {
            var usagiiruindexlist = vs
                .Select((v, i) => new { Value = v, Index = i })
                .Where(item => item.Value > 0)
                .Select(item => item.Index);

            List<int> vs2 = new List<int>(vs);
            usagiiruindexlist.ToList().ForEach(item =>
            {
                var v_i = item;
                for (int i = 0;i<N;i++)
                {
                    //var v_i = item%(N+i);
                    if (i != 0 && v_i == N-1)
                    {
                        v_i = 0;
                    }
                    else if(i!=0)
                    {
                        v_i++;
                    }
                    if (IsIkkosakiniusagiiru(vs2,v_i))
                    {
                        continue;
                    }
                    else
                    {
                        //一個先にうさぎがいないとき
                        if (v_i == N - 1)
                        {
                            vs2[0] = 1;
                        }
                        else
                        {
                            vs2[v_i + 1] = 1;
                        }
                        vs2[item] = 0;
                        break;
                    }
                }
            });
            vs = vs2;
        }
    }
}
