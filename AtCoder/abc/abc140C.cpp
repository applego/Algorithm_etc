/*
問題文
長さ 
N の値の分からない整数列 
A があります。

長さ 
N−1 の整数列 
B が与えられます。このとき、

B 
i
​
 ≥max(A 
i
​
 ,A 
i+1
​
 )

が成立することが分かっています。

A の要素の総和として考えられる値の最大値を求めてください。

制約
入力は全て整数
2≤N≤100
0≤B 
i
​
 ≤10 
5
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
  int N;
  cin >> N;
  // BはN-1個の数列（インデックスは0からN-2まで）
  vector<int> B(N-1);
  for(int i=0; i<N-1; i++){
    cin >> B.at(i);
  }

  // 数列Aの最初と最後はBの最初と最後の値
  long long ans = B.at(0) + B.at(N-2);
  for (int i=0; i<N-2; i++){
    ans += min(B.at(i), B.at(i+1));
  }
  
  cout << ans << endl;
  return 0;
}