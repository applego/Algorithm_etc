#include <bits/stdc++.h>
using namespace std;

int main(){
    long long N,A,B;
    cin >> N >> A >> B;
    long long ans = 0;
    if(N % (A + B) == 0){
        ans = N / (A + B) * A;
    }else{
        ans = N / (A + B) * A;
        if(N % (A + B) <= A){
            ans += N % (A + B);
        }else{
            ans += A;
        }
    }
    cout << ans << endl;
}
