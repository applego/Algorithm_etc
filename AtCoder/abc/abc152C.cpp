/*
問題文理解できんかった

A[0] ～ A[i]の最小値がA[i]の時、条件を満たすものとしてカウントする
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    vector<int> P(N);
    for(int i = 0; i < N; i++){
        cin >> P[i];
    }

    int min = P[0];
    int count = 1;
    for(int i = 1; i < N; i++){
        if(P[i] <= min){
            count++;
            min = P[i];
        }
    }

    cout << count << endl;
}