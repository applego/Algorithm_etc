#include <bits/stdc++.h>
using namespace std;

// B

int main(){
  int N, M, X;
  cin >> N >> M >> X;
  vector<int> A(M);
  for (int i = 0; i < M; i++){
    cin >> A[i];
  }
  int ans = 0;
  for (int i = 0; i < M; i++){
    if(A[i] < X){
      ans++;
    }
  }
  cout << min(ans, M-ans) << endl;
}

