#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    vector<int> P(N);
    vector<int> Q(N);
    for(int i=0; i<N; i++){
        cin >> P[i];
    }
    for(int i=0; i<N; i++){
        cin >> Q[i];
    }
    int a = 0, b = 0;
    while(next_permutation(P.begin(), P.end())){
        a++;
    }
    while(next_permutation(Q.begin(), Q.end())){
        b++;
    }

    int ans = abs(a - b);
    cout << ans << endl;
    return 0;
}