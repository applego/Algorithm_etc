/*
左右一列にN枚のタイルが並んでいる
各タイルの始めの色は長さNの文字列Sで表される
左からi番目のタイルは、Sのi番目の文字が0の時黒で、1の時白である
高橋君は、タイルをいくつか塗り替えることにして、どの隣り合う2舞のタイルも異なる色で塗られているようにしたい
最小で何枚のタイルを塗り替えればよいか求めよ

最初の並び

パターン
1.　先頭を黒にする（0)
2.　先頭を白にする（1）

どちらの方が塗り替える枚数が少ないかを調べる
*/

#include <bits/stdc++.h>
using namespace std;

// 入れ替え回数をカウント
int countTilesToPaint(string s, char odd, char even){
  int n = s.size();
  int ans = 0;
  for(int i = 0; i < n; i++){
      if(i % 2 == 0){
          if(s[i] != even) ans++;
      }else{
          if(s[i] != odd) ans++;
      }
  }
  return ans;
}

int main(){
  string s;
  cin >> s;

  int ans = countTilesToPaint(s,'0','1');
  int ans2 = countTilesToPaint(s,'1','0');
  cout << min(ans, ans2) << endl;
  return 0;  
}