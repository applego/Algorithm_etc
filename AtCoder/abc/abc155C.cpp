/*
N 枚の投票用紙があり、
i (1≤i≤N) 枚目には文字列 
S 
i
​
  が書かれています。

書かれた回数が最も多い文字列を全て、辞書順で小さい順に出力してください。
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
  int n;
  cin >> n;
  map<string, int> mp;
  for(int i = 0; i < n; i++){
    string s;
    cin >> s;
    mp[s]++;
  }
  int max = 0;
  for(auto itr = mp.begin(); itr != mp.end(); itr++){
    if(max < itr->second){
      max = itr->second;
    }
  }
  for(auto itr = mp.begin(); itr != mp.end(); itr++){
    if(max == itr->second){
      cout << itr->first << endl;
    }
  }
}