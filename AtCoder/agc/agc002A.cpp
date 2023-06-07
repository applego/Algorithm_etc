#include <bits/stdc++.h>
using namespace std;

int main(){
  int a, b, c;
    cin >> a >> b >> c;

    int ans = 0;
    while(a % 2 == 0 && b % 2 == 0 && c % 2 == 0){
        if(a == b && b == c){
            cout << -1 << endl;
            return 0;
        }
        int aa = a, bb = b, cc = c;
        a = (bb + cc) / 2;
        b = (aa + cc) / 2;
        c = (aa + bb) / 2;
        ans++;
    }
    cout << ans << endl;
}