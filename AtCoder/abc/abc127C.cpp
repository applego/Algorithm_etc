#include <bits/stdc++.h>
using namespace std;

int main(){
    int N, M;
    cin >> N >> M;

    int L = 0, R = N;
    for(int i = 0; i < M; i++){
        int l, r;
        cin >> l >> r;

        L = max(L, l);
        R = min(R, r);
    }

    cout << max(0, R - L + 1) << endl;   
}