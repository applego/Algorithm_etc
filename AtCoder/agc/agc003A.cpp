/*
高橋君は無限に広い 
2 次元平面上に住んでいて、
N 日間の旅行をします。 高橋君の旅程は長さ 
N の文字列 
S であり、はじめは家にいます。
i(1≦i≦N) 日目には、

S の 
i 文字目が N なら北に
S の 
i 文字目が W なら西に
S の 
i 文字目が S なら南に
S の 
i 文字目が E なら東に
正の距離だけ移動します。

高橋君は、各日の移動距離は決めていません。各日の移動距離をうまく決めることで、 高橋君が 
N 日間の旅程をすべて消化したときに家にいるようにできるかどうか判定してください。

*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    string S;
    cin >> S;

    int N = S.size();
    int N_count = 0, W_count = 0, S_count = 0, E_count = 0;
    for(int i = 0; i < N; i++){
        if(S[i] == 'N') N_count++;
        else if(S[i] == 'W') W_count++;
        else if(S[i] == 'S') S_count++;
        else if(S[i] == 'E') E_count++;
    }

    if((N_count == 0 && S_count == 0) || (N_count != 0 && S_count != 0)){
        if((W_count == 0 && E_count == 0) || (W_count != 0 && E_count != 0)){
            cout << "Yes" << endl;
            return 0;
        }
    }
    cout << "No" << endl;
    return 0;
}