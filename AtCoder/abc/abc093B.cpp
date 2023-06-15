/*
問題文
以下を満たす整数をすべて昇順に出力してください。

A 以上 
B 以下の整数の中で、小さい方から 
K 番目以内であるか、大きい方から 
K 番目以内である
制約
1≤A≤B≤10 
9
 
1≤K≤100
入力はすべて整数である

入力
A B K

AからA+K-1までの整数と、B-K+1からBまでの整数を昇順に出力してください。
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int A,B,K;
    cin >> A >> B >> K;
    if(B-A+1<=2*K){
        for(int i=A;i<=B;i++){
            cout << i << endl;
        }
        return 0;
    }

    for(int i=A;i<=A+K-1;i++){
        cout << i << endl;
    }
    for(int i=B-K+1;i<=B;i++){
        cout << i << endl;
    }
}