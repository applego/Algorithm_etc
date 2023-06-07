/*
a b
が入力
bはa以上の整数
-10^9 <= a <= b <= 10^9

a,a+1,a+2,...,b-1,bのすべての積が
    正ならば：Positive
    負ならば：Negative
    0ならば：Zero
を出力せよ

意識、抽象化、抽象化レベルの統一（SLAP）を意識する
TDD


*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    long long a, b;
    cin >> a >> b;

    if(a <= 0 && b >= 0){
        cout << "Zero" << endl;
    }else if(a > 0){
        cout << "Positive" << endl;
    }else{
        if((b - a) % 2 == 0){
            cout << "Negative" << endl;
        }else{
            cout << "Positive" << endl;
        }
    }
}