#include <bits/stdc++.h>
using namespace std;


int main() {
  int N;
  cin >> N;
  vector<int> D(N);
  for (int i = 0; i < N; i++){
    cin >> D[i];
  }
  sort(D.begin(), D.end());
  int ans = D[N/2] - D[N/2-1];
  cout << ans << endl;
}