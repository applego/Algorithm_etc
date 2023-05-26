// A
// 1. x個のお菓子を配りきる（N人の子供に）
// 2. 0個のお菓子をもらう子どもがいてもよい
// 3. ai個もらえると、喜ぶため、この喜びを最大化したい

// 少ない数で、満足する子供を優先？
// 
#include <bits/stdc++.h>
using namespace std;


int main(){
    int N,x;
    cin >> N >> x;
    vector<int> a(N);
    for(int i=0; i<N; i++){
        cin >> a[i];
    }
    sort(a.begin(), a.end());
    int ans = 0;
    for (int i = 0; i < N;i++){
        if(x >= a[i]){
            x -= a[i];
            ans++;
        }else{
            break;
        }
    }
    if(x > 0 && ans == N){
        ans--;
    }
    cout << ans << endl;
}

