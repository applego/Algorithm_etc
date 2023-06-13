/*
a君、b君、c君が整数A,B,Cをそれそれ持っている
[操作]はK回行った後、
a君が持っている整数からb君が持っている整数を引いた値を求めて

[操作]
三人同時に、他の二人の持っている整数の和を求める
そのあと、自分の持っている整数を求めた整数で置き換える

答えの絶対値が10^18を超える場合は、"Unfair"を出力する

制約
1 <= A,B,C <= 10^18
0 <= K <= 10^18
入力はすべて整数

考え方
・Kが偶数の場合
    a-b,b-c,c-aの値は変わらない
・Kが奇数の場合
    a-b,b-c,c-aの値は反転する
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    long long a,b,c,k;
    cin >> a >> b >> c >> k;
    if(k%2==0){
        cout << a-b << endl;
    }else{
        cout << b-a << endl;
    }
    return 0;
}