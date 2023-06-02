// Sに表せない文字で、辞書順で最小の英小文字を出力する
// Sにすべて含まれていたら、Noneを出力する

#include <bits/stdc++.h>
using namespace std;

int main(){
  string S;
  cin >> S;
  vector<bool> v(26, false);
  for(int i = 0; i < S.size(); i++){
    // printf("%c\n", S[i]);
    // printf("%d\n", S[i] - 'a');
    v[S[i] - 'a'] = true;
  }
  for(int i = 0; i < 26; i++){
    if(!v[i]){
      cout << (char)('a' + i) << endl;
      return 0;
    }
  }
  cout << "None" << endl;
}
