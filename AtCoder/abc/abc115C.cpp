/*
問題文
とある世界では、今日はクリスマスイブです。

高羽氏の庭には 
N 本の木が植えられています。
i 本目の木 
(1≤i≤N) の高さは 
h 
i
​
  メートルです。

彼は、これらの木のうち 
K 本を選んで電飾を施すことにしました。より美しい光景をつくるために、できるだけ近い高さの木を飾り付けたいです。

より具体的には、飾り付ける木のうち最も高いものの高さを 
h 
max
​
  メートル、最も低いものの高さを 
h 
min
​
  メートルとすると、
h 
max
​
 −h 
min
​
  が小さいほど好ましいです。
h 
max
​
 −h 
min
​
  は最小でいくつにすることができるでしょうか？

N本のうちK本飾り付ける
飾り付けた内、気の高さが最大をh_max,最小をh_minとする
h_max-h_minが最小値になるように、K本選ぶ


*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N,K;
    cin >> N >> K;
    vector<int> h(N);
    for(int i=0;i<N;i++){
        cin >> h.at(i);
    }
    sort(h.begin(),h.end());
    int ans = 1000000000;
    for(int i=0;i<N-K+1;i++){
        // printf("h.at(i+K-1):%d\n",h.at(i+K-1));
        // printf("h.at(i):%d\n",h.at(i));

        // printf("ans:%d\n",ans);
        // printf("h.at(i+K-1)-h.at(i):%d\n",h.at(i+K-1)-h.at(i));
        ans = min(ans,h.at(i+K-1)-h.at(i));
    }
    cout << ans << endl;
    return 0;
}