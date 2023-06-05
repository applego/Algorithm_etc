#include <bits/stdc++.h>
using namespace std;

int main(){
    long long N, K, Q;
    cin >> N >> K >> Q;

    vector<long long> A(Q);
    for(int i = 0; i < Q; i++){
        cin >> A[i];
    }

    vector<long long> score(N, 0);
    for(int i = 0; i < Q; i++){
        score[A[i] - 1]++;
    }

    for(int i = 0; i < N; i++){
        if(K - Q + score[i] > 0){
            cout << "Yes" << endl;
        }else{
            cout << "No" << endl;
        }
    }
    return 0;
}