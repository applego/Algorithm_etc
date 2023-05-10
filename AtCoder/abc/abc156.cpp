/*
内部レーティング:
表示レーティング:
    参加回数が10以上の場合は内部レーティングと等しい
    10未満の場合は、内部レーティング - 100*(10-K)
        K:参加回数
*/
#include <bits/stdc++.h>
using namespace std;

int main_a() {
    int N, R;
    cin >> N >> R;
    if(N >= 10){
        cout << R << endl;
    }else{
        cout << R + 100*(10-N) << endl;
    }
    return 0;
}

// 整数NをK進数で表したとき、何桁になるかを求めてください。
int main_b(){
    int N, K;
    cin >> N >> K;
    // 整数NをK進数へ
    int ans = 0;
    while(N>0){
        N /= K;
        ++ans;
    }
    cout << ans << endl;
}

int main_c(){
    int N;
    cin >> N;
    vector<int> X(N);
    for(int i=0; i<N; ++i){
        cin >> X[i];
    }
    int ans = 1<<29;
    for(int i=1; i<=100; ++i){
        int sum = 0;
        for(int j=0; j<N; ++j){
            sum += (X[j]-i)*(X[j]-i);
        }
        ans = min(ans, sum);
    }
    cout << ans << endl;
}