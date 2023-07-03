/*
問題文
高橋君は AtCoder のコンテストに参加しています。

このコンテストでは、 
N 問の問題が出題されます。

高橋君はコンテスト中に 
M 回の提出を行いました。

i 回目の提出は 
p 
i
​
  番目の問題への提出であり、結果は 
S 
i
​
  (AC または WA) でした。

高橋君の正答数は、AC を 
1 回以上出した問題の数です。

高橋君のペナルティ数は、高橋君が AC を 
1 回以上出した各問題において、初めて AC を出すまでに出した WA の数の総和です。

高橋君の正答数とペナルティ数を答えてください。

辞書？
<問題番号,<正答回数,誤回答数>>


*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N,M;
    cin >> N >> M;
    vector<int> p(M);
    vector<string> S(M);
    for(int i=0;i<M;i++){
        cin >> p.at(i) >> S.at(i);
    }
    vector<int> AC(N,0);
    vector<int> WA(N,0);
    for(int i=0;i<M;i++){
        if(S.at(i)=="AC"){
            AC.at(p.at(i)-1)=1;
        }else{
            if(AC.at(p.at(i)-1)==0){
                WA.at(p.at(i)-1)++;
            }
        }
    }
    int ac=0;
    int wa=0;
    for(int i=0;i<N;i++){
        if(AC.at(i)==1){
            ac++;
            wa+=WA.at(i);
        }
    }
    cout << ac << " " << wa << endl;
    return 0;
}