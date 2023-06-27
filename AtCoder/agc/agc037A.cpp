/*
英小文字からなる文字列 
S が与えられます。以下の条件をみたす最大の正整数 
K を求めてください。

S の空でない 
K 個の文字列への分割 
S=S 
1
​
 S 
2
​
 ...S 
K
​
  であって 
S 
i
​
 

=S 
i+1
​
  (
1≦i≦K−1) を満たすものが存在する。
ただし、
S 
1
​
 ,S 
2
​
 ,...,S 
K
​
  をこの順に連結して得られる文字列のことを 
S 
1
​
 S 
2
​
 ...S 
K
​
  によって表しています。

深さ優先探索？を行う？
最初1文字で区切って、同じ文字列がすでにあったら2,3と増やしていく。

*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    cin >> s;
    
    int ans = s.size();
    for(int i = 0; i+1<s.size(); i++){
      // printf("%c %c\n", s[i], s[i+1]);

      if(s[i] == s[i+1]){
        ans--, i+=2;
      }

      // printf("%d\n", ans);
      // printf("%d\n", i);
    }
    cout << ans << endl;
}

