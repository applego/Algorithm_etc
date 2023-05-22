#include <bits/stdc++.h>
using namespace std;


int main() {
  int N;
  cin >> N;
  // key: index, value:value
  map<int, int> s;
  for (int i = 0; i < N; i++){
    int a;
    cin >> a;
    s[i+1] = a;
  }
  vector<int> ans(N);
  for (int i = 0; i < N; i++){
    ans[s[i+1]-1] = i+1;
  }
  for (int i = 0; i < N; i++){
    cout << ans[i] << " ";
  }
}