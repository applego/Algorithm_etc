/*
・回文数（先頭が0でなく、前から読んでも後ろから読んでも同じ値）
・A以上B以下の整数のうち、回文数であるものの個数を求める
・10000 <= A <= B <= 99999
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int A, B;
    cin >> A >> B;
    int ans = 0;
    for(int i= A; i <= B; i++){
        int a = i / 10000;
        int b = i / 1000 % 10;
        int c = i / 100 % 10;
        int d = i / 10 % 10;
        int e = i % 10;
        if(a == e && b == d) ans++;
    }
    cout << ans << endl;
    return 0;
}