/*
N 個のレンガが横一列に並んでいます。

左から 
i (1≤i≤N) 番目のレンガには、整数 
a 
i
​
  が書かれています。

あなたはこのうち 
N−1 個以下の任意のレンガを選んで砕くことができます。

その結果、
K 個のレンガが残っているとします。このとき、任意の整数 
i (1≤i≤K) について、残っているレンガの中で左から 
i 番目のものに書かれた整数が 
i であるとき、すぬけさんは満足します。

すぬけさんが満足するために砕く必要のあるレンガの最小個数を出力してください。もし、どのように砕いてもそれが不可能な場合、代わりに -1 を出力してください。

砕く：削除
    →順番（インデックスが変わる）
    そのときにi番目の整数がiであればOK
砕く個数0からN-1までで、達成すればそれまでに砕いた個数を出力して終了
N-1までやってNGなら-1を出力して終了

砕いたけっかが初項1公差1の等差数列になる必要
    左側に大きい数値があったら削除する

*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    vector<int> a(N);
    for(int i=0; i<N; i++){
        cin >> a.at(i);
    }

    int count = 0;
    int i = 0;
    while(i < N){
        if(a.at(i) == count+1){
            count++;
        }
        i++;
    }

    if(count == 0){
        cout << -1 << endl;
    }else{
        cout << N - count << endl;
    }
}