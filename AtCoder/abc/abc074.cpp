#include <bits/stdc++.h>
using namespace std;

int main(){
  int N, A;
  scanf("%d %d", &N, &A);
  printf("%d\n", N*N - A);
}

/*
xy平面
N個のぼーつ
i番目のボールは（xi,i)
→N本の直線y=1,y=2,...y=Nの上にそれぞれ1個ずつボールがある。
タイプA、BのロボットをN台ずつ用意
タイプAのロボットのうちi台目のものを位置（0,i)に、
タイプBのロボットのうちi台目のものを位置（K,i)に設置する。
→N本の直線それぞれの上にタイプAとBのロボットが1台ずつ設置される。

・タイプAのロボット
  位置（0,a）で起動されると、直線y=a上にあるボールの位置まで移動し、ボールを改修性手もとの位置（0,a)に停止する。そのようなボールが存在しない場合は何もせずに停止。
・タイプBのロボット
  位置（K,b）で起動されると、直線y=b上にあるボールの位置まで移動し、ボールを改修してもとの位置（K,b)に停止する。そのようなボールが存在しない場合は何もせずに停止。

これら2N台のロボットのうちいくつかを起動してボールをすべて改修する時、ロボットの非道距離の総和として考えれる値の最小値を求めよ。
*/
int main(){
  int N, K;
  scanf("%d %d", &N, &K);
  int ans = 0;
  for(int i = 1; i <= N; i++){
    int x;
    scanf("%d", &x);
    ans += min(x, K-x) * 2;
  }
  printf("%d\n", ans);
}
/*
操作 1: ビーカーに水を 100A [g] 入れる。
操作 2: ビーカーに水を 100B [g] 入れる。
操作 3: ビーカーに砂糖を C [g] 入れる。
操作 4: ビーカーに砂糖を D [g] 入れる。

すぬけ君の実験環境下では、水 100 [g] あたり砂糖は E [g] 溶けます。
すぬけ君はできるだけ濃度の高い砂糖水を作りたいと考えています。

ビーカーに入れられる物質の質量 (水の質量と砂糖の質量の合計) が 
F [g] 以下であり、 ビーカーの中に砂糖を溶け残らせてはいけないとき、 すぬけ君が作る砂糖水の質量と、それに溶けている砂糖の質量を求めてください。 答えが複数ある場合はどれを答えても構いません。

水 a [g] と砂糖 b [g] を混ぜた砂糖水の濃度は 100b/a+b[%]です。 また、この問題では、砂糖が全く溶けていない水も濃度 0 [%] の砂糖水と考えることにします。
+
*/
double noudo(int water, int sugar){
  return 100.0 * sugar / (water + sugar);
}
bool is_valid(double g_sugar, double g_water, int e, int f){
  if(g_sugar + g_water > f) return false;
  double max_g_sugar = (e * g_water)/100;
  if(g_sugar > max_g_sugar) return false;
  return true;
}
int main(){
  int A, B, C, D, E, F;
  scanf("%d %d %d %d %d %d", &A, &B, &C, &D, &E, &F);

  int ans_g_water = 0;
  int ans_g_sugar = 0;

  for (int a_cnt = 0; a_cnt <= 30;a_cnt++){
    for (int b_cnt = 0; b_cnt <= 30; b_cnt++){
      int g_water = 100 * A * a_cnt + 100 * B * b_cnt;
      if(g_water == 0) continue;

      for (int c_cnt = 0; c_cnt <= 30; c_cnt++){
        for (int d_cnt = 0; d_cnt <= 30; d_cnt++){
          int g_sugar = C * c_cnt + D * d_cnt;
          if(!is_valid(g_sugar, g_water, E, F)) continue;
          if(noudo(g_water,g_sugar) <= noudo(ans_g_water,ans_g_sugar)) continue;
          ans_g_water = g_water;
          ans_g_sugar = g_sugar;
        }
      }
    }
  }
  printf("%d %d\n", ans_g_water + ans_g_sugar, ans_g_sugar);
}