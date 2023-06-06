#include <bits/stdc++.h>
using namespace std;

int calc(int a[5], vector<int> v){
    int ans = 0;
    for(int i = 0; i < 5; i++){
        ans += a[v[i]];
        if(ans % 10 != 0 && i != 4){
            ans += 10 - ans % 10;
        }
    }
    return ans;
}

int main(){
    int a[5];
    for(int i = 0; i < 5; i++){
        cin >> a[i];
    }
    // aのならび替え全通りを取得
    vector<int> v;
    for(int i = 0; i < 5; i++){
        v.push_back(i);
    }
    int ans = 1000000000;
    do{
        ans = min(ans,calc(a,v));
    }while(next_permutation(v.begin(), v.end()));
    cout << ans << endl;
}