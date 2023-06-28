/*
AtCoder 商店では、以下の 
6 種類の品物が 
1000000 個ずつ売られています。

1 個 
100 円のおにぎり
1 個 
101 円のサンドイッチ
1 個 
102 円のクッキー
1 個 
103 円のケーキ
1 個 
104 円の飴
1 個 
105 円のパソコン
高橋君は、合計価格がちょうど 
X 円となるような買い物をしたいです。そのような買い方が存在するか判定してください。
ただし、消費税は考えないものとします。
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int X;
    cin >> X;
    int a = X / 100;
    int b = X % 100;

    // printf("%d\n", a);
    // printf("%d\n", b);

    if(b <= a*5){
        cout << 1 << endl;
    }else{
        cout << 0 << endl;
    }
}