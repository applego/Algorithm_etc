
// 入力から連続する3文字を取り出して、数値に変換し、753との差の絶対値を取る

#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    cin >> s;
    int ans = 753;
    for(int i = 0; i < s.size() - 2; i++){
        int x = stoi(s.substr(i, 3));
        ans = min(ans, abs(753 - x));
    }
    cout << ans << endl;
}