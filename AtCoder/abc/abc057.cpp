#include <bits/stdc++.h>
using namespace std;


int main() {
  long long N;
  cin >> N;
  // 最小値をintで保持
  int ans = (1<<29);
  for (long long i = 1; i * i <= N;++i){
    if(N%i==0){
      // iとN/iの最小値をcandidatesにpush
      // iとN/iを出力
      // cout << i << " " << N/i << endl;
      auto bigger = max(i, N/i);
      // smallerの桁数を求める
      int digit = 0;
      while(bigger>0){
        bigger /= 10;
        ++digit;
      }
      if(digit<ans) ans = digit;
    }
  }
  cout << ans << endl;
}