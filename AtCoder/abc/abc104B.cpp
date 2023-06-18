/*
文字列 
S が与えられます。
S のそれぞれの文字は英大文字または英小文字です。 
S が次の条件すべてを満たすか判定してください。

S の先頭の文字は大文字の A である。
S の先頭から 
3 文字目と末尾から 
2 文字目の間（両端含む）に大文字の C がちょうど 
1 個含まれる。
以上の A, C を除く 
S のすべての文字は小文字である。
制約
4≤∣S∣≤10 （
∣S∣ は文字列 
S の長さ）
S のそれぞれの文字は英大文字または英小文字である。

出力
S が問題文中の条件すべてを満たすなら AC、そうでなければ WA と出力せよ。
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    cin >> s;
    int n = s.size();
    
    // condition 1
    if(s[0] != 'A'){
        cout << "WA" << endl;
        return 0;
    }
    // condition 2
    int cntC = 0;
    int idxC = 0;
    for(int i = 2; i < n-1; i++){
        if(s[i] == 'C'){
            cntC++;
            idxC = i;
        }
    }
    if(cntC != 1){
        cout << "WA" << endl;
        return 0;
    }
    // condition 3
    for(int i = 1; i < n; i++){
        if(i == idxC) continue;
        if(s[i] < 'a' || s[i] > 'z'){
            cout << "WA" << endl;
            return 0;
        }
    }
    cout << "AC" << endl;
    return 0;
}