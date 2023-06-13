/*
11/18は隣り合うリュカ数
・整数Nが与えられるので、N番目のリュカ数を求めよ
リュカ数はi番目のリュカ数をLiとすると、
L0 = 2
L1 = 1
Li = Li-1 + Li-2 (i>=2)

制約
・1 <= N <= 86
・入力はすべて整数
・N番目のリュカ数は10^18を超えない


*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    long long L[87];
    L[0] = 2;
    L[1] = 1;
    for(int i=2; i<=N; i++){
        L[i] = L[i-1] + L[i-2];
    }
    cout << L[N] << endl;
    return 0;
}