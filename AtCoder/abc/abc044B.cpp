/*
wの文字数が奇数→No
wの文字数が偶数→各文字の出現回数が偶数→Yes
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    string w;
    cin >> w;
    int w_size = w.size();
    if(w_size % 2 != 0){
        cout << "No" << endl;
        return 0;
    }
    int count[26] = {0};
    for(int i = 0; i < w_size; i++){
        count[w[i] - 'a']++;
    }
    for(int i = 0; i < 26; i++){
        if(count[i] % 2 != 0){
            cout << "No" << endl;
            return 0;
        }
    }
    cout << "Yes" << endl;
}