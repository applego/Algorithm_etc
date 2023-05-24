#include <bits/stdc++.h>
using namespace std;

// B

int main(){
  int s;
  cin >> s;
  vector<int> a(1000001);
  a[0] = s;
  for (int i = 1; i < 1000001; i++){
    if(a[i-1] % 2 == 0){
      int ai = a[i-1] / 2;
      if(find(a.begin(), a.end(), ai) != a.end()){
        cout << i+1 << endl;
        return 0;
      }
      a[i] = ai;
    }else{
      int ai = 3 * a[i-1] + 1;
      if(find(a.begin(), a.end(), ai) != a.end()){
        cout << i+1 << endl;
        return 0;
      }
      a[i] = ai;
    }
  }
}

bool bt[1000001] = {};
int main_4052746(){
  int n, it = 1;
  cin >> n;
  while(!bt[n]){
    printf("%d ", n);
    printf("%d ", bt[n]);
    printf("%d\n", it);
    bt[n] = 1;
    if(n%2){
      n = 3 * n + 1;
    }
    else{
      n /= 2;
    }
    it++;
  }
  cout << it << endl;
  return 0;
}

