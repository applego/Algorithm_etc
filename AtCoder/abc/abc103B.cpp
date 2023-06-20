/*

*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    string S, T;
    cin >> S >> T;
    int len = S.size();
    bool flag = false;
    for(int i = 0; i < len; i++){
        if(S == T){
            flag = true;
            break;
        }
        S = S.at(len - 1) + S.substr(0, len - 1);
    }
    if(flag){
        cout << "Yes" << endl;
    }else{
        cout << "No" << endl;
    }
}