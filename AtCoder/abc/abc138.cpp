#include <bits/stdc++.h>
using namespace std;

// C

double mix(double a,double b){
  return (a+b)/2;
}

int main(){
  int N;
  cin >> N;
  vector<double> v(N);
  for (int i = 0; i < N; i++){
    cin >> v[i];
  }
  sort(v.begin(), v.end());
  double ans = v[0];
  for (int i = 1; i < N; i++){
    ans = mix(ans, v[i]);
  }
  cout << ans << endl;
}

