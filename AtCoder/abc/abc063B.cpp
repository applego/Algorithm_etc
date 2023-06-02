
/*
英小文字あｋらなる文字列Ｓが与えられる。
Ｓに含まれる文字がすべて異なるか判定せよ。
*/


#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    cin >> s;
    sort(s.begin(), s.end());
    for(int i = 0; i < s.size() - 1; i++){
        printf("%c %c\n", s[i], s[i + 1]);
        if(s[i] == s[i + 1]){
            cout << "no" << endl;
            return 0;
        }
    }
    cout << "yes" << endl;
}

// ハッシュテーブルで一度出現しているか管理
int main(){
    string s;
    cin >> s;
    unordered_map<char, int> mp;
    for(int i = 0; i < s.size(); i++){
        mp[s[i]]++;
        if(mp[s[i]] > 1){
            cout << "no" << endl;
            return 0;
        }
    }
    cout << "yes" << endl;
}