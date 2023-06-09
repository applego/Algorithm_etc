/*
入力
N M
K1 A11 A12 ... A1K1
K2 A21 A22 ... A2K2
...
KN AN1 AN2 ... ANKN

出力
答え

制約
1≤N,M≤30

言語化
N人の全員が好きと答えた食べ物は何個あるか
複数の配列すべてでの共通の値は何個あるか
一回でも解答されなかった食べ物（ID）は対象外とする
最初Mから、対象外になったら減らしていく？
    一人に対する処理
        解答（食べ物）を一つずつ見ていく
        まだ全員に選ばれる可能性があるものだけ判定
            含まれていたらキープ
            含まれていなかったら対象外にする
食べ物IDとtrue/falseのフラグのハッシュを用意する？
初期はすべて、true

or Ans = M

*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N, M;
    cin >> N >> M;
    vector<int> A(N);
    vector<vector<int>> B(N, vector<int>(M));
    for(int i=0; i<N; i++){
        cin >> A[i];
        for(int j=0; j<A[i]; j++){
            cin >> B[i][j];
        }
    }
    vector<int> C(M);
    for(int i=0; i<N; i++){
        for(int j=0; j<A[i]; j++){
            C[B[i][j] - 1]++;
        }
    }

    // 出力
    printf("A: ");
    for(int i=0; i<N; i++){
        printf("%d ", A[i]);
    }
    printf("\n");
    printf("B: \n");
    for(int i=0; i<N; i++){
        for(int j=0; j<A[i]; j++){
            printf("%d ", B[i][j]);
        }
        printf("\n");
    }
    printf("C: ");
    for(int i=0; i<M; i++){
        printf("%d ", C[i]);
    }

    int ans = 0;
    for(int i=0; i<M; i++){
        if(C[i] == N){
            ans++;
        }
    }
    cout << ans << endl;
}

int main(){
    int N, M;
    cin >> N >> M;
    vector<int> foods(M);
    for(int i=0; i<N; i++){
        int K;
        cin >> K;
        for(int j=0; j<K; j++){
            int A;
            cin >> A;
            foods[A - 1]++;
        }
    }
    int ans = 0;
    for(int i=0; i<M; i++){
        if(foods[i] == N){
            ans++;
        }
    }
    cout << ans << endl;
    return 0;
}