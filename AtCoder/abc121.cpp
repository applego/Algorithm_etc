#include <bits/stdc++.h>
using namespace std;

/*
H行、W列の白色のマス目
h個の行とw個の列を選び、選んだ行または列に含まれるマス目をすべて黒色で塗りつぶす
白色のマス目はいくつになるか

*/
int main(){
  int H,W,h,w;
  cin >> H >> W >> h >> w;
  cout << (H-h)*(W-w) << endl;
}

/*
N個のソースコード
i個目のソースコードはAi1,Ai2,...,AiMのM個の整数で表されます。
また、整数B1,B2,...BMと整数Cが与えられます。
Ai1B1＋Ai2B2＋...＋AiMBM＋C>0の時に限り、i個目のソースコードはこの問題に正答するソースコードです。
N個のソースコードのうち、個の問題に正答するソースコードの個数を求めてください。
*/
int main() {
  int N,M,C;
  cin >> N >> M >> C;
  vector<int> B(M);
  for(int i=0;i<M;++i) cin >> B[i];
  long ans = 0;
  for(int i=0;i<N;++i){
    int sum = 0;
    for(int j=0;j<M;++j){
      int A;
      cin >> A;
      sum += A*B[j];
    }
    if(sum+C>0) ++ans;
  }
  cout << ans << endl;
  return 0;
}

/*
M本の栄養ドリンクを買い集める
栄養ドリンクが売られている店はN軒あり、i軒目の店ではAi円/本でBi本まで変える。
最小で名年あればM本の栄養ドリンクを買い集められるか？
*/
int main(){
  long long N,M;
  cin >> N >> M;
  vector<pair<long long,long long>> AB(N);
  for(int i=0;i<N;++i){
    cin >> AB[i].first >> AB[i].second;
  }
  sort(AB.begin(),AB.end());
  long long ans = 0;
  for (int i = 0; i < N;++i){
    if(M>AB[i].second){
      ans += AB[i].first * AB[i].second;
      M -= AB[i].second;
    }
    else{
      ans += AB[i].first * M;
      break;
    }
  }
  cout << ans << endl;
}

bool compare(const pair<long long, long long>& a, const pair<long long, long long>& b) {
    if (a.first == b.first) {
        return a.second < b.second;
    }
    return a.first < b.first;
}

int main() {
    long long N, M;
    cin >> N >> M;
    vector<pair<long long, long long>> AB(N);
    for (int i = 0; i < N; ++i) {
        cin >> AB[i].first >> AB[i].second;
    }
    sort(AB.begin(), AB.end(), compare);  // カスタムの比較関数を使用してソート
    long long ans = 0;
    for (int i = 0; i < N; ++i) {
        if (M > AB[i].second) {
            ans += AB[i].first * AB[i].second;
            M -= AB[i].second;
        } else {
            ans += AB[i].first * M;
            break;
        }
    }
    cout << ans << endl;
    return 0;
}