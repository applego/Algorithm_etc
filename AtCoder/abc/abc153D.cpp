#include <bits/stdc++.h>
using namespace std;


int main(){
    long long H;
    cin >> H;

    long long ans = 0;
    long long count = 1;
    while(H > 0){
        ans += count;
        H /= 2;
        count *= 2;

        // printf("H: %lld, ans: %lld, count: %lld\n", H, ans, count);
    }
    cout << ans << endl;
}
