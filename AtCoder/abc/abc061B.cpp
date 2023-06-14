/*
B - Counting Roads  / 
実行時間制限: 2 sec / メモリ制限: 256 MB

配点 : 
200 点

問題文
N 個の都市があり、
M 本の道路があります。
i(1≦i≦M) 番目の道路は、都市 
a 
i
​
  と 都市 
b 
i
​
  
(1≦a 
i
​
 ,b 
i
​
 ≦N) を双方向に結んでいます。
同じ 
2 つの都市を結ぶ道路は、
1 本とは限りません。
各都市から他の都市に向けて、何本の道路が伸びているか求めてください。

制約
2≦N,M≦50
1≦a 
i
​
 ,b 
i
​
 ≦N
a 
i
​
 

=b 
i
​
 
入力は全て整数である。
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N, M;
    cin >> N >> M;
    vector<int> ans(N);
    for(int i=0; i<M; i++){
        int a, b;
        cin >> a >> b;
        ans.at(a-1)++;
        ans.at(b-1)++;
    }

    for(int i=0; i<N; i++){
        cout << ans.at(i) << endl;
    }
    return 0;
}