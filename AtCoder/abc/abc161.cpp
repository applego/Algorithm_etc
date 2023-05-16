#include <bits/stdc++.h>
using namespace std;


int main() {
  long long N,K;
  cin >> N >> K;
  long long  ans = N;

  // if(k==1){
  //   cout << 0 << endl;
  //   return 0;
  // }
  
  // while(true){
  //   // N - Kの絶対値
  //   long long  abs1 = abs(ans-K);
  //   // printf("abs1: %d\n", abs1);
  //   if(abs1 < ans) ans = abs1;
  //   else break;
  // }

  long long ans = min(N%K, K-N%K);

  cout << ans << endl;
}

#include <bits/stdc++.h>
using namespace std;


int main() {
  long long N,K;
  cin >> N >> K;
  cout << min(N%K, K-N%K) << endl;
}