/*
問題文
消費税率が 
8 %のとき 
A 円、
10 ％のとき 
B 円の消費税が課されるような商品の税抜き価格を求めてください。

ただし、税抜き価格は正の整数でなければならないものとし、消費税の計算において小数点以下は切り捨てて計算するものとします。

条件を満たす税抜き価格が複数存在する場合は最も小さい金額を出力してください。また、条件を満たす税抜き価格が存在しない場合は -1 と出力してください。

制約
1≤A≤B≤100
A,B は整数である


*/

#include <bits/stdc++.h>
using namespace std;

int zeinuki(double tax_rate, int price_only_tax) {
    double result = price_only_tax / tax_rate;
    int result_int = (int)result;
    return result_int;
}

int main(){
    int yen_at_tax8,yen_at_tax10;
    cin >> yen_at_tax8 >> yen_at_tax10;

    int zeinuki_price8 = zeinuki(0.08,yen_at_tax8);
    int zeinuki_price10 = zeinuki(0.1,yen_at_tax10);

    // printf("%d %d\n",zeinuki_price8,zeinuki_price10);

    if(zeinuki_price8 == zeinuki_price10){
        cout << zeinuki_price8 << "\n";
        return 0;
    }
    for(int i = max(zeinuki_price8,zeinuki_price10);i<1000;i++){
        int only_tax8 = i * 0.08;
        int only_tax10 = i * 0.1;
        if(only_tax8 == yen_at_tax8 && only_tax10 == yen_at_tax10){
            cout << i << "\n";
            return 0;
        }
        if(only_tax8 > yen_at_tax8 || only_tax10 > yen_at_tax10){
            cout << -1 << "\n";
            return 0;
        }
    }
}

#include <bits/stdc++.h>
using namespace std;

int main(){
    int A,B;
    cin >> A >> B;
    for(int i=0; i<= 1000; i++){
        if(i*2/25 == A && i*1/10 == B){
            cout << i << endl;
            return 0;
        }
    }
    cout << -1 << endl;
    return 0;
}